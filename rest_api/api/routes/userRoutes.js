const userController = require('../controllers/userController')
const express = require('express')
const router = express.Router()

router.get('/', userController.get_all_users)
router.post('/user', userController.create_user)
router.delete('/user/remove/:id', userController.delete_user_by_id)
router.get('/user/id/:id', userController.get_user_by_id)
router.get('/user/name/:username', userController.get_user_by_username)

module.exports = router
