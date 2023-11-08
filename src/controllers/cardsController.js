const db = require('../database/models')


const cardsController = {
   cardsCreate: (req, res) => {
      res.render('products/cards-create-form')
   },

   cardsStore: (req, res) => {
      db.Media.create({
         genre: req.body.genres,
         image: req.body.image,
         link: req.body.link,
         rating: req.body.rating,
         synopsis: req.body.synopsis,
         title: req.body.title,
         price: req.body.price,
      })
      res.redirect('/')
   },

   cardsEdit: (req, res) => {
      const { id } = req.params
      db.Media.findByPk(id)
      .then((prod)=>{
         res.render('products/cards-edit-form', {
            cardToEdit: prod,
         })
      })
   },

   cardsUpdate: (req, res) => {
      db.Media.update({
         genre: req.body.genres,
         image: req.body.image,
         link: req.body.link,
         rating: req.body.rating,
         synopsis: req.body.synopsis,
         title: req.body.title,
         price: req.body.category,
      }, {
         where: {
            id: req.params.id
         }
      })

      res.redirect('/')
   },

   cardsDestroy: (req, res) => {
      db.Media.destroy({
         where: {
            id: req.params.id,
         }
      })
      res.redirect('/')
   },
}

module.exports = cardsController
