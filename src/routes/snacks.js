const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path');

// Requerimiento de controladores
const productsController = require('../controllers/productsController')

//
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const pathImage = path.join(__dirname, '..', '..', 'public', 'images');
        cb(null, pathImage);
    },
    filename: (req, file, cb) => {
        const newFileName = '/img-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})

const upload = multer({ storage:storage });

// Routes
router.get('/', productsController.snacksIndex)
router.get('/create', productsController.snacksCreate); 
router.post('/', upload.single('image') , productsController.snacksStore); 
router.get('/edit/:id', productsController.snacksEdit); 
router.put('/edit/:id', upload.single('image'), productsController.snacksUpdate); 
router.delete('/delete/:id', productsController.snacksDestroy);
module.exports = router