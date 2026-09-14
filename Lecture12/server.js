const express=require("express");
const app=express()
const PORT = 3000;
const employeesRoutes=require("./routes/employeeRoutes.js")

//middleware
app.use(express.json());

app.use("/employees", employeesRoutes)


app.listen(PORT, ()=>{
    console.log("server is running on port 3000");
})
