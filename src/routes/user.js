const express = require('express')
const multer = require('multer')
const path = require('node:path')
const router = express.Router()

// ---------- Controllers ---------- //
const userController = require('../controllers/userController')

// ---------- Middlewares ---------- //
const registrationValidation = require('../middlewares/validationRegister')

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      const pathImage = path.join(
         __dirname,
         '..',
         '..',
         'public',
         'images',
         'users'
      )
      cb(null, pathImage)
   },
   filename: (req, file, cb) => {
      const newFileName = `img-${Date.now()}${path.extname(file.originalname)}`
      cb(null, newFileName)
   },
})

const upload = multer({ storage: storage })

router.get('/login', userController.login)
router.get('/cart', userController.cart)
router.get('/register', userController.register)
router.post(
   '/register',
   upload.single('image'),
   registrationValidation,
   userController.processRegister
)

module.exports = router
