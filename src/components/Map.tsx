import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap, Tooltip } from 'react-leaflet';
import { CrimeRecord } from '@/data/crimeData';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { CrimePrediction } from '@/utils/apiUtils';
import { useToast } from '@/components/ui/use-toast';
import { 
  Shield, 
  ShieldAlert, 
  MapPin, 
  CircleAlert, 
  Flag,
  Users,
  AlertTriangle, 
  Clock,
  BadgeAlert
} from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from '@/lib/utils';

// Fix Leaflet icon issue in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface MapProps {
  area?: string;
  crimeData?: CrimeRecord[];
  predictions?: CrimePrediction | null;
  showDeploymentSuggestions?: boolean;
  staticMode?: boolean;
  selectedDate?: string;
}

// Component to set the map view
const MapViewSetter = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);
  return null;
};

// Create custom marker icons for different types
const createIcon = (color: string, icon: JSX.Element) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: ${color}; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-weight: bold; box-shadow: 0 0 10px rgba(0,0,0,0.3);">${icon}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });
};

// SVG for shield icon
const shieldSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;

// SVG for alert icon
const alertSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;

const Map: React.FC<MapProps> = ({ 
  area = '', 
  crimeData = [],
  predictions = null,
  showDeploymentSuggestions = false,
  staticMode = false,
  selectedDate
}) => {
  const { toast } = useToast();
  const [activeHeatmap, setActiveHeatmap] = useState<string>('all');
  
  // Thoothukudi center coordinates
  const centerCoords: [number, number] = [8.7642, 78.1348]; // Latitude, Longitude

  // Crime type colors
  const crimeColors = {
    theft: '#ef4444', // red
    assault: '#f97316', // orange
    vandalism: '#8b5cf6', // purple
    drugs: '#0ea5e9', // blue
    robbery: '#d946ef', // magenta
    harassment: '#14b8a6', // teal
    all: '#3b82f6', // blue
  };

  // Get time ranges for different periods of the day
  const getTimeRangeDescription = (timeRange: string): string => {
    const [start, end] = timeRange.split('-');
    const startHour = parseInt(start.split(':')[0]);
    
    if (startHour >= 5 && startHour < 12) return 'Morning';
    if (startHour >= 12 && startHour < 17) return 'Afternoon';
    if (startHour >= 17 && startHour < 21) return 'Evening';
    return 'Night';
  };

  // Adjust hotspot positions to prevent overlapping
  const adjustHotspotPositions = (hotspots: any[]) => {
    if (!hotspots || hotspots.length === 0) return [];

    const adjustedHotspots = [...hotspots];
    const minDistance = 0.02; // Minimum distance between hotspot centers (increased for better spacing)

    // Improved algorithm to adjust positions
    for (let i = 0; i < adjustedHotspots.length; i++) {
      for (let j = i + 1; j < adjustedHotspots.length; j++) {
        const spot1 = adjustedHotspots[i];
        const spot2 = adjustedHotspots[j];
        
        const distance = Math.sqrt(
          Math.pow(spot1.latitude - spot2.latitude, 2) + 
          Math.pow(spot1.longitude - spot2.longitude, 2)
        );
        
        if (distance < minDistance) {
          // Move spots away from each other
          const angle = Math.atan2(spot2.latitude - spot1.latitude, spot2.longitude - spot1.longitude);
          const adjustment = (minDistance - distance) / 1.5;
          
          // Adjust spot1
          adjustedHotspots[i].latitude -= adjustment * Math.sin(angle);
          adjustedHotspots[i].longitude -= adjustment * Math.cos(angle);
          
          // Adjust spot2
          adjustedHotspots[j].latitude += adjustment * Math.sin(angle);
          adjustedHotspots[j].longitude += adjustment * Math.cos(angle);
        }
      }
    }
    
    return adjustedHotspots;
  };

  // Generate detailed predictions for static view
  const generateDetailedPredictions = () => {
    if (!predictions) return [];
    
    // Flatten all crime hotspots for easy filtering
    const allHotspots = predictions.predictedCrimes.flatMap(crime => 
      crime.hotspots.map(hotspot => ({
        ...hotspot,
        crimeType: crime.crimeType,
        probability: crime.probability,
        timeRange: getTimeRangeDescription(predictions.timeRange)
      }))
    );
    
    // Adjust hotspot positions to prevent overlapping
    return adjustHotspotPositions(allHotspots);
  };

  // Create deployment marker icon
  const createDeploymentIcon = (officers: number) => {
    return L.divIcon({
      className: 'custom-deployment-icon',
      html: `
        <div style="position: relative;">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#0284c7" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="4" fill="white" stroke="#0284c7"></circle>
          </svg>
          <div style="position: absolute; top: 7px; left: 0; right: 0; text-align: center; font-weight: bold; color: #0284c7; font-size: 12px;">${officers}</div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });
  };

  // Filter hotspots by crime type
  const getFilteredHotspots = () => {
    const detailedPredictions = generateDetailedPredictions();
    
    if (activeHeatmap === 'all') {
      return detailedPredictions;
    }
    
    return detailedPredictions.filter(
      hotspot => hotspot.crimeType === activeHeatmap
    );
  };
  
  // Ensure deployment markers are positioned within their related hotspots
  const getDeploymentPositions = () => {
    if (!predictions || !predictions.deploymentSuggestions) return [];
    
    const hotspots = getFilteredHotspots();
    const deployments = [...predictions.deploymentSuggestions];
    
    // For each hotspot, ensure there's a deployment suggestion
    return hotspots.map((hotspot, index) => {
      // Find the corresponding deployment (if it exists)
      const existingDeployment = deployments.find(d => 
        Math.abs(d.latitude - hotspot.latitude) < 0.001 && 
        Math.abs(d.longitude - hotspot.longitude) < 0.001
      );
      
      if (existingDeployment) {
        // If a deployment exists for this hotspot, use it but adjust position slightly
        // Position it within the hotspot but slightly offset from center
        const offsetDistance = 0.003 * Math.random(); // Small random offset
        const offsetAngle = Math.random() * Math.PI * 2; // Random angle
        
        return {
          ...existingDeployment,
          latitude: hotspot.latitude + offsetDistance * Math.sin(offsetAngle),
          longitude: hotspot.longitude + offsetDistance * Math.cos(offsetAngle)
        };
      } else {
        // If no deployment exists for this hotspot, create a new one
        // This should never happen with our updated data generation,
        // but adding as a fallback just in case
        const officersRecommended = hotspot.crimeType === 'theft' ? 
          4 + Math.floor(Math.random() * 4) : // 4-7 officers for theft
          2 + Math.floor(Math.random() * 3);  // 2-4 officers for other crimes
        
        const priority = hotspot.crimeType === 'theft' ? 
          (Math.random() < 0.7 ? 'high' : 'medium') :
          (Math.random() < 0.5 ? 'medium' : 'low');
          
        // Position slightly offset from center of hotspot
        const offsetDistance = 0.003 * Math.random(); // Small random offset
        const offsetAngle = Math.random() * Math.PI * 2; // Random angle
        
        return {
          location: `${area} Zone ${index + 1}`,
          latitude: hotspot.latitude + offsetDistance * Math.sin(offsetAngle),
          longitude: hotspot.longitude + offsetDistance * Math.cos(offsetAngle),
          officersRecommended,
          priority
        };
      }
    });
  };

  // Get all unique crime types from predictions
  const getUniqueCrimeTypes = (): string[] => {
    if (!predictions) return ['all'];
    
    const crimeTypes = predictions.predictedCrimes.map(crime => crime.crimeType);
    return ['all', ...new Set(crimeTypes)];
  };

  // Format priority for display
  const formatPriority = (priority: string) => {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  return (
    <div className="w-full h-[calc(100vh-10rem)] relative">
      {/* Map implementation with Leaflet */}
      <div className="w-full h-full relative">
        <MapContainer 
          center={centerCoords} 
          zoom={13} 
          style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <MapViewSetter center={centerCoords} />
          
          {/* Display prediction hotspots as heatmap */}
          {getFilteredHotspots().map((hotspot, index) => {
            const color = crimeColors[hotspot.crimeType as keyof typeof crimeColors] || '#3b82f6';
            
            return (
              <Circle
                key={`prediction-${index}`}
                center={[hotspot.latitude, hotspot.longitude]}
                radius={300 + (hotspot.intensity * 500)} // Scale circle by intensity
                pathOptions={{ 
                  fillColor: color,
                  fillOpacity: 0.3 * hotspot.intensity,
                  color: color,
                  weight: 1
                }}
              >
                <Popup className="crime-popup">
                  <div className="p-1">
                    <h3 className="font-semibold capitalize text-base">{hotspot.crimeType} Hotspot</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <AlertTriangle className="h-3 w-3 text-risk-high" />
                      <p className="text-xs">Risk: {(hotspot.probability * 100).toFixed(1)}%</p>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <p className="text-xs">Time: {hotspot.timeRange}</p>
                    </div>
                  </div>
                </Popup>
              </Circle>
            );
          })}
          
          {/* Display deployment suggestions as markers with tooltips */}
          {showDeploymentSuggestions && predictions && getDeploymentPositions().map((suggestion, index) => (
            <Marker
              key={`deploy-${index}`}
              position={[suggestion.latitude, suggestion.longitude]}
              icon={createDeploymentIcon(suggestion.officersRecommended)}
            >
              <Tooltip permanent={false} direction="top" className="custom-tooltip">
                <div className="text-xs font-medium">{suggestion.location}</div>
              </Tooltip>
              <Popup>
                <div className="p-1 w-48">
                  <h3 className="font-semibold text-base">{suggestion.location}</h3>
                  
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-xs">Recommended Officers</span>
                      </div>
                      <span className="font-medium">{suggestion.officersRecommended}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <BadgeAlert className="h-4 w-4 text-primary" />
                        <span className="text-xs">Priority</span>
                      </div>
                      <span className={cn("text-xs font-medium px-1.5 py-0.5 rounded-full",
                        suggestion.priority === 'high' ? "bg-risk-high/10 text-risk-high" :
                        suggestion.priority === 'medium' ? "bg-risk-moderate/10 text-risk-moderate" :
                        "bg-risk-low/10 text-risk-low"
                      )}>
                        {formatPriority(suggestion.priority)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-xs">Time of Day: All Day</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 text-xs text-muted-foreground">
                    Deployment needed to address predicted {
                      predictions.predictedCrimes
                      .slice(0, 2)
                      .map(c => c.crimeType)
                      .join(' and ')
                    } activities.
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      {/* Map Controls Sidebar */}
      <div className="absolute top-4 right-4 w-64 glass rounded-lg p-4 shadow-lg z-[1000] bg-white/90 backdrop-blur-sm">
        <h3 className="font-medium text-sm mb-3">Crime Heatmap Analysis</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Filter by Crime Type</p>
            <div className="grid grid-cols-2 gap-1">
              {getUniqueCrimeTypes().map(crimeType => (
                <button
                  key={crimeType}
                  onClick={() => setActiveHeatmap(crimeType)}
                  className={cn(
                    "py-1 px-2 text-xs font-medium transition-colors rounded-md",
                    activeHeatmap === crimeType 
                      ? "bg-primary text-white" 
                      : "bg-muted/30 text-muted-foreground hover:bg-muted"
                  )}
                >
                  {crimeType === 'all' ? 'All Crimes' : 
                    crimeType.charAt(0).toUpperCase() + crimeType.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Crime Hotspot Colors</p>
            <div className="flex flex-col space-y-1">
              {Object.entries(crimeColors)
                .filter(([type]) => getUniqueCrimeTypes().includes(type))
                .map(([type, color]) => (
                  <div key={type} className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
                    <span className="text-xs capitalize">
                      {type === 'all' ? 'All Crimes' : type}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          
          <div className="space-y-1 pt-1 border-t border-border">
            <p className="text-xs text-muted-foreground">Map Legend</p>
            <div className="flex items-center space-x-2 mt-1">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0284c7" stroke="#ffffff" stroke-width="1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="4" fill="white" stroke="#0284c7"></circle>
                </svg>
              </div>
              <span className="text-xs">Police Deployment Point</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary/30 border border-primary"></div>
              <span className="text-xs">Crime Hotspot</span>
            </div>
          </div>
          
          {predictions && (
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground mb-1">
                Last Updated: {new Date().toLocaleTimeString()}
              </p>
              <p className="text-xs">
                {predictions.predictedCrimes.length} crime types predicted
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;
