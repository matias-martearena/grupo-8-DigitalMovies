const { body } = require('express-validator')
const path = require('node:path')

const mediaValidationData = [
   body('genres')
      .notEmpty()
      .withMessage('You must complete the genres')
      .bail()
      .isLength({ min: 4 })
      .withMessage('Genres are very short')
      .bail()
      .isLength({ max: 255 })
      .withMessage('The genres are very long'),
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
   body('link').isLength({ max: 255 }).withMessage('The link is very long'),
   body('rating')
      .notEmpty()
      .withMessage('You must enter a rating')
      .bail()
      .isNumeric()
      .withMessage('Rating is a number')
      .bail()
      .isInt({ min: 1, max: 100 })
      .withMessage('It must be a number between 1 and 100')
      .bail()
      .isLength({ min: 1, max: 3 })
      .withMessage('It must be a number between 1 and 100'),
   body('synopsis')
      .notEmpty()
      .withMessage('You must enter a synopsis')
      .bail()
      .isLength({ min: 4 })
      .withMessage('Synopsis is very short'),
   body('title')
      .notEmpty()
      .withMessage('You must enter a title')
      .bail()
      .isLength({ min: 4 })
      .withMessage('Title is very short')
      .bail()
      .isLength({ max: 255 })
      .withMessage('Title is very long'),
   body('price').notEmpty().withMessage('You must enter a price').bail(),
]

module.exports = mediaValidationData
