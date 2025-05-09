
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.3.0/mod.ts";

// CORS headers for browser access
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CrimeData {
  date: string;
  time: string;
  crimeType: string;
  area: string;
  latitude: number;
  longitude: number;
}

interface PredictionRequest {
  area?: string;
  date?: string;
  timeRange?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { area, date, timeRange }: PredictionRequest = await req.json();
    
    console.log(`Prediction request received for area: ${area}, date: ${date}, timeRange: ${timeRange}`);
    
    // TODO: Implement your actual regression model here
    // This is where you'll use your dataset to make predictions
    
    // For now, returning mock prediction data
    const predictions = {
      area: area || "Thoothukudi Port",
      date: date || new Date().toISOString().split('T')[0],
      timeRange: timeRange || "18:00-22:00",
      predictedCrimes: [
        {
          crimeType: "theft",
          probability: 0.75,
          hotspots: [
            { latitude: 8.7642, longitude: 78.1348, intensity: 0.8 },
            { latitude: 8.7598, longitude: 78.1328, intensity: 0.6 }
          ]
        },
        {
          crimeType: "assault",
          probability: 0.45,
          hotspots: [
            { latitude: 8.7612, longitude: 78.1338, intensity: 0.5 }
          ]
        }
      ],
      deploymentSuggestions: [
        { 
          location: "Market Area", 
          latitude: 8.7642, 
          longitude: 78.1348,
          officersRecommended: 4,
          priority: "high" 
        },
        { 
          location: "Bus Terminal", 
          latitude: 8.7598, 
          longitude: 78.1328,
          officersRecommended: 2,
          priority: "medium" 
        }
      ]
    };

    return new Response(JSON.stringify(predictions), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
    
  } catch (error) {
    console.error("Error in predict-crime function:", error);
    
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
