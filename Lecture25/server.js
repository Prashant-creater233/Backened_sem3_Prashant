const express = require('express');
const doctorRoutes = require('./routes/doctors.routes.js');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const connectDB = require('./config/db.js');
const PORT = process.env.PORT || 3000;

connectDB;

app.use(express.json());

app.use('/', doctorRoutes);



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    
})
