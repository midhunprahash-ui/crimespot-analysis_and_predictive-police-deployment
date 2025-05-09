const express = require('express');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const CSV_FILE_PATH = path.join(__dirname, '..', 'src', 'data', 'storage', 'thoothukudi_crime_records.csv');

// Ensure directory exists
fs.ensureDirSync(path.dirname(CSV_FILE_PATH));

// Initialize CSV file with headers if it doesn't exist
if (!fs.existsSync(CSV_FILE_PATH)) {
  const header = 'Area,CrimeType,Count,Year,Month,Day,Hour,Festival,RiskLevel,Timestamp\n';
  fs.writeFileSync(CSV_FILE_PATH, header, 'utf8');
  console.log('Created new CSV file with headers');
}

app.post('/api/crime-records', (req, res) => {
  try {
    console.log('Received record:', req.body); // Debug log
    
    const record = req.body;
    const csvRow = [
      record.area,
      record.crimeType,
      record.count,
      record.year,
      record.month,
      record.day || '',
      record.hour || '',
      record.festival || '',
      record.riskLevel,
      new Date().toISOString()
    ].join(',') + '\n';

    fs.appendFileSync(CSV_FILE_PATH, csvRow, 'utf8');
    console.log('Added record to CSV:', csvRow); // Debug log
    
    res.json({ success: true, message: 'Record added successfully' });
  } catch (error) {
    console.error('Error saving record:', error);
    res.status(500).json({ error: 'Failed to save record', details: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CSV file path: ${CSV_FILE_PATH}`);
});