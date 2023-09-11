const express = require('express')
const multer = require('multer')
const router = express.Router()
const path = require('path')

const membershipController = require('../controllers/membershipController')

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

router.get('/create', membershipController.membershipCreate)
router.post('/', upload.single('image'), membershipController.membershipStore)
router.get('/edit/:id', membershipController.membershipEdit)
router.put('/edit/:id', upload.single('image'), membershipController.membershipUpdate)
router.delete('/delete/:id', membershipController.membershipDestroy)

module.exports = router