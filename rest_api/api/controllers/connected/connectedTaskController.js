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

exports.delete_task_from_user = function (req, res, next) {
  Task.remove({
    _id: req.params.taskId
  }, function (err, task) {
    if (err) { res.send(err) } else res.json({ message: 'Task successfully deleted' })
  })
}

exports.edit_task_from_user = function (req, res) {
  Task.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, runValidators: true }, function (err, task) {
    if (task === undefined) return res.status(400).json({ status: 'error', message: 'Task undefined, the id may be invalid or the status is undefined' })
    if (err) return res.status(400).json({ status: 'error', message: err })
    if (req.body.userId !== task.creator) {
      return res.status(401).json({ status: 'error', message: 'Only the creator can update the task' })
    }
    res.json(task)
  })
}
