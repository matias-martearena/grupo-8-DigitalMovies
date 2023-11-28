const db = require('../database/models')
const { validationResult } = require('express-validator')

const membershipController = {
   //Membership product page
   membership: (req, res) => {
      db.Membership.findAll().then(membership => {
         res.render('products/membership', {
            product: membership,
         })
      })
   },

   // Create a new membreship
   membershipCreate: (req, res) => {
      res.render('products/membership-create-form')
   },
   membershipStore: (req, res) => {
      const resultValidation = validationResult(req)

      if (resultValidation.errors.length > 0) {
         console.log(req.body)
         return res.render('products/membership-create-form', {
            errors: resultValidation.mapped(),
            oldData: req.body,
         })
      }

      db.Membership.create({
         description: req.body.description,
         discount_one: req.body.discount0,
         discount_two: req.body.discount1,
         discount_three: req.body.discount2,
         price: req.body.price,
         tier: req.body.tier,
      }).then(function () {
         res.redirect('/membership')
      })
   },

   // Edit or update a membership
   membershipEdit: (req, res) => {
      const { id } = req.params
      db.Membership.findByPk(id).then(prod => {
         res.render('products/membership-edit-form', {
            membershipToEdit: prod,
         })
      })
   },
   membershipUpdate: (req, res) => {
      const resultValidation = validationResult(req)

      if (resultValidation.errors.length > 0) {
         const { id } = req.params
         db.Membership.findByPk(id).then(prod => {
            res.render('products/membership-edit-form', {
               membershipToEdit: prod,
               errors: resultValidation.mapped(),
            })
         })
      }

      db.Membership.update(
         {
            description: req.body.description,
            discount_one: req.body.discount0,
            discount_two: req.body.discount1,
            discount_three: req.body.discount2,
            price: req.body.price,
            tier: req.body.tier,
         },
         {
            where: {
               id: req.params.id,
            },
         }
      ).then(function () {
         res.redirect('/membership')
      })
   },

   // Delete a membership
   membershipDestroy: (req, res) => {
      db.Membership.destroy({
         where: {
            id: req.params.id,
         },
      }).then(function () {
         res.redirect('/membership')
      })
   },
}

module.exports = membershipController
