'use strict'

var Task = require('../models/taskModel')

exports.get_all_tasks = function (req, res) {
  Task.find({}, function (err, task) {
    if (err) res.send(err)
    res.json(task)
  })
}

exports.create_task = function (req, res) {
  var newTask = new Task(req.body)
  newTask.save(function (err, task) {
    if (err) res.send(err)
    res.json(task)
  })
}
