'use strict'

module.exports = function (app) {
  var taskPlanner = require('../controllers/taskPlannerController')

  // todoList Routes
  app.route('/tasks')
    .get(taskPlanner.list_all_tasks)
    .post(taskPlanner.create_a_task)

  app.route('/tasks/:taskId')
    .get(taskPlanner.read_a_task)
    .put(taskPlanner.update_a_task)
    .delete(taskPlanner.delete_a_task)
}
