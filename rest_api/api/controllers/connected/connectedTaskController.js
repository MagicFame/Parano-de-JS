'use strict'

var Task = require('../../models/taskModel')

exports.get_tasks_from_user = function (req, res, next) {
  Task.find({ creator: req.body.userId }, function (err, user) {
    if (err) res.send(err)
    if (user === null) res.status(500)
    res.json(user)
  })
}

exports.create_task_from_user = function (req, res, next) {
  var newTask = new Task(req.body)
  newTask.creator = req.body.userId
  newTask.save(function (err, task) {
    if (err) res.send(err)
    res.json(task)
  })
}
