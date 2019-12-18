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
    if (err) res.send(err)
    if (user === null) res.status(404)
    res.json(user)
  })
}

exports.get_user_by_username = function (req, res) {
  User.findOne({ username: req.params.username }, function (err, user) {
    if (err) res.send(err)
    if (user === null) res.status(404)
    res.json(user)
  })
}

exports.create_user = function (req, res) {
  var newuser = new User(req.body)
  newuser.save(function (err, user) {
    if (err) res.send(err)
    res.json(user)
  })
}

exports.delete_user_by_id = function (req, res) {
  User.findOneAndRemove({ _id: req.params.id }, function (err, user) {
    if (err) res.send(err)
    if (user === null) res.status(404)
    res.json({ message: 'user deleted' })
  })
}
