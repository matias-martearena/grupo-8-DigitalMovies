const fs = require('fs')
const path = require('path')

const arrMembership = require('../database/membership.json')

const membershipController = {
   membership: (req, res) => {
      res.render('products/membership', {
         arrMembership,
      })
   },
}

module.exports = membershipController
