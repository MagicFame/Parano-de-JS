const server = require('./server.js')
const mongoose = require('mongoose')
// Define the port
const port = 8124

// Listen on port
server.listen(port, function () {
  console.log('Serveur started on the port : ' + port)
})

// Connection to the MongoDB
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
