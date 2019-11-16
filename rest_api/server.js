const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

// Define the port
const port = 3000

// Initialization of models
var Task = require('./api/models/taskPlannerModel')

// Connection to the MongoDB
mongoose.connect('mongodb://localhost/mydb')

// Initialization of the body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Initialization of routes
var routes = require('./api/routes/taskPlannerRoutes')
routes(app)

// Listen on port
app.listen(3000, function () {
  console.log('Serveur started on the port : ' + port)
})