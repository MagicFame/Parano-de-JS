const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

// Define the port
const port = 3000

// Initialization of models
var User = require('./api/models/userModel')
var Task = require('./api/models/taskPlannerModel')

// Connection to the MongoDB
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true })

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

// Middleware for 404 error
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})
