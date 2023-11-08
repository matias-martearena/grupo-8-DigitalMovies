const express = require('express')
const router = express.Router()

// ---------- Controllers ---------- //
const cardsController = require('../controllers/cardsController')

// ---------- Middlewares ---------- //
const upload = require('../middlewares/cardMulterMiddleware')

router.get('/create', cardsController.cardsCreate)
router.post('/', upload.single('image'), cardsController.cardsStore)
router.get('/edit/:id', cardsController.cardsEdit)
router.put('/edit/:id', upload.single('image'), cardsController.cardsUpdate)
router.delete('/delete/:id', cardsController.cardsDestroy)

module.exports = router
