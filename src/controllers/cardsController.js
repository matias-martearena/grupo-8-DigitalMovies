const db = require('../database/models')
const { validationResult } = require('express-validator')

const cardsController = {
   // Create a new media card
   cardsCreate: (req, res) => {
      res.render('products/cards-create-form')
   },
   cardsStore: (req, res) => {
      const resultValidation = validationResult(req)

      if (resultValidation.errors.length > 0) {
         return res.render('products/cards-create-form', {
            errors: resultValidation.mapped(),
            oldData: req.body,
         })
      }

      db.Media.create({
         genre: req.body.genres,
         image: req.file.filename,
         link: req.body.link,
         rating: req.body.rating,
         synopsis: req.body.synopsis,
         title: req.body.title,
         price: req.body.price,
         category: req.body.category,
      }).then(function () {
         res.redirect('/')
      })
   },

   // Edit or update a media card
   cardsEdit: (req, res) => {
      const { id } = req.params
      db.Media.findByPk(id).then(prod => {
         res.render('products/cards-edit-form', {
            cardToEdit: prod,
         })
      })
   },
   cardsUpdate: (req, res) => {
      const resultValidation = validationResult(req)

      if (resultValidation.errors.length > 0) {
         const { id } = req.params
         db.Media.findByPk(id).then(prod => {
            res.render('products/cards-edit-form', {
               cardToEdit: prod,
               errors: resultValidation.mapped(),
            })
         })
      }

      db.Media.update(
         {
            genre: req.body.genres,
            image: req.file?.filename || req.body.image,
            link: req.body.link,
            rating: req.body.rating,
            synopsis: req.body.synopsis,
            title: req.body.title,
            price: req.body.price,
            category: req.body.category,
         },
         {
            where: {
               id: req.params.id,
            },
         }
      ).then(function () {
         res.redirect('/')
      })
   },

   // Delete a media card
   cardsDestroy: (req, res) => {
      db.Media.destroy({
         where: {
            id: req.params.id,
         },
      }).then(function () {
         res.redirect('/')
      })
   },
}

module.exports = cardsController
