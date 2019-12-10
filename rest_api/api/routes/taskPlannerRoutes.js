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
  app.route('api/users')
    .get(userController.get_all_users)
    .post(userController.create_user)

  app.route('api/user/remove/:id')
    .delete(userController.delete_user_by_id)

  app.route('api/user/id/:id')
    .get(userController.get_user_by_id)

  app.route('api/user/name/:username')
    .get(userController.get_user_by_username)

  app.route('api/tasks')
    .get(taskController.get_all_tasks)
    .post(taskController.create_task)
}
