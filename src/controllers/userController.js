const fs = require('node:fs')
const path = require('node:path')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')

const trailerVideos = require('../database/trailers.json')
const arrCartProducts = require('../database/cartProducts.json')

const usersFilePath = path.join(__dirname, '..', 'database', 'users.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

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

      const newId = 'USR' + Date.now()
      const newImg = `/images/users/${req.file?.filename}`

      const newUser = {
         email: req.body.email,
         first_name: req.body.first_name,
         id: newId,
         image: newImg,
         last_name: req.body.last_name,
         password: bcrypt.hashSync(req.body.password, 10),
      }

      users.push(newUser)

      fs.writeFileSync(usersFilePath, JSON.stringify(users))

      return res.redirect('/')
   },

   login: (req, res) => {
      res.render('users/login', {
         trailers: trailerVideos,
      })
   },

   cart: (req, res) => {
      res.render('users/cart', {
         cartProducts: arrCartProducts,
      })
   },
}

module.exports = userController
