
import React from 'react';
import { cn } from '@/lib/utils';

type RiskLevel = 'high' | 'moderate' | 'low';

interface RiskBadgeProps {
  level: RiskLevel;
  className?: string;
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({ level, className }) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  
  const levelClasses = {
    high: "bg-risk-high/10 text-risk-high border border-risk-high/20",
    moderate: "bg-risk-moderate/10 text-risk-moderate border border-risk-moderate/20",
    low: "bg-risk-low/10 text-risk-low border border-risk-low/20"
  };
  
  return (
    <span className={cn(baseClasses, levelClasses[level], className)}>
      {level.charAt(0).toUpperCase() + level.slice(1)} Risk
    </span>
  );
};
