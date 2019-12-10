'use strict'

module.exports = function (app) {
  var taskController = require('../controllers/taskController')
  var userController = require('../controllers/userController')

  // todoList Routes
  /*
  app.route('/tasks/:taskId')
    .get(taskPlanner.read_a_task)
    .put(taskPlanner.update_a_task)
    .delete(taskPlanner.delete_a_task)
  */
  app.route('/users')
    .get(userController.get_all_users)
    .post(userController.create_user)

  app.route('/user/:id')
    .get(userController.get_user_by_id)

  app.route('/tasks')
    .get(taskController.get_all_tasks)
    .post(taskController.create_task)
}
