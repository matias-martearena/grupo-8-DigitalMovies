const express = require('express')
const router = express.Router()

// Requerimiento de controladores
const homePage = require('../controllers/home')
const cartPage = require('../controllers/cart')
const membershipPage = require('../controllers/membership')

// Routes
router.get('/', homePage.home)
router.get('/cart', cartPage.cart)
router.get('/membership', membershipPage.membership)

module.exports = router
