const express = require('express')
const router = express.Router()

// Requerimiento de controladores
const mainController = require('../controllers/mainController')
const membershipController = require('../controllers/membershipController')
const ticketsController = require('../controllers/ticketsController')

// Routes
router.get('/', mainController.home)
router.get('/products/:id', mainController.detail)
router.get('/manage', mainController.editor)
router.get('/membership', membershipController.membership)
router.get('/tickets', ticketsController.showtimes)

module.exports = router
