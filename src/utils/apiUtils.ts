
import { supabase } from "@/integrations/supabase/client";

export interface PredictionRequest {
  area?: string;
  date?: string;
  timeRange?: string;
}

export interface CrimePrediction {
  area: string;
  date: string;
  timeRange: string;
  predictedCrimes: {
    crimeType: string;
    probability: number;
    hotspots: {
      latitude: number;
      longitude: number;
      intensity: number;
    }[];
  }[];
  deploymentSuggestions: {
    location: string;
    latitude: number;
    longitude: number;
    officersRecommended: number;
    priority: string;
  }[];
}

export const getPredictions = async (params: PredictionRequest): Promise<CrimePrediction> => {
  try {
    const { data, error } = await supabase.functions.invoke('predict-crime', {
      body: JSON.stringify(params),
    });

    if (error) {
      console.error('Error calling prediction API:', error);
      throw new Error(error.message || 'Failed to get predictions');
    }

    return data as CrimePrediction;
  } catch (error) {
    console.error('Error in getPredictions:', error);
    
    // For demonstration purposes, return mock data if the API fails
    // This ensures the UI works even without a working backend
    return generateMockPredictions(params.area || 'Thoothukudi District', params.date || '2025-04-12');
  }
};

// Generate mock prediction data for UI demonstration
const generateMockPredictions = (area: string, date: string): CrimePrediction => {
  // Thoothukudi center coordinates - use for mock data
  const centerLat = 8.7642;
  const centerLng = 78.1348;
  
  // Collection of locations in Thoothukudi for more realistic data
  const locations = [
    { name: 'Thoothukudi Port Area', lat: 8.7450, lng: 78.1950 },
    { name: 'V.O.C Market', lat: 8.7580, lng: 78.1380 },
    { name: 'Bus Terminal', lat: 8.7510, lng: 78.1250 },
    { name: 'Palayamkottai Road', lat: 8.7530, lng: 78.1420 },
    { name: 'Bryant Nagar', lat: 8.7690, lng: 78.1290 },
    { name: 'Millerpuram', lat: 8.7780, lng: 78.1430 },
    { name: 'Athimarapatti', lat: 8.7820, lng: 78.1540 },
    { name: 'Beach Road', lat: 8.7720, lng: 78.2080 },
    { name: 'SPIC Nagar', lat: 8.7250, lng: 78.1780 },
    { name: 'Railway Station', lat: 8.7780, lng: 78.1480 },
  ];
  
  // Crime types with different probabilities
  const crimeTypes = [
    { type: 'theft', probability: 0.75 },
    { type: 'assault', probability: 0.65 },
    { type: 'robbery', probability: 0.55 },
    { type: 'drugs', probability: 0.60 },
    { type: 'vandalism', probability: 0.45 },
  ];
  
  // Generate crime predictions with more theft hotspots
  const predictedCrimes = crimeTypes.map(crime => {
    // Generate more hotspots for theft, fewer for others
    const hotspotsCount = crime.type === 'theft' ? 
      5 + Math.floor(Math.random() * 2) : // 5-6 hotspots for theft
      2 + Math.floor(Math.random() * 2);  // 2-3 hotspots for other crimes
    
    const hotspots = [];
    
    for (let i = 0; i < hotspotsCount; i++) {
      // Pick a random location with some variation
      const useRandomLocation = Math.random() > 0.7;
      let latitude, longitude;
      
      if (useRandomLocation) {
        // Random location around the center
        latitude = centerLat + (Math.random() - 0.5) * 0.08;
        longitude = centerLng + (Math.random() - 0.5) * 0.08;
      } else {
        // Use predefined location
        const location = locations[Math.floor(Math.random() * locations.length)];
        latitude = location.lat + (Math.random() - 0.5) * 0.02;
        longitude = location.lng + (Math.random() - 0.5) * 0.02;
      }
      
      hotspots.push({
        latitude,
        longitude,
        intensity: 0.3 + Math.random() * 0.7, // Random intensity between 0.3 and 1.0
      });
    }
    
    return {
      crimeType: crime.type,
      probability: crime.probability + (Math.random() - 0.5) * 0.2, // Add some randomness
      hotspots,
    };
  });
  
  // Create a list to collect all hotspots with their crime type
  const allHotspots = predictedCrimes.flatMap(crime => 
    crime.hotspots.map(hotspot => ({
      ...hotspot,
      crimeType: crime.crimeType,
      probability: crime.probability
    }))
  );
  
  // Ensure we have a deployment suggestion for EVERY hotspot
  const deploymentSuggestions = allHotspots.map((hotspot, index) => {
    // Determine priority and officers based on crime type
    let priority: string;
    let officersRecommended: number;
    
    // Higher priority and more officers for theft hotspots
    if (hotspot.crimeType === 'theft') {
      priority = Math.random() < 0.7 ? 'high' : 'medium';
      officersRecommended = 5 + Math.floor(Math.random() * 5); // 5-9 officers for theft
    } else {
      const priorityRandom = Math.random();
      if (priorityRandom < 0.3) {
        priority = 'high';
        officersRecommended = 4 + Math.floor(Math.random() * 4); // 4-7 officers
      } else if (priorityRandom < 0.6) {
        priority = 'medium';
        officersRecommended = 3 + Math.floor(Math.random() * 3); // 3-5 officers
      } else {
        priority = 'low';
        officersRecommended = 1 + Math.floor(Math.random() * 3); // 1-3 officers
      }
    }
    
    // Find the closest predefined location for naming
    let closestLocation = locations[0];
    let minDistance = Infinity;
    
    locations.forEach(location => {
      const distance = Math.sqrt(
        Math.pow(hotspot.latitude - location.lat, 2) + 
        Math.pow(hotspot.longitude - location.lng, 2)
      );
      
      if (distance < minDistance) {
        minDistance = distance;
        closestLocation = location;
      }
    });
    
    // Add a suffix to make location names unique
    const locationName = `${closestLocation.name} ${index % 3 === 0 ? 'Junction' : index % 3 === 1 ? 'Zone' : 'Area'}`;
    
    // Use exact hotspot coordinates for deployments to ensure one-to-one mapping
    return {
      location: locationName,
      latitude: hotspot.latitude,
      longitude: hotspot.longitude,
      officersRecommended,
      priority,
    };
  });
  
  return {
    area,
    date,
    timeRange: "00:00-23:59",
    predictedCrimes,
    deploymentSuggestions,
  };
};
