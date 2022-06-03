const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const EmployeeRoute = require('./routes/employee')

mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true, useUnifiedTopology: true})
const database = mongoose.connection;


database.on('error', (err) => {
    console.log (err)
})
database.once('open', () => {
    console.log('Database Connected')
})

const app = express()

app.use (morgan( 'dev'))

app.use ( bodyParser.urlencoded ( { extended : true } ))
app.use( bodyParser.json())

app.listen(3000, () => {
    console.log('server runningon port 3000')
})

app.use('/api/employee',EmployeeRoute)


