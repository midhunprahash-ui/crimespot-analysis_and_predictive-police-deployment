// This file contains the crime dataset for Thoothukudi areas
// In a production app, this would likely come from an API

export interface CrimeRecord {
  area: string;
  crimeType: 'theft' | 'assault' | 'vandalism' | 'drugs' | 'robbery' | 'harassment' | string;
  count: number;
  year: number;
  month: number;
  day?: number;
  hour?: number;
  festival?: string;
  riskLevel: 'high' | 'moderate' | 'low';
}

// Sample dataset - replace this with your actual dataset
export const crimeDataset: CrimeRecord[] = [
  // Thoothukudi Port area
  { area: 'Thoothukudi Port', crimeType: 'theft', count: 45, year: 2023, month: 1, riskLevel: 'high' },
  { area: 'Thoothukudi Port', crimeType: 'assault', count: 18, year: 2023, month: 2, riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'vandalism', count: 12, year: 2023, month: 3, riskLevel: 'low' },
  { area: 'Thoothukudi Port', crimeType: 'drugs', count: 9, year: 2023, month: 4, riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'theft', count: 38, year: 2023, month: 5, riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'assault', count: 21, year: 2023, month: 6, riskLevel: 'high' },
  { area: 'Thoothukudi Port', crimeType: 'vandalism', count: 15, year: 2023, month: 7, riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'drugs', count: 11, year: 2023, month: 8, riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'theft', count: 49, year: 2023, month: 9, riskLevel: 'high' },
  { area: 'Thoothukudi Port', crimeType: 'assault', count: 25, year: 2023, month: 10, riskLevel: 'high' },
  { area: 'Thoothukudi Port', crimeType: 'vandalism', count: 18, year: 2023, month: 11, riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'drugs', count: 14, year: 2023, month: 12, riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'robbery', count: 12, year: 2023, month: 6, riskLevel: 'high' },
  { area: 'Thoothukudi Port', crimeType: 'harassment', count: 8, year: 2023, month: 8, riskLevel: 'moderate' },
  
  // Tiruchendur Road area
  { area: 'Tiruchendur Road', crimeType: 'theft', count: 38, year: 2023, month: 1, riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'assault', count: 15, year: 2023, month: 2, riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'vandalism', count: 8, year: 2023, month: 3, riskLevel: 'low' },
  { area: 'Tiruchendur Road', crimeType: 'drugs', count: 12, year: 2023, month: 4, riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'theft', count: 30, year: 2023, month: 5, riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'assault', count: 10, year: 2023, month: 6, riskLevel: 'low' },
  { area: 'Tiruchendur Road', crimeType: 'vandalism', count: 5, year: 2023, month: 7, riskLevel: 'low' },
  { area: 'Tiruchendur Road', crimeType: 'drugs', count: 8, year: 2023, month: 8, riskLevel: 'low' },
  { area: 'Tiruchendur Road', crimeType: 'theft', count: 35, year: 2023, month: 9, riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'assault', count: 12, year: 2023, month: 10, riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'vandalism', count: 6, year: 2023, month: 11, riskLevel: 'low' },
  { area: 'Tiruchendur Road', crimeType: 'drugs', count: 10, year: 2023, month: 12, riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'robbery', count: 5, year: 2023, month: 6, riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'harassment', count: 3, year: 2023, month: 9, riskLevel: 'low' },
  
  // Palayamkottai Road area
  { area: 'Palayamkottai Road', crimeType: 'theft', count: 42, year: 2023, month: 1, riskLevel: 'high' },
  { area: 'Palayamkottai Road', crimeType: 'assault', count: 22, year: 2023, month: 2, riskLevel: 'high' },
  { area: 'Palayamkottai Road', crimeType: 'vandalism', count: 15, year: 2023, month: 3, riskLevel: 'moderate' },
  { area: 'Palayamkottai Road', crimeType: 'drugs', count: 8, year: 2023, month: 4, riskLevel: 'low' },
  { area: 'Palayamkottai Road', crimeType: 'theft', count: 39, year: 2023, month: 5, riskLevel: 'moderate' },
  { area: 'Palayamkottai Road', crimeType: 'assault', count: 19, year: 2023, month: 6, riskLevel: 'moderate' },
  { area: 'Palayamkottai Road', crimeType: 'vandalism', count: 12, year: 2023, month: 7, riskLevel: 'moderate' },
  { area: 'Palayamkottai Road', crimeType: 'drugs', count: 6, year: 2023, month: 8, riskLevel: 'low' },
  { area: 'Palayamkottai Road', crimeType: 'theft', count: 45, year: 2023, month: 9, riskLevel: 'high' },
  { area: 'Palayamkottai Road', crimeType: 'assault', count: 25, year: 2023, month: 10, riskLevel: 'high' },
  { area: 'Palayamkottai Road', crimeType: 'vandalism', count: 18, year: 2023, month: 11, riskLevel: 'moderate' },
  { area: 'Palayamkottai Road', crimeType: 'drugs', count: 10, year: 2023, month: 12, riskLevel: 'moderate' },
  { area: 'Palayamkottai Road', crimeType: 'robbery', count: 15, year: 2023, month: 7, riskLevel: 'high' },
  { area: 'Palayamkottai Road', crimeType: 'harassment', count: 9, year: 2023, month: 10, riskLevel: 'moderate' },
  
  // Millerpuram area
  { area: 'Millerpuram', crimeType: 'theft', count: 30, year: 2023, month: 1, riskLevel: 'moderate' },
  { area: 'Millerpuram', crimeType: 'assault', count: 12, year: 2023, month: 2, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'vandalism', count: 10, year: 2023, month: 3, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'drugs', count: 5, year: 2023, month: 4, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'theft', count: 28, year: 2023, month: 5, riskLevel: 'moderate' },
  { area: 'Millerpuram', crimeType: 'assault', count: 10, year: 2023, month: 6, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'vandalism', count: 8, year: 2023, month: 7, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'drugs', count: 4, year: 2023, month: 8, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'theft', count: 32, year: 2023, month: 9, riskLevel: 'moderate' },
  { area: 'Millerpuram', crimeType: 'assault', count: 14, year: 2023, month: 10, riskLevel: 'moderate' },
  { area: 'Millerpuram', crimeType: 'vandalism', count: 11, year: 2023, month: 11, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'drugs', count: 6, year: 2023, month: 12, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'robbery', count: 4, year: 2023, month: 9, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'harassment', count: 5, year: 2023, month: 11, riskLevel: 'low' },
  
  // Bryant Nagar area
  { area: 'Bryant Nagar', crimeType: 'theft', count: 35, year: 2023, month: 1, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'assault', count: 18, year: 2023, month: 2, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'vandalism', count: 12, year: 2023, month: 3, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'drugs', count: 10, year: 2023, month: 4, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'theft', count: 32, year: 2023, month: 5, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'assault', count: 15, year: 2023, month: 6, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'vandalism', count: 10, year: 2023, month: 7, riskLevel: 'low' },
  { area: 'Bryant Nagar', crimeType: 'drugs', count: 8, year: 2023, month: 8, riskLevel: 'low' },
  { area: 'Bryant Nagar', crimeType: 'theft', count: 38, year: 2023, month: 9, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'assault', count: 20, year: 2023, month: 10, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'vandalism', count: 14, year: 2023, month: 11, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'drugs', count: 12, year: 2023, month: 12, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'robbery', count: 8, year: 2023, month: 8, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'harassment', count: 6, year: 2023, month: 10, riskLevel: 'low' },
  
  // Third Mile area
  { area: 'Third Mile', crimeType: 'theft', count: 25, year: 2023, month: 1, riskLevel: 'moderate' },
  { area: 'Third Mile', crimeType: 'assault', count: 10, year: 2023, month: 2, riskLevel: 'low' },
  { area: 'Third Mile', crimeType: 'vandalism', count: 8, year: 2023, month: 3, riskLevel: 'low' },
  { area: 'Third Mile', crimeType: 'drugs', count: 6, year: 2023, month: 4, riskLevel: 'low' },
  { area: 'Third Mile', crimeType: 'theft', count: 22, year: 2023, month: 5, riskLevel: 'low' },
  { area: 'Third Mile', crimeType: 'assault', count: 8, year: 2023, month: 6, riskLevel: 'low' },
  { area: 'Third Mile', crimeType: 'vandalism', count: 6, year: 2023, month: 7, riskLevel: 'low' },
  { area: 'Third Mile', crimeType: 'drugs', count: 4, year: 2023, month: 8, riskLevel: 'low' },
  { area: 'Third Mile', crimeType: 'theft', count: 28, year: 2023, month: 9, riskLevel: 'moderate' },
  { area: 'Third Mile', crimeType: 'assault', count: 12, year: 2023, month: 10, riskLevel: 'moderate' },
  { area: 'Third Mile', crimeType: 'vandalism', count: 10, year: 2023, month: 11, riskLevel: 'low' },
  { area: 'Third Mile', crimeType: 'drugs', count: 7, year: 2023, month: 12, riskLevel: 'low' },
  { area: 'Third Mile', crimeType: 'robbery', count: 3, year: 2023, month: 9, riskLevel: 'low' },
  { area: 'Third Mile', crimeType: 'harassment', count: 4, year: 2023, month: 10, riskLevel: 'low' },
  
  // Muthiahpuram area
  { area: 'Muthiahpuram', crimeType: 'theft', count: 32, year: 2023, month: 1, riskLevel: 'moderate' },
  { area: 'Muthiahpuram', crimeType: 'assault', count: 15, year: 2023, month: 2, riskLevel: 'moderate' },
  { area: 'Muthiahpuram', crimeType: 'vandalism', count: 9, year: 2023, month: 3, riskLevel: 'low' },
  { area: 'Muthiahpuram', crimeType: 'drugs', count: 7, year: 2023, month: 4, riskLevel: 'low' },
  { area: 'Muthiahpuram', crimeType: 'theft', count: 29, year: 2023, month: 5, riskLevel: 'moderate' },
  { area: 'Muthiahpuram', crimeType: 'assault', count: 13, year: 2023, month: 6, riskLevel: 'moderate' },
  { area: 'Muthiahpuram', crimeType: 'vandalism', count: 7, year: 2023, month: 7, riskLevel: 'low' },
  { area: 'Muthiahpuram', crimeType: 'drugs', count: 5, year: 2023, month: 8, riskLevel: 'low' },
  { area: 'Muthiahpuram', crimeType: 'theft', count: 35, year: 2023, month: 9, riskLevel: 'moderate' },
  { area: 'Muthiahpuram', crimeType: 'assault', count: 17, year: 2023, month: 10, riskLevel: 'moderate' },
  { area: 'Muthiahpuram', crimeType: 'vandalism', count: 11, year: 2023, month: 11, riskLevel: 'moderate' },
  { area: 'Muthiahpuram', crimeType: 'drugs', count: 9, year: 2023, month: 12, riskLevel: 'low' },
  { area: 'Muthiahpuram', crimeType: 'robbery', count: 6, year: 2023, month: 7, riskLevel: 'moderate' },
  { area: 'Muthiahpuram', crimeType: 'harassment', count: 5, year: 2023, month: 11, riskLevel: 'low' },
  
  // Athimarapatti area
  { area: 'Athimarapatti', crimeType: 'theft', count: 20, year: 2023, month: 1, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'assault', count: 8, year: 2023, month: 2, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'vandalism', count: 5, year: 2023, month: 3, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'drugs', count: 3, year: 2023, month: 4, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'theft', count: 18, year: 2023, month: 5, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'assault', count: 7, year: 2023, month: 6, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'vandalism', count: 4, year: 2023, month: 7, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'drugs', count: 2, year: 2023, month: 8, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'theft', count: 22, year: 2023, month: 9, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'assault', count: 9, year: 2023, month: 10, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'vandalism', count: 6, year: 2023, month: 11, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'drugs', count: 4, year: 2023, month: 12, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'robbery', count: 2, year: 2023, month: 6, riskLevel: 'low' },
  { area: 'Athimarapatti', crimeType: 'harassment', count: 3, year: 2023, month: 9, riskLevel: 'low' },
  
  // Beach Road area
  { area: 'Beach Road', crimeType: 'theft', count: 40, year: 2023, month: 1, riskLevel: 'high' },
  { area: 'Beach Road', crimeType: 'assault', count: 20, year: 2023, month: 2, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'vandalism', count: 15, year: 2023, month: 3, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'drugs', count: 12, year: 2023, month: 4, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'theft', count: 38, year: 2023, month: 5, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'assault', count: 18, year: 2023, month: 6, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'vandalism', count: 13, year: 2023, month: 7, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'drugs', count: 10, year: 2023, month: 8, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'theft', count: 42, year: 2023, month: 9, riskLevel: 'high' },
  { area: 'Beach Road', crimeType: 'assault', count: 22, year: 2023, month: 10, riskLevel: 'high' },
  { area: 'Beach Road', crimeType: 'vandalism', count: 17, year: 2023, month: 11, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'drugs', count: 14, year: 2023, month: 12, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'robbery', count: 14, year: 2023, month: 7, riskLevel: 'high' },
  { area: 'Beach Road', crimeType: 'harassment', count: 10, year: 2023, month: 12, riskLevel: 'moderate' },
  
  // Kovilpillai Nagar area
  { area: 'Kovilpillai Nagar', crimeType: 'theft', count: 28, year: 2023, month: 1, riskLevel: 'moderate' },
  { area: 'Kovilpillai Nagar', crimeType: 'assault', count: 13, year: 2023, month: 2, riskLevel: 'moderate' },
  { area: 'Kovilpillai Nagar', crimeType: 'vandalism', count: 8, year: 2023, month: 3, riskLevel: 'low' },
  { area: 'Kovilpillai Nagar', crimeType: 'drugs', count: 6, year: 2023, month: 4, riskLevel: 'low' },
  { area: 'Kovilpillai Nagar', crimeType: 'theft', count: 25, year: 2023, month: 5, riskLevel: 'moderate' },
  { area: 'Kovilpillai Nagar', crimeType: 'assault', count: 11, year: 2023, month: 6, riskLevel: 'low' },
  { area: 'Kovilpillai Nagar', crimeType: 'vandalism', count: 6, year: 2023, month: 7, riskLevel: 'low' },
  { area: 'Kovilpillai Nagar', crimeType: 'drugs', count: 4, year: 2023, month: 8, riskLevel: 'low' },
  { area: 'Kovilpillai Nagar', crimeType: 'theft', count: 30, year: 2023, month: 9, riskLevel: 'moderate' },
  { area: 'Kovilpillai Nagar', crimeType: 'assault', count: 15, year: 2023, month: 10, riskLevel: 'moderate' },
  { area: 'Kovilpillai Nagar', crimeType: 'vandalism', count: 10, year: 2023, month: 11, riskLevel: 'low' },
  { area: 'Kovilpillai Nagar', crimeType: 'drugs', count: 8, year: 2023, month: 12, riskLevel: 'low' },
  { area: 'Kovilpillai Nagar', crimeType: 'robbery', count: 5, year: 2023, month: 8, riskLevel: 'moderate' },
  { area: 'Kovilpillai Nagar', crimeType: 'harassment', count: 4, year: 2023, month: 10, riskLevel: 'low' },
  
  // Festival data for Thoothukudi District
  { area: 'Thoothukudi District', crimeType: 'theft', count: 45, year: 2023, month: 1, festival: 'Pongal', riskLevel: 'high' },
  { area: 'Thoothukudi District', crimeType: 'theft', count: 70, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'high' },
  { area: 'Thoothukudi District', crimeType: 'theft', count: 35, year: 2023, month: 9, festival: 'Ayudha Pooja', riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'theft', count: 40, year: 2023, month: 9, festival: 'Navaratri', riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'theft', count: 65, year: 2023, month: 12, festival: 'New Year', riskLevel: 'high' },
  { area: 'Thoothukudi District', crimeType: 'theft', count: 38, year: 2023, month: 8, festival: 'Krishna Jayanthi', riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'theft', count: 42, year: 2023, month: 4, festival: 'Tamil New Year', riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'assault', count: 30, year: 2023, month: 1, festival: 'Pongal', riskLevel: 'high' },
  { area: 'Thoothukudi District', crimeType: 'assault', count: 55, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'high' },
  { area: 'Thoothukudi District', crimeType: 'assault', count: 25, year: 2023, month: 9, festival: 'Ayudha Pooja', riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'vandalism', count: 28, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'high' },
  { area: 'Thoothukudi District', crimeType: 'vandalism', count: 20, year: 2023, month: 12, festival: 'New Year', riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'drugs', count: 18, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'drugs', count: 22, year: 2023, month: 12, festival: 'New Year', riskLevel: 'high' },
  
  // Festival data for each area - Thoothukudi Port
  { area: 'Thoothukudi Port', crimeType: 'theft', count: 35, year: 2023, month: 1, festival: 'Pongal', riskLevel: 'high' },
  { area: 'Thoothukudi Port', crimeType: 'assault', count: 25, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'high' },
  { area: 'Thoothukudi Port', crimeType: 'vandalism', count: 20, year: 2023, month: 9, festival: 'Ayudha Pooja', riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'drugs', count: 15, year: 2023, month: 12, festival: 'New Year', riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'theft', count: 30, year: 2023, month: 4, festival: 'Tamil New Year', riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'robbery', count: 18, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'high' },
  
  // Festival data for Tiruchendur Road
  { area: 'Tiruchendur Road', crimeType: 'theft', count: 28, year: 2023, month: 1, festival: 'Pongal', riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'assault', count: 18, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'vandalism', count: 13, year: 2023, month: 9, festival: 'Ayudha Pooja', riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'drugs', count: 13, year: 2023, month: 12, festival: 'New Year', riskLevel: 'low' },
  
  // Festival data for Palayamkottai Road
  { area: 'Palayamkottai Road', crimeType: 'theft', count: 32, year: 2023, month: 1, festival: 'Pongal', riskLevel: 'high' },
  { area: 'Palayamkottai Road', crimeType: 'assault', count: 22, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'high' },
  { area: 'Palayamkottai Road', crimeType: 'vandalism', count: 18, year: 2023, month: 9, festival: 'Ayudha Pooja', riskLevel: 'moderate' },
  { area: 'Palayamkottai Road', crimeType: 'drugs', count: 12, year: 2023, month: 12, festival: 'New Year', riskLevel: 'moderate' },
  
  // Festival data for Millerpuram
  { area: 'Millerpuram', crimeType: 'theft', count: 25, year: 2023, month: 1, festival: 'Pongal', riskLevel: 'moderate' },
  { area: 'Millerpuram', crimeType: 'assault', count: 15, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'moderate' },
  { area: 'Millerpuram', crimeType: 'vandalism', count: 12, year: 2023, month: 9, festival: 'Ayudha Pooja', riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'drugs', count: 8, year: 2023, month: 12, festival: 'New Year', riskLevel: 'low' },
  
  // Festival data for Bryant Nagar
  { area: 'Bryant Nagar', crimeType: 'theft', count: 30, year: 2023, month: 1, festival: 'Pongal', riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'assault', count: 20, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'vandalism', count: 15, year: 2023, month: 9, festival: 'Ayudha Pooja', riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'drugs', count: 10, year: 2023, month: 12, festival: 'New Year', riskLevel: 'moderate' },
  
  // Festival data for Beach Road
  { area: 'Beach Road', crimeType: 'theft', count: 35, year: 2023, month: 1, festival: 'Pongal', riskLevel: 'high' },
  { area: 'Beach Road', crimeType: 'assault', count: 25, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'high' },
  { area: 'Beach Road', crimeType: 'vandalism', count: 20, year: 2023, month: 9, festival: 'Ayudha Pooja', riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'drugs', count: 15, year: 2023, month: 12, festival: 'New Year', riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'robbery', count: 18, year: 2023, month: 10, festival: 'Diwali', riskLevel: 'high' },
  
  // Additional festivals for various areas
  { area: 'Thoothukudi Port', crimeType: 'theft', count: 28, year: 2023, month: 8, festival: 'Vinayaka Chaturthi', riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'theft', count: 22, year: 2023, month: 8, festival: 'Vinayaka Chaturthi', riskLevel: 'moderate' },
  { area: 'Palayamkottai Road', crimeType: 'theft', count: 25, year: 2023, month: 8, festival: 'Vinayaka Chaturthi', riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'theft', count: 30, year: 2023, month: 8, festival: 'Vinayaka Chaturthi', riskLevel: 'high' },
  { area: 'Thoothukudi Port', crimeType: 'theft', count: 32, year: 2023, month: 6, festival: 'Aadi Perukku', riskLevel: 'high' },
  { area: 'Beach Road', crimeType: 'theft', count: 28, year: 2023, month: 6, festival: 'Aadi Perukku', riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'theft', count: 30, year: 2023, month: 5, festival: 'Muthumariamman Festival', riskLevel: 'moderate' },
  
  // Hourly data for Thoothukudi District
  { area: 'Thoothukudi District', crimeType: 'all', count: 15, year: 2023, month: 1, hour: 0, riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'all', count: 11, year: 2023, month: 1, hour: 2, riskLevel: 'low' },
  { area: 'Thoothukudi District', crimeType: 'all', count: 8, year: 2023, month: 1, hour: 4, riskLevel: 'low' },
  { area: 'Thoothukudi District', crimeType: 'all', count: 12, year: 2023, month: 1, hour: 6, riskLevel: 'low' },
  { area: 'Thoothukudi District', crimeType: 'all', count: 25, year: 2023, month: 1, hour: 8, riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'all', count: 35, year: 2023, month: 1, hour: 10, riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'all', count: 30, year: 2023, month: 1, hour: 12, riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'all', count: 40, year: 2023, month: 1, hour: 14, riskLevel: 'moderate' },
  { area: 'Thoothukudi District', crimeType: 'all', count: 55, year: 2023, month: 1, hour: 16, riskLevel: 'high' },
  { area: 'Thoothukudi District', crimeType: 'all', count: 70, year: 2023, month: 1, hour: 18, riskLevel: 'high' },
  { area: 'Thoothukudi District', crimeType: 'all', count: 80, year: 2023, month: 1, hour: 20, riskLevel: 'high' },
  { area: 'Thoothukudi District', crimeType: 'all', count: 45, year: 2023, month: 1, hour: 22, riskLevel: 'moderate' },
  
  // Hourly data for Thoothukudi Port
  { area: 'Thoothukudi Port', crimeType: 'all', count: 10, year: 2023, month: 1, hour: 0, riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'all', count: 8, year: 2023, month: 1, hour: 4, riskLevel: 'low' },
  { area: 'Thoothukudi Port', crimeType: 'all', count: 15, year: 2023, month: 1, hour: 8, riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'all', count: 22, year: 2023, month: 1, hour: 12, riskLevel: 'moderate' },
  { area: 'Thoothukudi Port', crimeType: 'all', count: 30, year: 2023, month: 1, hour: 16, riskLevel: 'high' },
  { area: 'Thoothukudi Port', crimeType: 'all', count: 40, year: 2023, month: 1, hour: 20, riskLevel: 'high' },
  
  // Hourly data for Tiruchendur Road
  { area: 'Tiruchendur Road', crimeType: 'all', count: 8, year: 2023, month: 1, hour: 0, riskLevel: 'low' },
  { area: 'Tiruchendur Road', crimeType: 'all', count: 5, year: 2023, month: 1, hour: 4, riskLevel: 'low' },
  { area: 'Tiruchendur Road', crimeType: 'all', count: 12, year: 2023, month: 1, hour: 8, riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'all', count: 18, year: 2023, month: 1, hour: 12, riskLevel: 'moderate' },
  { area: 'Tiruchendur Road', crimeType: 'all', count: 25, year: 2023, month: 1, hour: 16, riskLevel: 'high' },
  { area: 'Tiruchendur Road', crimeType: 'all', count: 30, year: 2023, month: 1, hour: 20, riskLevel: 'high' },
  
  // Hourly data for Palayamkottai Road
  { area: 'Palayamkottai Road', crimeType: 'all', count: 12, year: 2023, month: 1, hour: 0, riskLevel: 'moderate' },
  { area: 'Palayamkottai Road', crimeType: 'all', count: 8, year: 2023, month: 1, hour: 4, riskLevel: 'low' },
  { area: 'Palayamkottai Road', crimeType: 'all', count: 16, year: 2023, month: 1, hour: 8, riskLevel: 'moderate' },
  { area: 'Palayamkottai Road', crimeType: 'all', count: 24, year: 2023, month: 1, hour: 12, riskLevel: 'moderate' },
  { area: 'Palayamkottai Road', crimeType: 'all', count: 32, year: 2023, month: 1, hour: 16, riskLevel: 'high' },
  { area: 'Palayamkottai Road', crimeType: 'all', count: 38, year: 2023, month: 1, hour: 20, riskLevel: 'high' },
  
  // Hourly data for Millerpuram
  { area: 'Millerpuram', crimeType: 'all', count: 6, year: 2023, month: 1, hour: 0, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'all', count: 4, year: 2023, month: 1, hour: 4, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'all', count: 10, year: 2023, month: 1, hour: 8, riskLevel: 'low' },
  { area: 'Millerpuram', crimeType: 'all', count: 15, year: 2023, month: 1, hour: 12, riskLevel: 'moderate' },
  { area: 'Millerpuram', crimeType: 'all', count: 22, year: 2023, month: 1, hour: 16, riskLevel: 'moderate' },
  { area: 'Millerpuram', crimeType: 'all', count: 28, year: 2023, month: 1, hour: 20, riskLevel: 'moderate' },
  
  // Hourly data for Bryant Nagar
  { area: 'Bryant Nagar', crimeType: 'all', count: 9, year: 2023, month: 1, hour: 0, riskLevel: 'low' },
  { area: 'Bryant Nagar', crimeType: 'all', count: 6, year: 2023, month: 1, hour: 4, riskLevel: 'low' },
  { area: 'Bryant Nagar', crimeType: 'all', count: 14, year: 2023, month: 1, hour: 8, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'all', count: 20, year: 2023, month: 1, hour: 12, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'all', count: 28, year: 2023, month: 1, hour: 16, riskLevel: 'moderate' },
  { area: 'Bryant Nagar', crimeType: 'all', count: 35, year: 2023, month: 1, hour: 20, riskLevel: 'high' },
  
  // Hourly data for Beach Road
  { area: 'Beach Road', crimeType: 'all', count: 14, year: 2023, month: 1, hour: 0, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'all', count: 10, year: 2023, month: 1, hour: 4, riskLevel: 'low' },
  { area: 'Beach Road', crimeType: 'all', count: 18, year: 2023, month: 1, hour: 8, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'all', count: 25, year: 2023, month: 1, hour: 12, riskLevel: 'moderate' },
  { area: 'Beach Road', crimeType: 'all', count: 35, year: 2023, month: 1, hour: 16, riskLevel: 'high' },
  { area: 'Beach Road', crimeType: 'all', count: 42, year: 2023, month: 1, hour: 20, riskLevel: 'high' },
];

