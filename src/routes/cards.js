const express = require('express')
const multer = require('multer')
const router = express.Router()
const path = require('path')

const cardsController = require('../controllers/cardsController')

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

router.get('/create', cardsController.cardsCreate)
// Crea el producto y renderiza la lista actualizada
// router.post('/', upload.single('image'), productsController.cardsStore)
// router.post('/', upload.single('image'), productsController.snacksStore)

// router.get('/edit/:id', productsController.snacksEdit)
// router.put('/edit/:id', upload.single('image'), productsController.snacksUpdate)
// router.delete('/delete/:id', productsController.snacksDestroy)

module.exports = router
