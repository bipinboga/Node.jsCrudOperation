const { response } = require('express')
const Employee = require('../models/Employee')


const index = (req,res) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch (error => {
        res.json({
            message: 'An error occured'
        })
    })
}


const show = (req,res) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch (error => {
        res.json({
            message: 'An error occured'
        })
    })
}


const store = (req,res) => {
    let employee =  new Employee({
        name: req.body.name,
        id:req.body.id,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
    .then(response => {
        res.json({
            message: 'Employee added successfully'
        })
    })
    .catch (error => {
        res.json({
            message: 'An error occured'
        })
    })
}


const update = (req,res) => {
    let employeeID = req.body.employeeID
    let updatedData = {
        name: req.body.name,
        id:req.body.id,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    Employee.findByIdAndUpdate(employeeID,{$set:updatedData})
    .then(() => {
        res.json({
            message:"Employee updated successfully"
        })
    })
    .catch (error => {
        res.json({
            message: 'An error occured'
        })
    })
}


const destroy = (req,res) => {
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        res.json({
            message: 'Employee deleted successfully'
        })
    })
    .catch (error => {
        res.json({
            message: 'An error occured'
        })
    })
}


const employee = (req, res) => {
    Employee.aggregate([
        {
            $lookup: {
                from: "admin",
                localField: "id",
                foreignField: "id",
                as: "designation",
            }  
        },
        {
            $unwind: "$designation_info",
        }
    ])
    .then(response => {
        res.json({
            response
        })
    }) 
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy, employee
}