'use strict'

var User = require('../models/userModel')

exports.get_all_users = function (req, res) {
  User.find({}, function (err, user) {
    if (err) res.send(err)
    res.json(user)
  })
}

exports.get_user_by_id = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) console.log('err get_user_by_id') // TODO handle the error // if (err) res.send(err)
    res.json(user)
  })
}

exports.get_user_by_username = function (req, res) {
  User.findOne({ username: req.params.username }, function (err, user) {
    if (err) console.log('err get_user_by_username') // TODO handle the error
    res.json(user)
  })
}

exports.create_user = function (req, res) {
  var newuser = new User(req.body)
  newuser.save(function (err, user) {
    if (err) console.log('err create_user') // TODO handle the error
    res.json(user)
  })
}

exports.delete_user_by_id = function (req, res) {
  User.remove({ _id: req.params.id }, function (err, user) {
    if (err) console.log('err delete_user_by_id user') // TODO handle the error
    res.json({ message: 'user deleted' })
  })
}