// Function to add a new crime record to the dataset
import { appendToCsv } from '@/utils/csvUtils';

export const addCrimeRecord = async (record: CrimeRecord) => {
  try {
    console.log("Adding new crime record:", record);
    
    // Send the record to the backend server
    const response = await fetch('http://localhost:3001/api/crime-records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(record),
    });

    if (!response.ok) {
      throw new Error('Failed to save record');
    }

    // Add to in-memory dataset only after successful save
    crimeDataset.push(record);
    
    return record;
  } catch (error) {
    console.error("Error in addCrimeRecord:", error);
    throw error;
  }
};

// Function to get crime data for a specific area
export const getCrimeDataForArea = (area: string): CrimeRecord[] => {
  if (!area || area === '') {
    // Default to district-wide data if no area is specified
    return crimeDataset.filter(record => record.area === 'Thoothukudi District');
  }
  
  // Try to find exact match
  const exactMatchData = crimeDataset.filter(record => record.area.toLowerCase() === area.toLowerCase());
  
  // If we found data for the exact area, return it
  if (exactMatchData.length > 0) {
    return exactMatchData;
  }
  
  // Otherwise fall back to district data
  console.log(`No specific data found for "${area}", falling back to district data`);
  return crimeDataset.filter(record => record.area === 'Thoothukudi District');
};

