const express = require('express')
const router = express.Router()

// ---------- Controllers ---------- //
const userController = require('../controllers/userController')

// ---------- Middlewares ---------- //
const registrationValidation = require('../middlewares/validationRegister')
const loginValidation = require('../middlewares/validationLogin')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const upload = require('../middlewares/userMulterMiddleware')

// Proceso de registro del usuario
router.get('/register', guestMiddleware, userController.register)
router.post(
   '/register',
   upload.single('image'),
   registrationValidation,
   userController.processRegister
)

// Proceso de logeo del usuario
router.get('/login', guestMiddleware, userController.login)
router.post('/login', loginValidation, userController.loginProcess)

// Perfil del usuario
router.get('/profile', authMiddleware, userController.profile)

// Logout
router.get('/logout', userController.logout)

// Carrito de compras del usuario
router.get('/cart', userController.cart)

module.exports = router
