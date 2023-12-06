const express = require('express')
const router = express.Router()

// ---------- Controllers ---------- //
const membershipController = require('../controllers/membershipController')

// ---------- Middlewares ---------- //
const membershipValidationData = require('../middlewares/validationMembership')
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware')

// ---------- /membership ---------- //
router.get('/', membershipController.membership)

// ---------- Form create membreship ---------- //
router.get('/create', adminAuthMiddleware, membershipController.membershipCreate)
router.post(
   '/create',
   membershipValidationData,
   membershipController.membershipStore
)

// ---------- Form edit membreship ---------- //
router.get('/edit/:id', adminAuthMiddleware, membershipController.membershipEdit)
router.put(
   '/edit/:id',
   membershipValidationData,
   membershipController.membershipUpdate
)

// ---------- Delete membreship ---------- //
router.delete('/delete/:id', membershipController.membershipDestroy)

module.exports = router