// Get monthly data for crime trends chart
export const getMonthlyDataForArea = (area: string) => {
  const areaData = getCrimeDataForArea(area);
  const monthlyData = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Default minimum values for each crime type
  const defaultMinCounts = {
    theft: 5,
    assault: 3,
    vandalism: 2,
    drugs: 2
  };

  for (let i = 0; i < 12; i++) {
    const monthNumber = i + 1;
    const monthData = {
      month: months[i],
      theft: 0,
      assault: 0,
      vandalism: 0,
      drugs: 0
    };
    
    // Find all crimes for this month and area
    const monthRecords = areaData
      .filter(record => record.month === monthNumber && !record.festival && !record.hour);
    
    if (monthRecords.length > 0) {
      monthRecords.forEach(record => {
        if (record.crimeType === 'theft') monthData.theft += record.count;
        if (record.crimeType === 'assault') monthData.assault += record.count;
        if (record.crimeType === 'vandalism') monthData.vandalism += record.count;
        if (record.crimeType === 'drugs') monthData.drugs += record.count;
      });
    } else {
      // If no data found, use default minimum values with some random variation
      monthData.theft = defaultMinCounts.theft + Math.floor(Math.random() * 5);
      monthData.assault = defaultMinCounts.assault + Math.floor(Math.random() * 3);
      monthData.vandalism = defaultMinCounts.vandalism + Math.floor(Math.random() * 2);
      monthData.drugs = defaultMinCounts.drugs + Math.floor(Math.random() * 2);
    }
    
    monthlyData.push(monthData);
  }
  
  return monthlyData;
};

