const trailerVideos = require('../database/trailers.json')
const arrCartProducts = require('../database/cartProducts.json')

const userController = {
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
   register: (req, res) => {
      res.render('users/register')
   },
}

module.exports = userController
