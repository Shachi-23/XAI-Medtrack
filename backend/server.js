// server.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Import routes
const patientRoutes = require('./routes/patients');
app.use('/api/patients', patientRoutes);

app.get('/', (req, res) => {
  res.send('XAI-MedTrack Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
