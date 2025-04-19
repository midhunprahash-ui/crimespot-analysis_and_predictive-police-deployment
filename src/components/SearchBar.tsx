
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Thoothukudi popular localities
const popularLocalities = [
  'Thoothukudi Port',
  'Tiruchendur Road',
  'Palayamkottai Road',
  'Millerpuram',
  'Bryant Nagar',
  'Third Mile',
  'Muthiahpuram',
  'Athimarapatti',
  'Beach Road',
  'Kovilpillai Nagar',
  'Mappillai Oorani',
  'P&T Colony',
  'Mullakadu',
  'V E Road',
  'Toovipuram',
  // Add more localities to match our expanded dataset
  'Thoothukudi District',
  'Pudur Pandiapuram',
  'Meelavittan',
  'Thermal Nagar',
  'Ettayapuram Road',
  'Sipcot Area',
  'Fisheries College',
  'Spic Nagar',
  'Pearl City',
  'New Harbour Road',
  'Inigo Nagar',
  'George Road',
  'Arumuganeri',
  'Vadakkarpuram'
];

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
  initialQuery?: string;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  className, 
  initialQuery = '', 
  placeholder = "Enter the area" 
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setError(''); // Clear error when user types
    
    if (value.trim()) {
      const filtered = popularLocalities.filter(locality => 
        locality.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    if (!query.trim()) {
      setError('Please enter an area to search');
      return;
    }
    
    // Check if the query matches any known area
    const matchedArea = popularLocalities.find(
      locality => locality.toLowerCase() === query.toLowerCase()
    );
    
    if (!matchedArea) {
      setError(`No data available for "${query}". Please try one of the suggested areas.`);
      return;
    }
    
    // Clear error and call onSearch if query is valid
    setError('');
    setSuggestions([]);
    if (onSearch) {
      onSearch(matchedArea); // Use the properly cased area name
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]);
    setError('');
    if (onSearch) {
      onSearch(suggestion);
    }
  };

  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      <div className={cn(
        "flex items-center relative rounded-lg transition-all duration-300 bg-white",
        "shadow-sm border border-border",
        isFocused ? "ring-2 ring-primary/20" : "",
        error ? "border-destructive" : ""
      )}>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-grow px-4 py-3 bg-transparent outline-none text-foreground rounded-l-lg"
        />
        <button
          onClick={handleSearch}
          className="p-3 text-white bg-primary rounded-r-lg hover:bg-primary/90 transition-colors"
        >
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </button>
      </div>
      
      {error && (
        <Alert variant="destructive" className="mt-2">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {isFocused && suggestions.length > 0 && (
        <div className="absolute mt-1 w-full bg-white rounded-lg shadow-lg border border-border z-10 overflow-hidden animate-fade-in">
          <ul className="max-h-60 overflow-auto py-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 hover:bg-muted cursor-pointer transition-colors"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