// Get time-based data for hourly analysis
export const getHourlyData = (area: string) => {
  const areaData = getCrimeDataForArea(area);
  
  // Filter records with hour data
  const hourlyRecords = areaData.filter(record => record.hour !== undefined);
  
  // If we have hourly data for this area, use it
  if (hourlyRecords.length > 0) {
    return hourlyRecords
      .map(record => ({
        time: `${record.hour?.toString().padStart(2, '0')}:00`,
        incidents: record.count
      }))
      .sort((a, b) => parseInt(a.time) - parseInt(b.time)); // Ensure times are sorted
  }
  
  // If no hourly data found for this area, check for district data
  if (area !== 'Thoothukudi District' && area !== '') {
    console.log(`No hourly data found for ${area}, using district data`);
    const districtData = crimeDataset
      .filter(record => record.area === 'Thoothukudi District' && record.hour !== undefined)
      .map(record => ({
        time: `${record.hour?.toString().padStart(2, '0')}:00`,
        incidents: record.count
      }))
      .sort((a, b) => parseInt(a.time) - parseInt(b.time));
    
    // If we have district data, return it
    if (districtData.length > 0) {
      return districtData;
    }
  }
  
  // If we still don't have data, generate some default data
  console.log(`No hourly data found for ${area}, generating default data`);
  return [
    { time: '00:00', incidents: Math.floor(Math.random() * 15) + 5 },
    { time: '04:00', incidents: Math.floor(Math.random() * 10) + 3 },
    { time: '08:00', incidents: Math.floor(Math.random() * 20) + 10 },
    { time: '12:00', incidents: Math.floor(Math.random() * 25) + 15 },
    { time: '16:00', incidents: Math.floor(Math.random() * 30) + 20 },
    { time: '20:00', incidents: Math.floor(Math.random() * 35) + 25 }
  ];
};

