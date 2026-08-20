const express = require("express");
const app=express();
const PORT = 3000;

const users =[
    {id:101, name:"Prashant", email:"prashant@example.com" },
    {id:102, name:"John", email:"john@example.com" },
    {id:103, name:"Jane", email:"jane@example.com" },
    {id:104, name:"Alice", email:"alice@example.com" }
]

app.get("/",(req,res) => {
    res.send("Hello students")
});

app.get("/about",(req,res) => {
    res.send("Welcome to app page")
});

app.get("/login",(req,res) => {
    res.send("<h1>Welcome to login page</h1>")
});

app.get("/users",(req,res) => {
    res.json(users)
});

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
    
});
