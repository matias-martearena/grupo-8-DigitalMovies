const express = require('express')
const router = express.Router()

// ---------- Controllers ---------- //
const ticketsController = require('../controllers/ticketsController')

// ---------- Middlewares ---------- //
const upload = require('../middlewares/ticketMulterMiddleware')

router.get('/create', ticketsController.ticketsCreate)
router.post('/', upload.single('image'), ticketsController.ticketsStore)
router.get('/edit/:id', ticketsController.ticketsEdit)
router.put('/edit/:id', upload.single('image'), ticketsController.ticketsUpdate)
router.delete('/delete/:id', ticketsController.ticketsDestroy)

module.exports = router