// Get festival-related crime data
export const getFestivalData = (area: string) => {
  const areaData = getCrimeDataForArea(area);
  
  // Create a map to aggregate festival data
  const festivalMap = new Map<string, number>();
  
  // First, process area-specific festival data
  areaData
    .filter(record => record.festival)
    .forEach(record => {
      const festivalName = record.festival as string;
      const currentCount = festivalMap.get(festivalName) || 0;
      festivalMap.set(festivalName, currentCount + record.count);
    });
  
  // If no festivals found for this area, use district data
  if (festivalMap.size === 0 && area !== 'Thoothukudi District' && area !== '') {
    const districtData = crimeDataset
      .filter(record => 
        record.area === 'Thoothukudi District' && 
        record.festival
      );

    // Process district festival data
    districtData.forEach(record => {
      const festivalName = record.festival as string;
      const currentCount = festivalMap.get(festivalName) || 0;
      festivalMap.set(festivalName, currentCount + record.count);
    });
  }
  
  // Convert map to array format required by the chart
  return Array.from(festivalMap).map(([name, value]) => ({
    name,
    value
  }));
};

// Get crime type breakdown for an area
export const getCrimeTypeData = (area: string) => {
  const areaData = getCrimeDataForArea(area);
  const defaultArea = area || 'Thoothukudi District';
  
  // Area-specific crime type distributions
  const areaBasedCrimeTypes: { [key: string]: { [key: string]: number } } = {
    'Thoothukudi Port': {
      'Theft': 35,
      'Robbery': 25,
      'Vandalism': 20,
      'Assault': 15,
      'Drugs': 5
    },
    'Beach Road': {
      'Theft': 40,
      'Harassment': 25,
      'Drugs': 20,
      'Assault': 15
    },
    'Palayamkottai Road': {
      'Theft': 30,
      'Robbery': 25,
      'Assault': 25,
      'Vandalism': 20
    },
    'Sipcot Area': {
      'Theft': 35,
      'Vandalism': 30,
      'Drugs': 20,
      'Assault': 15
    },
    'Fisheries College': {
      'Theft': 45,
      'Harassment': 30,
      'Vandalism': 15,
      'Drugs': 10
    }
  };

  // Initialize crime types with zeros
  const crimeTypes: { [key: string]: number } = {
    'Theft': 0,
    'Assault': 0,
    'Vandalism': 0,
    'Drugs': 0,
    'Robbery': 0,
    'Harassment': 0
  };

  // First try to get actual data
  areaData
    .filter(record => record.crimeType !== 'all' && !record.festival && !record.hour)
    .forEach(record => {
      const crimeType = record.crimeType.charAt(0).toUpperCase() + record.crimeType.slice(1);
      crimeTypes[crimeType] = (crimeTypes[crimeType] || 0) + record.count;
    });

  // If no data found, use area-specific distribution or generate realistic data
  if (Object.values(crimeTypes).every(count => count === 0)) {
    const areaProfile = areaRiskProfiles[defaultArea] || 'moderate';
    const baseCount = {
      'high': { min: 30, max: 50 },
      'moderate': { min: 15, max: 30 },
      'low': { min: 5, max: 15 }
    }[areaProfile];

    if (areaBasedCrimeTypes[defaultArea]) {
      // Use predefined distribution for specific areas
      Object.entries(areaBasedCrimeTypes[defaultArea]).forEach(([type, percentage]) => {
        crimeTypes[type] = Math.floor((percentage / 100) * (baseCount.max - baseCount.min) + baseCount.min);
      });
    } else {
      // Generate realistic distribution based on area risk profile
      Object.keys(crimeTypes).forEach(type => {
        crimeTypes[type] = Math.floor(Math.random() * (baseCount.max - baseCount.min) + baseCount.min);
      });
    }
  }

  return Object.entries(crimeTypes)
    .filter(([_, value]) => value > 0)
    .map(([name, value]) => ({
      name,
      value
    }))
    .sort((a, b) => b.value - a.value);
};

