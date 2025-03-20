const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all patients
router.get('/', async (req, res) => {
  try {
    const [patients] = await db.query('SELECT * FROM Patients');
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD a new patient
router.post('/', async (req, res) => {
  const { doctor_id, name, diagnosis } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO Patients (doctor_id, name, diagnosis) VALUES (?, ?, ?)',
      [doctor_id, name, diagnosis]
    );
    res.json({ patient_id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
