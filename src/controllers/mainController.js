const db = require('../database/models')
const randomMovieFunction = require('../../public/scripts/randomMovie')

const mainController = {
   home: (req, res) => {
      const randomTrailer = randomMovieFunction()
      db.Media.findAll().then(function (media) {
         res.render('home', {
            card: media,
            trailer: randomTrailer,
         })
      })
   },

   detail: (req, res) => {
      const { id } = req.params
      db.Media.findByPk(id).then(media => {
         res.render('products/detail', {
            product: media,
         })
      })
   },

   editor: (req, res) => {
      Promise.all([
         db.Media.findAll(),
         db.Membership.findAll(),
         db.Snack.findAll(),
         db.Showtime.findAll(),
      ]).then(function ([medias, memberships, snacks, showtimes]) {
         res.render('products/manageProducts', {
            media: medias,
            membership: memberships,
            snack: snacks,
            showtime: showtimes,
         })
      })
   },
}

module.exports = mainController
