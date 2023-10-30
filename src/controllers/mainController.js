
const db = require('../database/models')

const mainController = {
   home: (req, res) => {
      db.Medias.findAll()
         .then(function(media){
            res.render('home', {
               card: media,
            })
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
