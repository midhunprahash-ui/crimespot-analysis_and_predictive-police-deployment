import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
from sklearn.preprocessing import LabelEncoder
from datetime import datetime, timedelta
import warnings
warnings.filterwarnings('ignore')

class CrimePredictor:
    def __init__(self, csv_path):
        self.df = pd.read_csv(csv_path)
        self.label_encoders = {}
        self.models = {}
        self.prepare_data()

    def prepare_data(self):
        # Convert date components to datetime and add hour
        self.df['date'] = pd.to_datetime(self.df[['year', 'month', 'day']])
        
        categorical_columns = ['area', 'crimeType']
        for column in categorical_columns:
            self.label_encoders[column] = LabelEncoder()
            self.df[column] = self.label_encoders[column].fit_transform(self.df[column])

        self.create_time_series()

    def create_time_series(self):
        self.time_series = {}
        for area in self.df['area'].unique():
            for crime_type in self.df['crimeType'].unique():
                mask = (self.df['area'] == area) & (self.df['crimeType'] == crime_type)
                if mask.any():
                    series = self.df[mask].groupby('date')['count'].sum()
                    series = series.asfreq('D', fill_value=0)
                    self.time_series[(area, crime_type)] = series

    def predict_crime_time(self, area, crime_type):
        # Get historical hour patterns for this area and crime type
        mask = (self.df['area'] == self.label_encoders['area'].transform([area])[0]) & \
               (self.df['crimeType'] == self.label_encoders['crimeType'].transform([crime_type])[0])
        hours = self.df[mask]['hour'].values
        if len(hours) == 0:
            return 12  # Default to noon if no historical data
        return int(np.mean(hours))

    def train_models(self):
        for (area, crime_type), series in self.time_series.items():
            try:
                model = ARIMA(series, order=(1, 1, 1))
                self.models[(area, crime_type)] = model.fit()
            except:
                print(f"Could not train model for area {area} and crime type {crime_type}")

    def predict_future(self, days=7):
        current_date = datetime.now()
        predictions = []

        # Get all unique areas and crime types
        areas = self.label_encoders['area'].inverse_transform(range(len(self.label_encoders['area'].classes_)))
        crime_types = self.label_encoders['crimeType'].inverse_transform(range(len(self.label_encoders['crimeType'].classes_)))

        # Make predictions for each area and crime type
        for area in areas:
            for crime_type in crime_types:
                area_encoded = self.label_encoders['area'].transform([area])[0]
                crime_type_encoded = self.label_encoders['crimeType'].transform([crime_type])[0]
                
                model = self.models.get((area_encoded, crime_type_encoded))
                if model is not None:
                    forecast = model.forecast(steps=days)
                    predicted_hour = self.predict_crime_time(area, crime_type)
                    
                    for i, pred in enumerate(forecast):
                        if pred > 0.5:  # Only include predictions with significant probability
                            pred_date = current_date + timedelta(days=i)
                            predictions.append({
                                'date': pred_date.strftime('%Y-%m-%d'),
                                'time': f'{predicted_hour:02d}:00',
                                'area': area,
                                'crime_type': crime_type,
                                'predicted_count': round(pred, 2),
                                'risk_level': 'high' if pred > 5 else 'moderate' if pred > 2 else 'low'
                            })

        return pd.DataFrame(predictions).sort_values(['date', 'time', 'risk_level'])

def main():
    predictor = CrimePredictor('src/data/storage/thoothukudi_crime_records.csv')
    
    print("Training models...")
    predictor.train_models()
    
    print("\nPredicting crimes for the next 7 days:")
    predictions = predictor.predict_future()
    
    if not predictions.empty:
        print("\nPredicted Crime Patterns:")
        print(predictions.to_string(index=False))
    else:
        print("No predictions available")

if __name__ == "__main__":
    main()