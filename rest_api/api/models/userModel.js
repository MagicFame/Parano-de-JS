'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

/*
* Implementation of the User on database
*/

var UserSchema = new Schema({
  username: { type: String, required: 'Please enter a valid username' },
  firstname: { type: String, required: 'Please enter a valid firstname' },
  lastname: { type: String, required: 'Please enter a valid lastname' },
  birthdate: { type: Date, required: false },
  phone: { type: String, required: false },
  mail: { type: String, required: 'Please enter a valid email address' },
  password: { type: String, required: 'Please enter a valid username' }
})

module.exports = mongoose.model('User', UserSchema)
