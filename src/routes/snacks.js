const express = require('express')
const router = express.Router()
const snacksPage = require('../controllers/snacks')

router.get('/', snacksPage.snacks)

module.exports = router
