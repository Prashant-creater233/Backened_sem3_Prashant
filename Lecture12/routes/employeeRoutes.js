const express=require("express")
const router=express.Router()

const {
        getEmployee,
        getEmployeeById,
        addEmployee,
        updateEmployee,
        deleteEmployee
    } =require("../controller/employeeController.js")


//Read Operation
router.get("/", getEmployee)

//employee get by their id
router.get("/:id", getEmployeeById)

//create operation
router.post("/", addEmployee)


//update operation
router.put("/:id", updateEmployee)


//delete
router.delete("/:id", deleteEmployee)

module.exports=router;