const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs')

const trailerVideos = require('../database/trailers.json')
const arrCartProducts = require('../database/cartProducts.json')

const usersFilePath = path.join(
   __dirname,
   '..',
   'database',
   'users.json'
)
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const userController = {
   login: (req, res) => {
      res.render('users/login', {
         trailers: trailerVideos,
      })
   },
   store: (req, res) => {
      const newId = 'USR' + Date.now()
      const newImgName = '/images' + req.file?.filename
      const newUser = {
         email: req.body.email,
         first_name: req.body.first_name,
         id: newId,
         image: newImgName,
         last_name: req.body.last_name,
         password: bcrypt.hashSync(req.body.password, 10)
      }
      users.push(newUser)
      fs.writeFileSync(usersFilePath, JSON.stringify(users))
      res.redirect('/')
   },
   cart: (req, res) => {
      res.render('users/cart', {
         cartProducts: arrCartProducts,
      })
   },
   register: (req, res) => {
      res.render('users/register')
   },
}

module.exports = userController
