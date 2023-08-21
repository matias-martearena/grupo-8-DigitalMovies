const express = require('express')
const router = express.Router()

// Requerimiento de controladores
const homePage = require('../controllers/home')
const cartPage = require('../controllers/cart')
const membershipPage = require('../controllers/membership')
const showtimesPage = require('../controllers/showtimes')

// Routes
router.get('/', homePage.home)
router.get('/cart', cartPage.cart)
router.get('/membership', membershipPage.membership)
router.get('/showtimes', showtimesPage.showtimes)
router.get('/tickets', showtimesPage.showtimes)

module.exports = router
