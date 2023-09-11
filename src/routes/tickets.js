const express = require('express')
const multer = require('multer')
const router = express.Router()
const path = require('path')

const ticketsController = require('../controllers/ticketsController')

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

router.get('/create', ticketsController.ticketsCreate)
router.post('/', upload.single('image'), ticketsController.ticketsStore)
router.get('/edit/:id', ticketsController.ticketsEdit)
router.put('/edit/:id', upload.single('image'), ticketsController.ticketsUpdate)
router.delete('/delete/:id', ticketsController.ticketsDestroy)

module.exports = router