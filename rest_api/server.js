const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

// Define the port
const port = 8124

// Connection to the MongoDB
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true })

// jwt secret token
app.set('secretKey', 'nodeRestApi')

// Initialization of the body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Initialization of routes
app.get('/', function (req, res) {
  res.json({ tutorial: 'Build REST API with node.js' })
})

const users = require('./api/routes/userRoutes')
const tasks = require('./api/routes/taskRoutes')
const authentication = require('./api/routes/authenticationRoutes')
app.use('/api/users', users)
app.use('/api/tasks', tasks)
app.use('/api/authentication', authentication)

// Listen on port
app.listen(port, function () {
  console.log('Serveur started on the port : ' + port)
})

// Middleware for 404 error
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})