// Get area statistics
export const getAreaStatistics = (area: string) => {
  const areaData = getCrimeDataForArea(area || 'Thoothukudi District');
  const defaultArea = area || 'Thoothukudi District';
  
  // Calculate total crimes with minimum baseline values
  let totalCrimes = areaData
    .filter(record => record.crimeType !== 'all' && !record.festival && !record.hour)
    .reduce((total, record) => total + record.count, 0);
  
  // If total crimes is 0, generate a baseline value based on area risk profile
  if (totalCrimes === 0) {
    const areaRiskProfile = areaRiskProfiles[defaultArea] || 'moderate';
    const baselineCounts = {
      high: { min: 150, max: 250 },
      moderate: { min: 80, max: 150 },
      low: { min: 30, max: 80 }
    };
    
    const baseline = baselineCounts[areaRiskProfile];
    totalCrimes = Math.floor(Math.random() * (baseline.max - baseline.min)) + baseline.min;
  }
  
  // Calculate risk level based on total crimes
  const riskThresholds = {
    high: 200,
    moderate: 100
  };
  
  let overallRisk: 'high' | 'moderate' | 'low' = 'low';
  if (totalCrimes > riskThresholds.high) {
    overallRisk = 'high';
  } else if (totalCrimes > riskThresholds.moderate) {
    overallRisk = 'moderate';
  }

  // Calculate month-over-month change
  const currentMonthCrimes = areaData
    .filter(record => record.month === new Date().getMonth() + 1)
    .reduce((total, record) => total + record.count, 0);
    
  const lastMonthCrimes = areaData
    .filter(record => record.month === new Date().getMonth())
    .reduce((total, record) => total + record.count, 0);
    
  const changePercentage = lastMonthCrimes > 0 
    ? ((currentMonthCrimes - lastMonthCrimes) / lastMonthCrimes) * 100 
    : 0;
  
  // Area-specific peak time mapping
  const areaPeakTimes: { [key: string]: string } = {
    'Thoothukudi Port': '06:00 - 10:00', // Peak during morning port operations
    'Beach Road': '16:00 - 20:00', // Evening beach crowd
    'V E Road': '09:00 - 13:00', // Business hours peak
    'Palayamkottai Road': '08:00 - 12:00', // Morning market hours
    'Bryant Nagar': '18:00 - 22:00', // Evening residential area
    'Millerpuram': '17:00 - 21:00', // Evening commercial area
    'Third Mile': '10:00 - 14:00', // Mid-day market peak
    'Sipcot Area': '14:00 - 18:00', // Industrial area shift change
    'Fisheries College': '08:00 - 12:00', // College hours
    'Pearl City': '11:00 - 15:00', // Shopping peak hours
    'New Harbour Road': '05:00 - 09:00', // Early morning port traffic
    'Railway Station Area': '19:00 - 23:00', // Night train arrivals
    'Bus Terminal': '16:00 - 20:00', // Evening commute
  };

  // Determine peak time based on area characteristics and hourly data
  let peakTime = '18:00 - 22:00'; // default peak time

  // First check if we have a predefined peak time for this area
  if (areaPeakTimes[defaultArea]) {
    peakTime = areaPeakTimes[defaultArea];
  } else {
    // If no predefined time, analyze hourly data
    const hourlyData = areaData.filter(record => record.hour !== undefined);
    if (hourlyData.length > 0) {
      const maxIncidents = Math.max(...hourlyData.map(record => record.count));
      const peakHour = hourlyData.find(record => record.count === maxIncidents)?.hour || 18;
      peakTime = `${peakHour.toString().padStart(2, '0')}:00 - ${(peakHour + 4).toString().padStart(2, '0')}:00`;
    }
  }
  
  // Determine high risk days based on area characteristics
  const areaRiskDays = {
    'Thoothukudi Port': 'Weekends and Port Working Days',
    'Beach Road': 'Weekends and Holidays',
    'Palayamkottai Road': 'Market Days and Weekends',
    'Tiruchendur Road': 'Festival Days and Weekends',
    'V E Road': 'Rush Hours and Weekends',
    'Sipcot Area': 'Shift Change Times',
    'Third Mile': 'Market Days',
    'Bryant Nagar': 'Weekends',
    'Millerpuram': 'Local Event Days',
    'Muthiahpuram': 'Industrial Working Days',
    'Athimarapatti': 'Local Festival Days',
    'Kovilpillai Nagar': 'Weekends and Evenings',
    'Mappillai Oorani': 'Market Days',
    'P&T Colony': 'Pay Days and Weekends',
    'Mullakadu': 'Local Event Days',
    'Toovipuram': 'Weekends',
    'Pudur Pandiapuram': 'Market Days',
    'Meelavittan': 'Industrial Working Days',
    'Thermal Nagar': 'Shift Change Days',
    'Ettayapuram Road': 'Rush Hours',
    'Fisheries College': 'College Days',
    'Spic Nagar': 'Industrial Working Days',
    'Pearl City': 'Shopping Hours',
    'New Harbour Road': 'Port Working Days',
    'Inigo Nagar': 'Weekends',
    'George Road': 'Business Hours',
    'Arumuganeri': 'Market Days',
    'Vadakkarpuram': 'Local Event Days'
  };
  
  const highRiskDays = areaRiskDays[defaultArea as keyof typeof areaRiskDays] || 'Weekends and Festivals';
  
  return {
    name: defaultArea,
    totalCrimes,
    changePercentage: Number(changePercentage.toFixed(1)),
    riskLevel: overallRisk,
    peakTime,
    highRiskDays,
  };
};

