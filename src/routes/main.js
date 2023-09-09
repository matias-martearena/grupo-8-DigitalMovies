const express = require('express')
const router = express.Router()

// Requerimiento de controladores
const mainController = require('../controllers/mainController')
const productsController = require('../controllers/productsController')
const userController = require('../controllers/userController')

// Routes
router.get('/', mainController.home)
router.get('/products/:id', mainController.detail)
router.get('/login', userController.login)
router.get('/cart', userController.cart)
router.get('/register', userController.register)
router.get('/membership', productsController.membership)
router.get('/showtimes', productsController.showtimes)
router.get('/tickets', productsController.showtimes)

module.exports = router
