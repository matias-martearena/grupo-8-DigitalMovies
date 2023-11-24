const db = require('../database/models')
const { validationResult } = require('express-validator')

const snacksController = {
   // Snacks page
   snacksIndex: (req, res) => {
      db.Snack.findAll().then(snacks => {
         res.render('products/snacks', {
            snacksProducts: snacks,
         })
      })
   },

   // Create a new snack
   snacksCreate: (req, res) => {
      res.render('products/snacks-create-form')
   },
   snacksStore: (req, res) => {
      const resultValidation = validationResult(req)

      if (resultValidation.errors.length > 0) {
         return res.render('products/snacks-create-form', {
            errors: resultValidation.mapped(),
            oldData: req.body,
         })
      }

      db.Snack.create({
         image: req.file.filename,
         description: req.body.description,
         price: req.body.price,
      }).then(function () {
         res.redirect('/snacks')
      })
   },

   // Edit or update a snack
   snacksEdit: (req, res) => {
      const { id } = req.params
      db.Snack.findByPk(id).then(prod => {
         res.render('products/snacks-edit-form', {
            productToEdit: prod,
         })
      })
   },
   snacksUpdate: (req, res) => {
      const resultValidation = validationResult(req)

      if (resultValidation.errors.length > 0) {
         const { id } = req.params
         db.Snack.findByPk(id).then(prod => {
            res.render('products/snacks-edit-form', {
               productToEdit: prod,
               errors: resultValidation.mapped(),
            })
         })
      }

      db.Snack.update(
         {
            image: req.file?.filename || req.body.image,
            description: req.body.description,
            price: req.body.price,
         },
         {
            where: {
               id: req.params.id,
            },
         }
      ).then(function () {
         res.redirect('/snacks')
      })
   },

   // Delete a snack
   snacksDestroy: (req, res) => {
      db.Snack.destroy({
         where: {
            id: req.params.id,
         },
      }).then(function () {
         res.redirect('/snacks')
      })
   },
}

module.exports = snacksController
