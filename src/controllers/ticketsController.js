const fs = require('fs')
const path = require('path')

const arrtickets = require('../database/tickets.json')

const ticketsController = {
   showtimes: (req, res) => {
      res.render('products/showtimes', {
         ticket: arrtickets,
      })
   },
}

module.exports = ticketsController
