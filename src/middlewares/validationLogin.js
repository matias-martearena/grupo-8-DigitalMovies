const { body } = require('express-validator')

const loginValidationRules = [
   body('email')
      .notEmpty()
      .withMessage('You must complete the mail form')
      .bail()
      .isEmail()
      .withMessage('Please enter a valid mail address')
      .bail()
      .isLength({ max: 100 })
      .withMessage('The mail can have a maximum of one hundred characters'),
   body('password')
      .notEmpty()
      .withMessage('You must complete the password form')
      .bail()
      .isLength({ min: 8 })
      .withMessage('Password must be at least eight characters long')
      .bail()
      .isLength({ max: 70 })
      .withMessage('Password is too long'),
]

module.exports = loginValidationRules
