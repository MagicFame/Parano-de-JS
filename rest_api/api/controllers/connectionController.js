'use strict'

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

var User = require('../models/userModel')

exports.authenticate = function (req, res, next) {
  User.findOne({ username: req.body.username }, function (err, user) {
    if (err) {
      console.log(err) // TODO handle error
    } else {
      // user doesn't exist
      if (user === null) {
        res.status(401).json({ status: 'error', message: 'invalid password' })
      } else {
        // comparing user passord and hash from the db.
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({ id: user._id }, req.app.get('secretKey'), { expiresIn: '1h' })
          res.json({ status: 'success', message: 'connection accepted', data: { user: user, token: token } })
        } else {
          res.status(401).json({ status: 'error', message: 'invalid password' })
        }
      }
    }
  })
}
