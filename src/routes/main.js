const express = require('express')
const router = express.Router()

// Requerimiento de controladores
const mainController = require('../controllers/mainController')

// Routes
router.get('/', mainController.home)
router.get('/products/:id', mainController.detail)
router.get('/manage', mainController.editor)

module.exports = router
