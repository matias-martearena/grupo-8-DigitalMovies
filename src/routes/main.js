const express = require('express')
const router = express.Router()

// Requerimiento de controladores
const mainController = require('../controllers/mainController')

//middleware
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware')

// Routes
router.get('/', mainController.home)
router.get('/search', mainController.search)
router.get('/movies', mainController.movies)
router.get('/series', mainController.series)
router.get('/best-rating', mainController.ratingFilter)
router.get('/products/:id', mainController.detail)
router.get('/manage', adminAuthMiddleware, mainController.editor)

module.exports = router