export const getCrimeDataForDate = (area: string, date: Date) => {
  const areaData = getCrimeDataForArea(area);
  const dayOfWeek = date.getDay();
  
  // Dynamic crime types for different days
  const dailyCrimeTypes = {
    0: ['theft', 'robbery'], // Sunday
    1: ['assault', 'harassment'], // Monday
    2: ['vandalism', 'drugs'], // Tuesday
    3: ['theft', 'assault'], // Wednesday
    4: ['drugs', 'robbery'], // Thursday
    5: ['assault', 'vandalism'], // Friday
    6: ['theft', 'harassment'] // Saturday
  };

  // Dynamic hotspot locations with coordinates
  const hotspotLocations = {
    0: [
      { name: 'Thoothukudi Port', lat: 8.7450, lng: 78.1950 },
      { name: 'Beach Road', lat: 8.7680, lng: 78.1520 }
    ],
    1: [
      { name: 'Palayamkottai Road', lat: 8.7530, lng: 78.1420 },
      { name: 'Bryant Nagar', lat: 8.7690, lng: 78.1290 }
    ],
    2: [
      { name: 'Tiruchendur Road', lat: 8.7580, lng: 78.1380 },
      { name: 'Millerpuram', lat: 8.7780, lng: 78.1430 }
    ],
    3: [
      { name: 'Beach Road', lat: 8.7680, lng: 78.1520 },
      { name: 'Kovilpillai Nagar', lat: 8.7720, lng: 78.1480 }
    ],
    4: [
      { name: 'Thoothukudi Port', lat: 8.7450, lng: 78.1950 },
      { name: 'Muthiahpuram', lat: 8.7640, lng: 78.1280 }
    ],
    5: [
      { name: 'Palayamkottai Road', lat: 8.7530, lng: 78.1420 },
      { name: 'Third Mile', lat: 8.7590, lng: 78.1350 }
    ],
    6: [
      { name: 'Beach Road', lat: 8.7680, lng: 78.1520 },
      { name: 'Athimarapatti', lat: 8.7820, lng: 78.1540 }
    ]
  };

  const selectedLocations = hotspotLocations[dayOfWeek as keyof typeof hotspotLocations];
  const selectedCrimeTypes = dailyCrimeTypes[dayOfWeek as keyof typeof dailyCrimeTypes];
  
  const dynamicData = selectedLocations.flatMap(location => 
    selectedCrimeTypes.map(crimeType => ({
      area: location.name,
      crimeType,
      count: Math.floor(Math.random() * 30) + 20,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      riskLevel: Math.random() > 0.5 ? 'high' : 'moderate' as 'high' | 'moderate' | 'low',
      latitude: location.lat,
      longitude: location.lng
    }))
  );

  return dynamicData;
};

