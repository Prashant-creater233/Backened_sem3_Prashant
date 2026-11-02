const express = require('express');
const doctorRoutes = require('./routes/doctors.routes.js');
const app = express();
const connectDB = require('./config/db.js');
const PORT = 3000;

connectDB;

app.use(express.json());

app.use('/', doctorRoutes);



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})
