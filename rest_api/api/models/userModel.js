'use strict'
var mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const saltRounds = 10
var Schema = mongoose.Schema

/*
* Implementation of the User on database
*/

var UserSchema = new Schema({
  username: { type: String, required: 'Please enter a valid username', unique: true },
  firstname: { type: String, required: 'Please enter a valid firstname' },
  lastname: { type: String, required: 'Please enter a valid lastname' },
  birthdate: { type: Date, required: false },
  phone: { type: String, required: false },
  mail: { type: String, required: 'Please enter a valid email address', unique: true },
  password: { type: String, required: 'Please enter a valid username' }
})

// hash user password before saving into database
UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds)
  next()
})

module.exports = mongoose.model('User', UserSchema)
