const userController = require('../controllers/userController')
const connectionController = require('../controllers/connectionController')
const express = require('express')
const router = express.Router()

router.post('/authenticate', connectionController.authenticate)
router.post('/register', userController.create_user)

module.exports = router
