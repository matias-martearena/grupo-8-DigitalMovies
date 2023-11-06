const db = require('../database/models')

const snacksController = {
   snacksIndex: (req, res) => {
      db.Snack.findAll()
      .then((snacks) => {
         res.render('products/snacks', {
            snacksProducts: snacks,
         })
      })
   },

   snacksCreate: (req, res) => {
      res.render('products/snacks-create-form')
   },

   snacksStore: (req, res) => {
      db.Snack.create({
         image: req.body.image,
         description: req.body.description,
         price: req.body.price,
      })
      res.redirect('/')
   },

   snacksEdit: (req, res) => {
      const { id } = req.params
      db.Snack.findByPk(id)
      .then((prod)=>{
         res.render('products/snacks-edit-form', {
            productToEdit: prod,
         })
      })
   },

   snacksUpdate: (req, res) => {
      db.Snack.update({
         image: req.body.image,
         description: req.body.description,
         price: req.body.price,
      }, {
         where: {
            id: req.params.id
         }
      })

      res.redirect('/')
   },

   snacksDestroy: (req, res) => {
      db.Snack.destroy({
         where: {
            id: req.params.id,
         }
      })
      res.redirect('/')
   },
}

module.exports = snacksController
