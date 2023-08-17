const express = require('express')
const router = express.Router()

// Requerimiento de controladores
const homePage = require('../controllers/home')
const cartPage = require('../controllers/cart')

// Routes
router.get('/', homePage.home)
router.get('/cart', cartPage.cart)

module.exports = router
