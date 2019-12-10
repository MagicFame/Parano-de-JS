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
