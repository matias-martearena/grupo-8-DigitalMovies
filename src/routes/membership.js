const express = require('express')
const router = express.Router()

// ---------- Controllers ---------- //
const membershipController = require('../controllers/membershipController')

router.get('/create', membershipController.membershipCreate)
router.post('/', membershipController.membershipStore)
router.get('/edit/:id', membershipController.membershipEdit)
router.put('/edit/:id', membershipController.membershipUpdate)
router.delete('/delete/:id', membershipController.membershipDestroy)

module.exports = router
