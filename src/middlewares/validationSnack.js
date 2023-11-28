const { body } = require('express-validator')
const path = require('node:path')

const snackValidationData = [
   body('image').custom((value, { req }) => {
      let file = req.file
      let acceptedExtensions = ['.jpg', '.png', '.jpeg']
      if (file) {
         let fileExtension = path.extname(file.originalname)
         if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(
               `Extensions accepted ${acceptedExtensions.join(', ')}`
            )
         }
      }
      return true
   }),
   body('price')
      .notEmpty()
      .withMessage('You must complete the price')
      .bail()
      .isLength({ min: 3 })
      .withMessage('Price is very short'),
   body('description')
      .notEmpty()
      .withMessage('You must complete the description')
      .bail()
      .isLength({ min: 4 })
      .withMessage('Description is very short')
      .bail()
      .isLength({ max: 255 })
      .withMessage('Description is very long'),
]

module.exports = snackValidationData
