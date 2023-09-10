const express = require('express')
const multer = require('multer')
const path = require('path')
const router = express.Router()

const snacksController = require('../controllers/snacksController')

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

router.get('/', snacksController.snacksIndex)
router.get('/create', snacksController.snacksCreate)
router.post('/', upload.single('image'), snacksController.snacksStore)
router.get('/edit/:id', snacksController.snacksEdit)
router.put('/edit/:id', upload.single('image'), snacksController.snacksUpdate)
router.delete('/delete/:id', snacksController.snacksDestroy)

module.exports = router
