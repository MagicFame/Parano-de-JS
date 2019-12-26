const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

var cors = require('cors')

var jwt = require('jsonwebtoken')
// Define the port
const port = 8124

// Connection to the MongoDB
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

// jwt secret token
app.set('secretKey', 'nodeRestApi')

// Initialization of the body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

// Initialization of routes
app.get('/', function (req, res) {
  res.json({ tutorial: 'Build REST API with node.js' })
})

const users = require('./api/routes/userRoutes')
const tasks = require('./api/routes/taskRoutes')
const authentication = require('./api/routes/authenticationRoutes')
const connected = require('./api/routes/connectedRoutes')

// Public route
app.use('/api/users', users)
app.use('/api/tasks', tasks)
app.use('/api/authentication', authentication)

// Private route
app.use('/api/connected', validateUser, connected)

// Listen on port
app.listen(port, function () {
  console.log('Serveur started on the port : ' + port)
})

// Token validation
function validateUser (req, res, next) {
  if (req.header('Authorization') === undefined) {
    res.status(403).json({ status: 'error', message: 'The token cannot be empty' })
  } else {
    const token = req.header('Authorization').replace('Bearer ', '')
    jwt.verify(token, req.app.get('secretKey'), function (err, decoded) {
      if (err) {
        res.status(401).json({ status: 'error', message: err.message, data: null })
      } else {
        req.body.userId = decoded.id
        next()
      }
    })
  }
}

// Middleware for 404 error
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})
