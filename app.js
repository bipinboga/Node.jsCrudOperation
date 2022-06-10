const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const EmployeeRoute = require('./routes/employee')
const Employee = require('./models/Employee')
const AdminRoute = require('./routes/admin')
const Admin = require('./models/Admin')
const res = require('express/lib/response')


mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;


db.on('error', (err) => {
    console.log (err)
})
db.once('open', () => {
    console.log('Database Connected')
})

const app = express()

app.use (morgan('dev'))
app.use ( bodyParser.urlencoded ( { extended : true } ))
app.use( bodyParser.json())

app.listen(3000, () => {
    console.log('server running on port 3000')
})

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
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })


app.use('/api/Admin',AdminRoute)
app.use('/api/Employee',EmployeeRoute)


