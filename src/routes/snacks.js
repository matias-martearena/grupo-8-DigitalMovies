const express = require('express')
const router = express.Router()

// ---------- Controllers ---------- //
const snacksController = require('../controllers/snacksController')

// ---------- Middlewares ---------- //
const upload = require('../middlewares/snackMulterMiddleware')
const snackValidationData = require('../middlewares/validationSnack')

// ---------- /snacks Snack Page ---------- //
router.get('/', snacksController.snacksIndex)

// ---------- Create a new snack ---------- //
router.get('/create', snacksController.snacksCreate)
router.post(
   '/create',
   upload.single('image'),
   snackValidationData,
   snacksController.snacksStore
)

// ---------- Edit or update a snack ---------- //
router.get('/edit/:id', snacksController.snacksEdit)
router.put(
   '/edit/:id',
   upload.single('image'),
   snackValidationData,
   snacksController.snacksUpdate
)

// ---------- Delete a snack ---------- //
router.delete('/delete/:id', snacksController.snacksDestroy)

module.exports = router
