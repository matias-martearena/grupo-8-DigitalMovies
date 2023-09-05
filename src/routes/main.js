const express = require('express')
const router = express.Router()

// Requerimiento de controladores
const homePage = require('../controllers/home')
const cartPage = require('../controllers/cart')
const membershipPage = require('../controllers/membership')
const showtimesPage = require('../controllers/showtimes')
const loginPage = require('../controllers/login')
const snacksPage = require('../controllers/snacks')

// Routes
router.get('/', homePage.home)
router.get('/cart', cartPage.cart)
router.get('/membership', membershipPage.membership)
router.get('/showtimes', showtimesPage.showtimes)
router.get('/tickets', showtimesPage.showtimes)
router.get('/login', loginPage.login)
router.get('/snacks', snacksPage.snacks)

module.exports = router
