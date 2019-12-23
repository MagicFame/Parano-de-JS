const taskController = require('../controllers/taskController')
const express = require('express')
const router = express.Router()

router.get('/', taskController.get_all_tasks)
router.post('/task', taskController.create_task)
router.delete('/delete/:taskId', taskController.delete_a_task)

module.exports = router
