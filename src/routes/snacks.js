const express = require('express')
const router = express.Router()

// ---------- Controllers ---------- //
const snacksController = require('../controllers/snacksController')

// ---------- Middlewares ---------- //
const upload = require('../middlewares/snackMulterMiddleware')

router.get('/', snacksController.snacksIndex)
router.get('/create', snacksController.snacksCreate)
router.post('/', upload.single('image'), snacksController.snacksStore)
router.get('/edit/:id', snacksController.snacksEdit)
router.put('/edit/:id', upload.single('image'), snacksController.snacksUpdate)
router.delete('/delete/:id', snacksController.snacksDestroy)

module.exports = router
