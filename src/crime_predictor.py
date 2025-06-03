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

    def train_models(self):
        for (area, crime_type), series in self.time_series.items():
            try:
                model = ARIMA(series, order=(1, 1, 1))
                self.models[(area, crime_type)] = model.fit()
            except:
                print(f"Could not train model for area {area} and crime type {crime_type}")

    def predict_future(self, area, crime_type, days=7):
        area_encoded = self.label_encoders['area'].transform([area])[0]
        crime_type_encoded = self.label_encoders['crimeType'].transform([crime_type])[0]
        
        model = self.models.get((area_encoded, crime_type_encoded))
        if model is None:
            return None

        forecast = model.forecast(steps=days)
        
        risk_levels = []
        for pred in forecast:
            if pred <= 2:
                risk_levels.append('low')
            elif pred <= 5:
                risk_levels.append('moderate')
            else:
                risk_levels.append('high')

        last_date = self.df['date'].max()
        dates = [(last_date + timedelta(days=i+1)).strftime('%Y-%m-%d') for i in range(days)]
        
        return pd.DataFrame({
            'date': dates,
            'predicted_count': forecast,
            'risk_level': risk_levels
        })

def main():
    predictor = CrimePredictor('src/data/storage/thoothukudi_crime_records.csv')
    
    print("Training models...")
    predictor.train_models()
    
    area = 'Beach Road'
    crime_type = 'theft'
    days = 7
    
    print(f"\nPredicting {crime_type} in {area} for next {days} days:")
    predictions = predictor.predict_future(area, crime_type, days)
    
    if predictions is not None:
        print(predictions)
    else:
        print("No prediction available for this combination")

if __name__ == "__main__":
    main()