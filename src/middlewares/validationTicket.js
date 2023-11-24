const { body } = require('express-validator')
const path = require('node:path')

const ticketValidationData = [
   body('price')
      .notEmpty()
      .withMessage('You must complete the price')
      .bail()
      .isLength({ min: 3 })
      .withMessage('Price is very short'),
   body('room')
      .notEmpty()
      .withMessage('You must complete the room')
      .bail()
      .isNumeric()
      .withMessage('Room will be a number'),
   body('genre')
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
]

module.exports = ticketValidationData
