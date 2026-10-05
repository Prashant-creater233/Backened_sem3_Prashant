use("HospitalDB");

db.doctors.insert([
    {
        "name":"Dr. Amit",
        "age":30,
        "specilization":"Dermatologist",
        "salary":"300000"
    }
]);

db.doctors.find();