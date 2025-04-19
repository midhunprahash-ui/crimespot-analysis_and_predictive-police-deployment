
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Map, ChartBar, Bell } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  const handleSearch = (query: string) => {
    // Redirect to analytics page with the search query
    navigate(`/analytics?area=${encodeURIComponent(query)}`);
  };
  
  const features = [
    {
      icon: Map,
      title: 'Crime Hotspot Visualization',
      description: 'View crime hotspots and sensitive locations on an interactive map.',
      path: '/crime-map'
    },
    {
      icon: ChartBar,
      title: 'Crime Trends & Insights',
      description: 'Analyze crime patterns with comprehensive charts and statistics.',
      path: '/analytics'
    },
    {
      icon: Bell,
      title: 'Deployment Suggestions',
      description: 'Get AI-powered recommendations for optimal police deployment.',
      path: '/deployment'
    }
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <img 
            src="/tnpolice-logo.png" 
            alt="Tamil Nadu Police Logo" 
            className="w-32 h-32 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Thoothukudi Police Deployment Analysis
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thoothukudi District Crime Analysis and Deployment Optimization
          </p>
          
          <div className="max-w-md mx-auto">
            <SearchBar onSearch={handleSearch} />
            <p className="mt-2 text-sm text-muted-foreground">
              Search for any area in Thoothukudi to analyze crime patterns
            </p>
          </div>
          
          <Button 
            className="mt-8 text-base"
            size="lg"
            onClick={() => navigate('/crime-map')}
          >
            Analyze Crime Patterns
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group"
              onClick={() => navigate(feature.path)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-white rounded-lg shadow-sm p-6 h-full flex flex-col items-center text-center cursor-pointer glass">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
