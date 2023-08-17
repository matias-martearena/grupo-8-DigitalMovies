const express = require('express')
const router = express.Router()
const loginPage = require('../controllers/login')

router.get('/', loginPage.login)

module.exports = router
