import * as fs from 'fs';
import * as path from 'path';

const CSV_FILE_PATH = '/Users/midhun/Developer/thooo_trae/src/data/storage/thoothukudi_crime_records.csv';

export const appendToCsv = async (record: any) => {
  try {
    // Ensure all fields are properly formatted
    const formattedRecord = {
      ...record,
      area: record.area.replace(/,/g, ''),
      crimeType: record.crimeType.replace(/,/g, ''),
      festival: (record.festival || '').replace(/,/g, '')
    };

    // Create CSV row with proper escaping
    const csvRow = [
      formattedRecord.area,
      formattedRecord.crimeType,
      formattedRecord.count,
      formattedRecord.year,
      formattedRecord.month,
      formattedRecord.day || '',
      formattedRecord.hour || '',
      formattedRecord.festival || '',
      formattedRecord.riskLevel,
      new Date().toISOString()
    ].join(',') + '\n';

    // Create header if file doesn't exist
    if (!fs.existsSync(CSV_FILE_PATH)) {
      const header = 'area,crimeType,count,year,month,day,hour,festival,riskLevel,timestamp\n';
      fs.writeFileSync(CSV_FILE_PATH, header);
    }

    // Append the new record
    fs.appendFileSync(CSV_FILE_PATH, csvRow);

    return { success: true };
  } catch (error) {
    console.error('Error in appendToCsv:', error);
    throw error;
  }
};