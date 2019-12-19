const connectedUserController = require('../controllers/connected/connectedUserController')
const connectedTaskController = require('../controllers/connected/connectedTaskController')
const express = require('express')
const router = express.Router()

router.get('/current/info', connectedUserController.info_user)
router.get('/current', connectedUserController.check)
router.post('/current/task', connectedTaskController.create_task_from_user)
router.get('/current/tasks', connectedTaskController.get_tasks_from_user)

module.exports = router
