
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DeploymentData {
  area: string;
  locations: string;
  officers: number;
  timing: string;
  risk: 'high' | 'moderate' | 'low';
  likelyCrimes: string[];
}

const deploymentData: DeploymentData[] = [
  { 
    area: 'Thoothukudi Port', 
    locations: 'Harbor, Customs Office, Container Terminal', 
    officers: 15, 
    timing: '18:00 - 06:00', 
    risk: 'high',
    likelyCrimes: ['theft', 'smuggling', 'vandalism']
  },
  { 
    area: 'Beach Road', 
    locations: 'Tourism Zone, Fishing Harbor', 
    officers: 8, 
    timing: '16:00 - 00:00', 
    risk: 'moderate',
    likelyCrimes: ['theft', 'harassment']
  },
  { 
    area: 'Tiruchendur Road', 
    locations: 'Shopping Complex, Bus Terminal', 
    officers: 12, 
    timing: '17:00 - 01:00', 
    risk: 'high',
    likelyCrimes: ['theft', 'robbery', 'assault']
  },
  { 
    area: 'Palayamkottai Road', 
    locations: 'Hospitals, Schools', 
    officers: 6, 
    timing: '08:00 - 20:00', 
    risk: 'low',
    likelyCrimes: ['theft', 'drugs']
  },
  { 
    area: 'Millerpuram', 
    locations: 'Residential Areas, Markets', 
    officers: 10, 
    timing: '19:00 - 03:00', 
    risk: 'moderate',
    likelyCrimes: ['burglary', 'vandalism']
  },
];

const DeploymentTable: React.FC = () => {
  const { toast } = useToast();
  
  const handleAlert = (area: string) => {
    toast({
      title: `Alert Sent for ${area}`,
      description: "Notification dispatched to the respective police station.",
    });
  };
  
  const getRiskColor = (risk: 'high' | 'moderate' | 'low') => {
    switch (risk) {
      case 'high':
        return 'bg-risk-high/10 text-risk-high border-risk-high/20';
      case 'moderate':
        return 'bg-risk-moderate/10 text-risk-moderate border-risk-moderate/20';
      case 'low':
        return 'bg-risk-low/10 text-risk-low border-risk-low/20';
      default:
        return '';
    }
  };
  
  return (
    <Card className="w-full overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Police Deployment Suggestions</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Area</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Important Locations</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Officers Required</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Optimal Timing</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Risk Level</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Likely Crimes</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {deploymentData.map((deployment, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-border ${index % 2 === 0 ? 'bg-muted/30' : ''}`}
                >
                  <td className="px-4 py-3 text-sm">{deployment.area}</td>
                  <td className="px-4 py-3 text-sm">{deployment.locations}</td>
                  <td className="px-4 py-3 text-sm">{deployment.officers}</td>
                  <td className="px-4 py-3 text-sm">{deployment.timing}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(deployment.risk)} border`}>
                      {deployment.risk.charAt(0).toUpperCase() + deployment.risk.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex flex-wrap gap-1">
                      {deployment.likelyCrimes.map((crime, i) => (
                        <span 
                          key={i}
                          className="bg-muted px-1.5 py-0.5 rounded-md text-xs"
                        >
                          {crime}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs"
                      onClick={() => handleAlert(deployment.area)}
                    >
                      <Bell className="h-3 w-3 mr-1" />
                      Send Alert
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default DeploymentTable;
