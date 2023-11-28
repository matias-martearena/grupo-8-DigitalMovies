const db = require('../database/models')
const { validationResult } = require('express-validator')

const ticketsController = {
   // Tickets page
   showtimes: (req, res) => {
      db.Showtime.findAll().then(prod => {
         res.render('products/showtimes', {
            ticket: prod,
         })
      })
   },

   // Create a new ticket
   ticketsCreate: (req, res) => {
      res.render('products/tickets-create-form')
   },
   ticketsStore: (req, res) => {
      const resultValidation = validationResult(req)

      if (resultValidation.errors.length > 0) {
         return res.render('products/tickets-create-form', {
            errors: resultValidation.mapped(),
            oldData: req.body,
         })
      }

      db.Showtime.create({
         price: req.body.price,
         room: req.body.room,
         genre: req.body.genre,
         image: req.file.filename,
         synopsis: req.body.synopsis,
         title: req.body.title,
      }).then(function () {
         res.redirect('/tickets')
      })
   },

   // Edit or update a ticket
   ticketsEdit: (req, res) => {
      const { id } = req.params
      db.Showtime.findByPk(id).then(prod => {
         res.render('products/tickets-edit-form', {
            ticketToEdit: prod,
         })
      })
   },
   ticketsUpdate: (req, res) => {
      const resultValidation = validationResult(req)

      if (resultValidation.errors.length > 0) {
         const { id } = req.params
         db.Showtime.findByPk(id).then(prod => {
            res.render('products/tickets-edit-form', {
               ticketToEdit: prod,
               errors: resultValidation.mapped(),
            })
         })
      }

      db.Showtime.update(
         {
            price: req.body.price,
            room: req.body.room,
            genre: req.body.genre,
            image: req.file?.filename || req.body.image,
            synopsis: req.body.synopsis,
            title: req.body.title,
         },
         {
            where: {
               id: req.params.id,
            },
         }
      ).then(function () {
         res.redirect('/tickets')
      })
   },

   // Delete a ticket
   ticketsDestroy: (req, res) => {
      db.Showtime.destroy({
         where: {
            id: req.params.id,
         },
      }).then(function () {
         res.redirect('/tickets')
      })
   },
}

module.exports = ticketsController
