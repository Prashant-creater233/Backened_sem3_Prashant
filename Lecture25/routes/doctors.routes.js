const express = require('express');
const router = express.Router();

const { getDoctors, getDoctorsById, createDoctor, updateDoctor, deleteDoctor } = require('../controller/doctors.controller.js');

router.get('/api/doctors', getDoctors);

///get doctors by id 
router.get('/api/doctors/:id', getDoctorsById);

////Create operation
router.post("/api/doctors", createDoctor);

router.put("/api/doctors/:id", updateDoctor);

router.delete("/api/doctors/:id", deleteDoctor);

module.exports = router;