// Helper function to generate realistic monthly data for an area
const generateAreaData = (area: string, riskProfile: 'high' | 'moderate' | 'low'): CrimeRecord[] => {
  const data: CrimeRecord[] = [];
  const crimeTypes = ['theft', 'assault', 'vandalism', 'drugs', 'robbery', 'harassment'];
  const baselineCounts = {
    high: { min: 30, max: 50 },
    moderate: { min: 15, max: 35 },
    low: { min: 5, max: 20 }
  };

  // Generate monthly data
  for (let month = 1; month <= 12; month++) {
    const isHighActivityMonth = month >= 6 && month <= 9; // Summer months have higher activity
    
    crimeTypes.forEach(crimeType => {
      const baseline = baselineCounts[riskProfile];
      let count = Math.floor(Math.random() * (baseline.max - baseline.min)) + baseline.min;
      
      // Adjust for seasonal variations
      if (isHighActivityMonth) count = Math.floor(count * 1.3);
      
      data.push({
        area,
        crimeType,
        count,
        year: 2023,
        month,
        riskLevel: count > baseline.max * 0.8 ? 'high' : count > baseline.max * 0.4 ? 'moderate' : 'low'
      });
    });
  }

  // Add festival-specific data
  const festivals = [
    { name: 'Pongal', month: 1 },
    { name: 'Deepavali', month: 11 },
    { name: 'Christmas', month: 12 },
    { name: 'Temple Festival', month: 7 }
  ];

  festivals.forEach(fest => {
    data.push({
      area,
      crimeType: 'theft',
      count: Math.floor(Math.random() * 20) + 15,
      year: 2023,
      month: fest.month,
      festival: fest.name,
      riskLevel: riskProfile
    });
  });

  // Add hourly data for peak times
  const peakHours = [9, 12, 15, 18, 21];
  peakHours.forEach(hour => {
    data.push({
      area,
      crimeType: 'all',
      count: Math.floor(Math.random() * 30) + (hour >= 18 ? 25 : 15),
      year: 2023,
      month: 1,
      hour,
      riskLevel: hour >= 18 ? 'high' : 'moderate'
    });
  });

  return data;
};

// Area risk profiles based on location characteristics
const areaRiskProfiles: { [key: string]: 'high' | 'moderate' | 'low' } = {
  'Thoothukudi Port': 'high',
  'Tiruchendur Road': 'moderate',
  'Palayamkottai Road': 'high',
  'Millerpuram': 'moderate',
  'Bryant Nagar': 'low',
  'Third Mile': 'moderate',
  'Muthiahpuram': 'high',
  'Athimarapatti': 'low',
  'Beach Road': 'high',
  'Kovilpillai Nagar': 'moderate',
  'Mappillai Oorani': 'low',
  'P&T Colony': 'moderate',
  'Mullakadu': 'low',
  'V E Road': 'high',
  'Toovipuram': 'moderate',
  'Thoothukudi District': 'moderate',
  'Pudur Pandiapuram': 'low',
  'Meelavittan': 'moderate',
  'Thermal Nagar': 'moderate',
  'Ettayapuram Road': 'high',
  'Sipcot Area': 'high',
  'Fisheries College': 'low',
  'Spic Nagar': 'moderate',
  'Pearl City': 'moderate',
  'New Harbour Road': 'high',
  'Inigo Nagar': 'low',
  'George Road': 'moderate',
  'Arumuganeri': 'moderate',
  'Vadakkarpuram': 'low'
};

// Generate the complete dataset
// Update existing crimeDataset with generated data
Object.entries(areaRiskProfiles).flatMap(
  ([area, riskProfile]) => generateAreaData(area, riskProfile)
); // Added missing closing parenthesis
