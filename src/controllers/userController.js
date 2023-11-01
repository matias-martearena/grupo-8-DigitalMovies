// ---------- Password module ---------- //
const bcrypt = require('bcryptjs')

// ---------- Validation module ---------- //
const { validationResult } = require('express-validator')

// ---------- Database ---------- //
const trailerVideos = require('../database/trailers.json')
const arrCartProducts = require('../database/cartProducts.json')
const arrCards = require('../database/cards.json')
const db = require('../database/models')

// ---------- Models ---------- //
const User = require('../models/User')

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

      let userInDB = User.findByField('mail', req.body.email)

      if (userInDB) {
         return res.render('users/register', {
            errors: {
               email: {
                  msg: 'Email already in use!',
               },
            },
            oldData: req.body,
         })
      }

      let newImg = function () {
         if (req.file?.filename) {
            return `/images/users/${req.file?.filename}`
         } else {
            return '/images/users/user-default.jpg'
         }
      }

      let hashPassword = bcrypt.hashSync(req.body.password, 10)

      let userToCreate = {
         name: req.body.first_name,
         surname: req.body.last_name,
         mail: req.body.email,
         image: newImg(),
         password: hashPassword,
      }

      let userCreated = User.create(userToCreate)
      return res.redirect('/user/login')
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
            trailers: trailerVideos,
         })
      }

      let userToLogin = User.findByField('mail', req.body.email)

      if (!userToLogin) {
         return res.render('users/login', {
            errors: {
               email: {
                  msg: 'User not found',
               },
            },
            oldData: req.body,
            trailers: trailerVideos,
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
               trailers: trailerVideos,
            })
         }

         if (req.body.remember) {
            res.cookie('userMail', req.body.email, { maxAge: 1000 * 60 * 60 })
         }

         delete userToLogin.password
         req.session.userLogged = userToLogin
         return res.render('users/profile', {
            user: req.session.userLogged,
         })
      }
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
         cartProducts: arrCartProducts,
      })
   },
}

module.exports = userController
