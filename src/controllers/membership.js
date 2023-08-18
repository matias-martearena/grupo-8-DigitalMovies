const arrMembership = require('../database/membership')

const membership = {
   membership: (req, res) => {
      res.render('products/membership/membership', {
         arrMembership,
      })
   },
}

module.exports = membership
