// ---------- Password module ---------- //
const bcrypt = require('bcryptjs')

// ---------- Validation module ---------- //
const { validationResult } = require('express-validator')

// ---------- Database ---------- //
const db = require('../database/models')

// ---------- Models ---------- //

const userController = {
   register: (req, res) => {
      res.render('users/register')
   },

   processRegister: (req, res) => {
      const resultValidation = validationResult(req)

      if (resultValidation.errors.length > 0) {
         return res.render('users/register', {
            errors: resultValidation.mapped(),
            oldData: req.body,
         })
      }

      let hashPassword = bcrypt.hashSync(req.body.password, 10)

      db.User.create({
         first_name: req.body.first_name,
         last_name: req.body.last_name,
         email: req.body.email,
         image: req.file?.filename || 'user-default.jpg',
         password: hashPassword,
      }).then(() => {
         return res.redirect('/user/login')
      })
   },

   login: (req, res) => {
      return res.render('users/login')
   },

   loginProcess: (req, res) => {
      const resultValidation = validationResult(req)

      if (resultValidation.errors.length > 0) {
         return res.render('users/login', {
            errors: resultValidation.mapped(),
            oldData: req.body,
         })
      }

      db.User.findOne({
         where: {
            email: req.body.email,
         },
      }).then(userToLogin => {
         if (!userToLogin) {
            return res.render('users/login', {
               errors: {
                  email: {
                     msg: 'User not found',
                  },
               },
               oldData: req.body,
            })
         }
         if (userToLogin) {
            let passwordOk = bcrypt.compareSync(
               req.body.password,
               userToLogin.password
            )

            if (!passwordOk) {
               return res.render('users/login', {
                  errors: {
                     password: {
                        msg: 'Credentials are invalid',
                     },
                  },
                  oldData: req.body,
               })
            }

            if (req.body.remember) {
               res.cookie('userMail', req.body.email, {
                  maxAge: 1000 * 60 * 60,
               })
            }

            delete userToLogin.password
            req.session.userLogged = userToLogin
            return res.render('users/profile', {
               user: req.session.userLogged,
            })
         }
      })
   },

   profile: (req, res) => {
      return res.render('users/profile', {
         user: req.session.userLogged,
      })
   },

   logout: (req, res) => {
      res.clearCookie('userMail')
      req.session.destroy()
      return res.redirect('/')
   },

   cart: (req, res) => {
      return res.render('users/cart', {
         cartProducts: [],
      })
   },
}

module.exports = userController
