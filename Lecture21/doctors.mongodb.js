use("HospitalDB");

// CREATE
db.doctors.insertMany([
    {
        name: "Dr. Amit",
        age: 30,
        specialization: "Dermatologist",
        salary: 300000
    },
    {
        name: "Dr. Rahul",
        age: 35,
        specialization: "Cardiologist",
        salary: 500000
    }
]);

// READ
db.doctors.find();

// READ with condition
db.doctors.find({
    specialization: "Cardiologist"
});

// UPDATE
db.doctors.updateOne(
    { name: "Dr. Amit" },
    { $set: { salary: 400000 } }
);

// DELETE
db.doctors.deleteOne({
    name: "Dr. Rahul"
});