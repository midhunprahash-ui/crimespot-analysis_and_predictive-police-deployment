
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import CrimeChart from '@/components/CrimeChart';
import { Card } from '@/components/ui/card';
import SearchBar from '@/components/SearchBar';
import { RiskBadge } from '@/components/ui/risk-badge';
import { getAreaStatistics, getMonthlyDataForArea, getHourlyData, getFestivalData, getCrimeTypeData } from '@/data/crimeData';
import { toast } from '@/components/ui/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Analytics = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const areaParam = searchParams.get('area') || '';
  
  const [searchQuery, setSearchQuery] = useState(areaParam);
  const [areaStats, setAreaStats] = useState(areaParam ? getAreaStatistics(areaParam) : null);
  const [showInitialMessage, setShowInitialMessage] = useState(!areaParam);
  const [monthlyData, setMonthlyData] = useState(areaParam ? getMonthlyDataForArea(areaParam) : []);
  const [timeData, setTimeData] = useState(areaParam ? getHourlyData(areaParam) : []);
  const [festivalData, setFestivalData] = useState(areaParam ? getFestivalData(areaParam) : []);
  const [crimeTypeData, setCrimeTypeData] = useState(areaParam ? getCrimeTypeData(areaParam) : []);
  
  useEffect(() => {
    if (areaParam) {
      setSearchQuery(areaParam);
      setShowInitialMessage(false);
      updateAllData(areaParam);
    }
  }, [areaParam]);
  
  const updateAllData = (area: string) => {
    try {
      console.log(`Analytics: Fetching data for "${area}"`);
      
      // Update all data sets
      const stats = getAreaStatistics(area);
      const monthly = getMonthlyDataForArea(area);
      const hourly = getHourlyData(area);
      const festival = getFestivalData(area);
      const crimeTypes = getCrimeTypeData(area);
      
      setAreaStats(stats);
      setMonthlyData(monthly);
      setTimeData(hourly);
      setFestivalData(festival);
      setCrimeTypeData(crimeTypes);
      setShowInitialMessage(false);
    } catch (error) {
      console.error("Error getting area data:", error);
      toast({
        title: "Error loading data",
        description: "Could not load statistics for the selected area",
        variant: "destructive",
      });
    }
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    updateAllData(query);
  };
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20 pb-4 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Crime Trends & Insights</h1>
            <p className="text-muted-foreground">
              {searchQuery ? `Showing analytics for: ${searchQuery}` : 'District-wide crime analytics'}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <SearchBar 
              className="w-full md:w-64" 
              onSearch={handleSearch}
              initialQuery={searchQuery}
            />
          </div>
        </div>
        
        {showInitialMessage ? (
          <Alert className="mb-6">
            <AlertDescription>
              Search for any area in Thoothukudi to view detailed crime analytics
            </AlertDescription>
          </Alert>
        ) : areaStats ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Crimes</h3>
                <p className="text-2xl font-bold">{areaStats.totalCrimes}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {areaStats.changePercentage > 0 ? '+' : ''}{areaStats.changePercentage}% from last month
                </p>
              </Card>
              
              <Card className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Risk Level</h3>
                <RiskBadge level={areaStats.riskLevel} className="text-lg" />
              </Card>
              
              <Card className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Peak Time</h3>
                <p className="text-2xl font-bold">{areaStats.peakTime}</p>
                <p className="text-sm text-muted-foreground mt-1">Highest activity period</p>
              </Card>
              
              <Card className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">High Risk Days</h3>
                <p className="text-2xl font-bold">{areaStats.highRiskDays}</p>
                <p className="text-sm text-muted-foreground mt-1">Most incidents reported</p>
              </Card>
            </div>
            
            <CrimeChart 
              area={searchQuery}
              monthlyData={monthlyData}
              timeData={timeData}
              festivalData={festivalData}
              crimeTypeData={crimeTypeData}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Analytics;
