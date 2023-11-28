const { body } = require('express-validator')

const membershipValidationData = [
   body('description')
      .notEmpty()
      .withMessage('You must complete the description')
      .bail()
      .isLength({ min: 4 })
      .withMessage('Description is very short')
      .bail()
      .isLength({ max: 255 })
      .withMessage('Description is very long'),
   body('discount0')
      .notEmpty()
      .withMessage('You must complete the discount')
      .bail()
      .isLength({ min: 4 })
      .withMessage('Discount is very short')
      .bail()
      .isLength({ max: 255 })
      .withMessage('Discount is very long'),
   body('discount1')
      .notEmpty()
      .withMessage('You must complete the discount')
      .bail()
      .isLength({ min: 4 })
      .withMessage('Discount is very short')
      .bail()
      .isLength({ max: 255 })
      .withMessage('Discount is very long'),
   body('discount2')
      .notEmpty()
      .withMessage('You must complete the discount')
      .bail()
      .isLength({ min: 4 })
      .withMessage('Discount is very short')
      .bail()
      .isLength({ max: 255 })
      .withMessage('Discount is very long'),
   body('price')
      .notEmpty()
      .withMessage('You must complete the price')
      .bail()
      .isLength({ min: 3 })
      .withMessage('Price is very short'),
   body('tier')
      .notEmpty()
      .withMessage('You must complete the tier')
      .bail()
      .isNumeric()
      .withMessage('Enter only numbers'),
]

module.exports = membershipValidationData
