
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Map from '@/components/Map';
import { getCrimeDataForArea, getCrimeDataForDate } from '@/data/crimeData';
import { getPredictions, CrimePrediction } from '@/utils/apiUtils';
import { useToast } from '@/components/ui/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CrimeMap = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [predictions, setPredictions] = useState<CrimePrediction | null>(null);
  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState('2025-04-12');
  const [dateSpecificData, setDateSpecificData] = useState<any>(null);
  
  // Default to showing Thoothukudi District data
  const defaultArea = 'Thoothukudi District';
  
  const fetchDailyData = async (date: string) => {
    setIsLoading(true);
    try {
      const params = { 
        area: defaultArea, 
        date: date,
        timeRange: "00:00-23:59" 
      };
      
      const crimeData = getCrimeDataForDate(defaultArea, new Date(date));
      const predictionData = await getPredictions(params);

      setPredictions(predictionData);
      setDateSpecificData(crimeData);
      setError('');
    } catch (error) {
      console.error('Error fetching daily data:', error);
      setError('Failed to load data for the selected date.');
      toast({
        title: "Error loading data",
        description: "Failed to fetch predictions and crime data.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDailyData(selectedDate);
  }, [selectedDate, toast]);

  const handleDateChange = (direction: 'prev' | 'next') => {
    const currentDate = new Date(selectedDate);
    const newDate = new Date(currentDate);
    
    if (direction === 'prev') {
      newDate.setDate(currentDate.getDate() - 1);
    } else {
      newDate.setDate(currentDate.getDate() + 1);
    }
    
    setSelectedDate(newDate.toISOString().split('T')[0]);
  };
  
  // Format the display date
  const displayDate = new Date(selectedDate + 'T00:00:00');
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20 pb-4 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Crime Hotspot Analysis</h1>
            <p className="text-muted-foreground">
              Predicted crime hotspots for Thoothukudi District on {displayDate.toLocaleDateString('en-IN', { 
                day: 'numeric', month: 'long', year: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-3">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDateChange('prev')}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-md">
                <Calendar className="h-4 w-4" />
                <span>{displayDate.toLocaleDateString('en-IN', { 
                  weekday: 'long',
                  day: 'numeric', 
                  month: 'short', 
                  year: 'numeric' 
                })}</span>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDateChange('next')}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-md">
              <Clock className="h-4 w-4" />
              <span>Updated at {new Date().toLocaleTimeString('en-IN', { 
                hour: '2-digit', minute: '2-digit' 
              })}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-md">
              <Shield className="h-4 w-4" />
              <span>Live Prediction</span>
            </div>
          </div>
        </div>
        
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {isLoading ? (
          <div className="w-full h-[calc(100vh-12rem)] flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-3"></div>
              <p className="text-muted-foreground">Loading data for {displayDate.toLocaleDateString('en-IN', { 
                weekday: 'long',
                day: 'numeric', 
                month: 'short'
              })}...</p>
            </div>
          </div>
        ) : (
          <Map 
            area={defaultArea} 
            crimeData={dateSpecificData} 
            predictions={predictions}
            showDeploymentSuggestions={true}
            staticMode={false}
            selectedDate={selectedDate}
          />
        )}
      </div>
    </div>
  );
};

export default CrimeMap;
