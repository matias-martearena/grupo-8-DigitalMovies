const db = require('../database/models')

const membershipController = {
   membership: (req, res) => {
      db.Membership.findAll()
      .then((membership) => {
         res.render('products/membership', {
            product: membership,
         })
      })
   },
   membershipCreate: (req, res) => {
      res.render('products/membership-create-form')
   },
   membershipStore: (req, res) => {
      db.Membership.create({
         description: req.body.description,
         price: req.body.price,
         tier: req.body.tier,
         discount_one: req.body.discount0,
         discount_two: req.body.discount1,
         discount_three: req.body.discount2,
      })
      res.redirect('/')
   },
   membershipEdit: (req, res) => {
      const { id } = req.params
      db.Membership.findByPk(id)
      .then((prod)=>{
         res.render('products/membership-edit-form', {
            membershipToEdit: prod,
         })
      })
   },
   membershipUpdate: (req, res) => {
      db.Membership.update({
         description: req.body.description,
         price: req.body.price,
         tier: req.body.tier,
         discount_one: req.body.discount0,
         discount_two: req.body.discount1,
         discount_three: req.body.discount2,
      }, {
         where: {
            id: req.params.id
         }
      })
      
      res.redirect('/')
   },
   
   membershipDestroy: (req, res) => {
      db.Membership.destroy({
         where: {
            id: req.params.id,
         }
      })
      res.redirect('/')
   },
}

module.exports = membershipController

   


