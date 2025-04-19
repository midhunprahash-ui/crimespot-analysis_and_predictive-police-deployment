
import React from 'react';
import Header from '@/components/Header';
import DeploymentTable from '@/components/DeploymentTable';
import { Card } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface WeeklyDeployment {
  date: string;
  day: string;
  risk: string;
  areas: Array<{
    name: string;
    likelyCrimes: string[];
  }>;
}

const Deployment = () => {
  const { toast } = useToast();
  const currentDate = "12/4/2025";
  
  const weeklyDeployment: WeeklyDeployment[] = [
    { 
      date: '13/4/2025', 
      day: 'Sunday', 
      risk: 'moderate', 
      areas: [
        { name: 'V.O.C Market', likelyCrimes: ['theft', 'pickpocketing', 'robbery'] },
        { name: 'Railway Station', likelyCrimes: ['theft', 'harassment'] }
      ] 
    },
    { 
      date: '14/4/2025', 
      day: 'Monday', 
      risk: 'high', 
      areas: [
        { name: 'Thoothukudi Port', likelyCrimes: ['smuggling', 'theft', 'vandalism'] },
        { name: 'V.O.C Market', likelyCrimes: ['theft', 'robbery', 'assault'] }
      ] 
    },
    { 
      date: '15/4/2025', 
      day: 'Tuesday', 
      risk: 'moderate', 
      areas: [
        { name: 'Beach Road', likelyCrimes: ['theft', 'harassment', 'vandalism'] },
        { name: 'Railway Station', likelyCrimes: ['theft', 'pickpocketing'] }
      ] 
    },
    { 
      date: '16/4/2025', 
      day: 'Wednesday', 
      risk: 'low', 
      areas: [
        { name: 'Millerpuram', likelyCrimes: ['burglary', 'vandalism'] },
        { name: 'Bryant Nagar', likelyCrimes: ['theft', 'burglary'] }
      ] 
    },
    { 
      date: '17/4/2025', 
      day: 'Thursday', 
      risk: 'high', 
      areas: [
        { name: 'SPIC Nagar', likelyCrimes: ['theft', 'drugs', 'vandalism'] },
        { name: 'Tiruchendur Road', likelyCrimes: ['robbery', 'assault', 'theft'] }
      ] 
    },
    { 
      date: '18/4/2025', 
      day: 'Friday', 
      risk: 'moderate', 
      areas: [
        { name: 'Palayamkottai Road', likelyCrimes: ['theft', 'drugs'] },
        { name: 'Bus Terminal', likelyCrimes: ['theft', 'pickpocketing', 'harassment'] }
      ] 
    },
    { 
      date: '19/4/2025', 
      day: 'Saturday', 
      risk: 'high', 
      areas: [
        { name: 'Beach Road', likelyCrimes: ['theft', 'harassment', 'assault'] },
        { name: 'Container Terminal', likelyCrimes: ['theft', 'smuggling', 'vandalism'] }
      ] 
    },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-risk-high/10 text-risk-high border-risk-high/20';
      case 'moderate': return 'bg-risk-moderate/10 text-risk-moderate border-risk-moderate/20';
      case 'low': return 'bg-risk-low/10 text-risk-low border-risk-low/20';
      default: return '';
    }
  };

  const handleSendAll = () => {
    toast({
      title: "Alerts Sent",
      description: "Deployment notifications have been sent to all stations.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 pb-4 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Police Deployment Suggestions</h1>
            <p className="text-muted-foreground">Weekly Deployment Plan starting {currentDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-6">
          {weeklyDeployment.map((day) => (
            <Card key={day.date} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{day.day}</span>
                <span className={cn(
                  "text-xs px-2 py-1 rounded-full border",
                  getRiskColor(day.risk)
                )}>
                  {day.risk.charAt(0).toUpperCase() + day.risk.slice(1)}
                </span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">{day.date}</div>
              <Separator className="my-2" />
              <div className="space-y-3">
                {day.areas.map((area, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      {area.name}
                    </div>
                    <div className="flex flex-wrap gap-1 pl-3">
                      {area.likelyCrimes.map((crime, i) => (
                        <span 
                          key={i}
                          className="bg-muted px-1.5 py-0.5 rounded-md text-xs"
                        >
                          {crime}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 mb-6">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-risk-high mr-2" />
            <h2 className="text-lg font-medium">High Alert Areas Today</h2>
          </div>
          <Separator className="my-4" />
          <p className="text-muted-foreground">
            Special attention is needed in the following areas due to predicted high crime risk:
          </p>
          <ul className="mt-2 space-y-1">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-risk-high mr-2"></span>
              <span>Thoothukudi Port - Container Terminal (18:00 - 06:00)</span>
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-risk-high mr-2"></span>
              <span>Tiruchendur Road - Commercial Areas (17:00 - 01:00)</span>
            </li>
          </ul>
          <div className="mt-4">
            <Button onClick={handleSendAll}>Send Alerts to All Stations</Button>
          </div>
        </Card>

        <DeploymentTable />
      </div>
    </div>
  );
};

export default Deployment;
