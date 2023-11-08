const express = require('express')
const router = express.Router()

// ---------- Controllers ---------- //
const membershipController = require('../controllers/membershipController')

// ---------- Middlewares ---------- //
const upload = require('../middlewares/membershipMulterMiddleware')

router.get('/create', membershipController.membershipCreate)
router.post('/', upload.single('image'), membershipController.membershipStore)
router.get('/edit/:id', membershipController.membershipEdit)
router.put(
   '/edit/:id',
   upload.single('image'),
   membershipController.membershipUpdate
)
router.delete('/delete/:id', membershipController.membershipDestroy)

module.exports = router
