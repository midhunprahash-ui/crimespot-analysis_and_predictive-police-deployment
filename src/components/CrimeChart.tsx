
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart, Pie, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { getMonthlyDataForArea, getHourlyData, getFestivalData, getCrimeTypeData } from '@/data/crimeData';

interface CrimeChartProps {
  area: string;
  monthlyData: any[];
  timeData: any[];
  festivalData: any[];
  crimeTypeData: any[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const CrimeChart: React.FC<CrimeChartProps> = ({ 
  area,
  monthlyData,
  timeData,
  festivalData,
  crimeTypeData
}) => {
  const [activeTab, setActiveTab] = useState('monthly');

  return (
    <Card className="w-full shadow-sm overflow-hidden">
      <Tabs 
        defaultValue="monthly"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="px-6 pt-6">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="monthly">Monthly Trends</TabsTrigger>
            <TabsTrigger value="hourly">Time Analysis</TabsTrigger>
            <TabsTrigger value="festival">Festival Analysis</TabsTrigger>
            <TabsTrigger value="type">Crime Types</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="monthly" className="p-6 pt-4">
          <h3 className="text-lg font-medium mb-4">Crime Rate Trends (Last 12 Months)</h3>
          <div className="w-full h-80">
            {monthlyData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#888" fontSize={12} />
                  <YAxis stroke="#888" fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="theft" stroke="#0088FE" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="assault" stroke="#00C49F" />
                  <Line type="monotone" dataKey="vandalism" stroke="#FFBB28" />
                  <Line type="monotone" dataKey="drugs" stroke="#FF8042" />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No data available for this area
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="hourly" className="p-6 pt-4">
          <h3 className="text-lg font-medium mb-4">Time-Based Analysis (Common Crime Hours)</h3>
          <div className="w-full h-80">
            {timeData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={timeData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="time" stroke="#888" fontSize={12} />
                  <YAxis stroke="#888" fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="incidents" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No time data available for this area
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="festival" className="p-6 pt-4">
          <h3 className="text-lg font-medium mb-4">Festival-wise Crime Occurrence</h3>
          <div className="w-full h-80">
            {festivalData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={festivalData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#888" fontSize={12} />
                  <YAxis stroke="#888" fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8">
                    {festivalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No festival data available for this area
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="type" className="p-6 pt-4">
          <h3 className="text-lg font-medium mb-4">Crime Types in Selected Area</h3>
          <div className="w-full h-80">
            {crimeTypeData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={crimeTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {crimeTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No crime type data available for this area
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default CrimeChart;
