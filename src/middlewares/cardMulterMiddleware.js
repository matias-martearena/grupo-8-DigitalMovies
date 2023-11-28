const multer = require('multer')
const path = require('node:path')

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
      const newFileName = 'img-' + Date.now() + path.extname(file.originalname)
      cb(null, newFileName)
   },
})

const upload = multer({ storage: storage })

module.exports = upload
