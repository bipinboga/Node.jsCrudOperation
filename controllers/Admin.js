const { response } = require('express')
const Employee =  require('../models/Employee')
const Route = require('../routes/admin')
const Admin = require('../models/Admin')


const index = (req,res) => {
    Admin.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
        message:'There is an Error'
        })      
    })
}


const show = (req,res) => {
    let adminID = req.body.adminID
    Admin.findById(adminID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'There is an Error'
        })
    })
}



const store = (req,res) => {
    let Admin = new Admin({
        name:req.body.name,
        Designation:req.body.Designation,
        id:req.body.id
    })
    Admin.save()
    .then(response => {
        res.json({
            message:'Admin added successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'There is an Error'
        
        })
    })
}



const update = (req,res) => {
    let adminID = req.body.adminID
    let updatedData = {
        name:req.body.name,
        Designation:req.body.Designation,
        id:req.body.id
    }
    Admin.findByIdAndUpdate(adminID,{$set:updatedData})
    .then(() => {
        res.json({
            message:'Admin updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'There is an Error'
        
        })
    })
}



const destroy = (req,res) => {
    let adminID = req.body.adminID
    Admin.findByIdAndRemove(adminID)
    .then(() => {
        res.json({
            message:'Admin deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'There is an Error'
        
        })
    })

}


module.exports={
    index, show, store, update, destroy
}