const arrtickets = require('../database/tickets')

const showtimes = {
   showtimes: (req, res) => {
      res.render('products/showtimes/showtimes',{
         ticket: arrtickets,
      })
   },
}

module.exports = showtimes