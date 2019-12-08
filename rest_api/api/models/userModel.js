'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

/*
* Implementation of the User on database
*/

var UserSchema = new Schema({
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  birthdate: { type: Date, required: true },
  phone: { type: String, required: false },
  mail: { type: String, required: true },
  password: { type: String, required: true }
})

module.exports = mongoose.model('User', UserSchema)

