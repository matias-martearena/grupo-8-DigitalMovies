const express = require('express')
const multer = require('multer')
const router = express.Router()
const path = require('path')

const cardsController = require('../controllers/cardsController')

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      const pathImage = path.join(
         __dirname,
         '..',
         '..',
         'public',
         'images',
         'movies'
      )
      cb(null, pathImage)
   },
   filename: (req, file, cb) => {
      const newFileName = '/img-' + Date.now() + path.extname(file.originalname)
      cb(null, newFileName)
   },
})

const upload = multer({ storage: storage })

router.get('/create', cardsController.cardsCreate)
router.post('/', upload.single('image'), cardsController.cardsStore)
router.get('/edit/:id', cardsController.cardsEdit)
router.put('/edit/:id', upload.single('image'), cardsController.cardsUpdate)
router.delete('/delete/:id', cardsController.cardsDestroy)

module.exports = router
