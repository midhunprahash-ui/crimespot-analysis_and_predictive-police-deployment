
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Map, BarChart, Bell, Home, FilePlus } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Crime Map', path: '/crime-map', icon: Map },
    { name: 'Analytics', path: '/analytics', icon: BarChart },
    { name: 'Deployment', path: '/deployment', icon: Bell },
    { name: 'Add Crime', path: '/add-crime', icon: FilePlus },
  ];

  return (
    <>
      <header className="w-full h-[4.5rem] py-4 border-b border-border glass fixed top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-semibold tracking-tight">
                  Police Deployment Analysis
                </span>
                <span className="text-xs font-medium text-primary ml-2 opacity-75">
                  Thoothukudi District
                </span>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-1">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 relative",
                      isActive 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-[17px] left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                    )}
                  </Link>
                );
              })}
            </nav>
            
            <div className="hidden md:flex items-center ml-4">
              <button className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors rounded-full p-2">
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            <div className="md:hidden flex items-center">
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary rounded-md">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Add a spacer div to prevent content from hiding under the header */}
      <div className="h-[4.5rem] w-full" aria-hidden="true" />
    </>
  );
};

export default Header;
