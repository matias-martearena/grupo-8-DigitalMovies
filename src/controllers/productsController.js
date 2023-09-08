const arrMembership = require('../database/membership.json')
const arrtickets = require('../database/tickets.json')
const snackArray = require('../database/snackProducts.json')
const comboArray = require('../database/snackCombos.json')

const productsController = {
   membership: (req, res) => {
      res.render('products/membership', {
         arrMembership,
      })
   },
   showtimes: (req, res) => {
      res.render('products/showtimes', {
         ticket: arrtickets,
      })
   },
   snacks: (req, res) => {
      res.render('products/snacks', {
         snacksProducts: snackArray,
         snackCombos: comboArray,
      })
   },
}

module.exports = productsController
