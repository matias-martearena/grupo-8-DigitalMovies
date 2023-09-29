const express = require('express')
const multer = require('multer')
const path = require('path')
const router = express.Router()

const userController = require('../controllers/userController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       const pathImage = path.join(__dirname, '..', '..', 'public', 'images')
       cb(null, pathImage)
    },
    filename: (req, file, cb) => {
       const newFileName = '/img-' + Date.now() + path.extname(file.originalname)
       cb(null, newFileName)
    },
 })

const upload = multer({ storage: storage })

router.get('/login', userController.login)
router.get('/cart', userController.cart)
router.get('/register', userController.register)
router.post('/', upload.single('image'), userController.store)

module.exports = router