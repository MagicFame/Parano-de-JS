'use strict'

var User = require('../models/userModel')

exports.check = function (req, res, next) {
  res.json({ status: 'success', id: req.body.userId })
}

exports.info_user = function (req, res, next) {
  User.findById(req.body.userId, function (err, user) {
    if (err) res.send(err)
    if (user === null) res.status(500)
    res.json(user)
  })
}
