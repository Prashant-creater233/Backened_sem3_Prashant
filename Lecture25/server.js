const express=require("express");
const { default: mongoose } = require("mongoose");
const mpngoose=require("mongoose");
const Doctor = require('./doctors.model')
const app=express();
const PORT=3000;


app.get('/doctors', async (req, res)=>{
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
})



mongoose.connect("mongodb://localhost:27017/HospitalDB").then(()=>{
    console.log("Mongoose connected"); 
}).catch((err)=>{
    console.log(err);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})