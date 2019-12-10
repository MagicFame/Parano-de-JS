const taskController = require('../controllers/taskController')
const userController = require('../controllers/userController')
const connectionController = require('../controllers/connectionController')
const express = require('express')
const router = express.Router()

router.post('/users', userController.create_user)
router.get('/users', userController.get_all_users)
router.delete('/user/remove/:id', userController.delete_user_by_id)
router.get('/user/id/:id', userController.get_user_by_id)
router.get('/user/name/:username', userController.get_user_by_username)

router.get('/tasks', taskController.get_all_tasks)
router.post('/tasks', taskController.create_task)

router.post('/authenticate', connectionController.authenticate)
router.post('/register', userController.create_user)

module.exports = router
