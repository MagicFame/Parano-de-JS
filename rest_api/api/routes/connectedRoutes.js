const verificationController = require('../controllers/verifyAuthenticationController')
const express = require('express')
const router = express.Router()

router.get('/current/info', verificationController.info_user)
router.get('/current', verificationController.check)

module.exports = router
