const arrCards = require('../database/cards.json')

const mainController = {
   home: (req, res) => {
      res.render('home', {
         card: arrCards,
      })
   },
   detail: (req, res) => {
      const { id } = req.params
      const findProduct = arrCards.find(prod => prod.id === id)
      res.render('products/detail', {
         product: findProduct,
      })
   },
}

module.exports = mainController
