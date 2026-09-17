const express = require("express");

const app = express();

app.use(express.json());

// GET request - ID route
app.get("/id/:id", (req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    console.log(req.params.id);

    res.send("Hello Students from id route");
});

// GET request - Query parameters
app.get("/", (req, res) => {
    console.log(req.query.name);
    console.log(req.query.age);

    res.send("Hello Students from / route");
});

// POST request
app.post("/", (req, res) => {
    console.log(req.body);

    res.send("Hello Students");
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});