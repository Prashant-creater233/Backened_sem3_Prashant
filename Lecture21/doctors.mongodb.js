use("HospitalDB");

// CREATE 1 insert  2insertOne 3 insertMany
// db.doctors.insertMany([
//     {
//         name: "Dr. Amit",
//         age: 30,
//         specialization: "Dermatologist",
//         salary: 300000
//     },
//     {
//         name: "Dr. Rahul",
//         age: 35,
//         specialization: "Cardiologist",
//         salary: 500000
//     }
// ]);

// db.doctors.insertOne(
//     {
//         name: "Dr. Rahul",
//         age: 35,
//         specialization: "Cardiologist",
//         salary: 500000
//     }
// )

// db.doctors.insert(
//     {
//         name: "Dr. Rahul",
//         age: 35,
//         specialization: "Cardiologist",
//         salary: 500000
//     }
// )


// READ Operations 1. find()  2. findOne()
// db.doctors.find();
// db.doctors.findOne()

// READ with condition
// db.doctors.find({
//     specialization: "Cardiologist"
// });
// db.doctors.findOne({name: "Rakesh Sharma"})


// // UPDATE
// db.doctors.updateOne(
//     { name: "Rakesh Sharma" },
//     { 
//         $set: { 
//             salary: 400000
//         } 
//     }
// );

// db.doctors.updateMany(
//     { name: "Rakesh Sharma" },
//     { 
//         $set: { 
//             salary: 500000,
//             experience: 25,
//             fees: 2500
//         } 
//     }
// );

// db.doctors.updateMany(
//     { name: "Dr. Amit" },
//     { 
//         $set: { 
//             salary: 500000,
//             experience: 20,
//             fees: 3500
//         } 
//     }
// );

// DELETE Operation
// db.doctors.deleteOne({
//     name: "Dr. Amit"
// });

db.doctors.deleteMany({
    salary: 500000
});