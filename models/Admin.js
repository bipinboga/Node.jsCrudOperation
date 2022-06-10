const mongoose = require('mongoose')
const Employee = require('./Employee')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    name:{
        type : String
    },
    designation:{
        type : String
    },
    id:{
        type: Number
    }
    
} , {timestamps:true})

const Admin = mongoose.model('Admin',adminSchema)

module.exports = Admin