const arrCartProducts = require('../database/cartProducts')

const cart = {
   cart: (req, res) => {
      res.render('users/cart/cart', {
         cartProducts: arrCartProducts,
      })
   },
}

module.exports = cart
