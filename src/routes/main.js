const express = require('express')
const router = express.Router()

// Requerimiento de controladores
const mainController = require('../controllers/mainController')
const userController = require('../controllers/userController')
const membershipController = require('../controllers/membershipController')
const ticketsController = require('../controllers/ticketsController')

// Routes
router.get('/', mainController.home)
router.get('/products/:id', mainController.detail)

router.get('/login', userController.login)
router.get('/cart', userController.cart)
router.get('/register', userController.register)

router.get('/membership', membershipController.membership)

router.get('/tickets', ticketsController.showtimes)

module.exports = router
