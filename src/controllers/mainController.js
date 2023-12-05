const db = require('../database/models')
const randomMovieFunction = require('../../public/scripts/randomMovie')
const { Sequelize, Op } = require('sequelize')

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

   search: (req, res) => {
      const randomTrailer = randomMovieFunction()
      const { search } = req.query

      db.Media.findAll({
         where: {
            title: {
               [Op.like]: `%${search}%`,
            },
         },
      })
         .then(function (media) {
            res.render('products/search', {
               card: media,
               trailer: randomTrailer,
            })
         })
         .catch(function (error) {
            res.status(500).send('Error interno del servidor')
         })
   },

   movies: (req, res) => {
      const randomTrailer = randomMovieFunction()
      db.Media.findAll({
         where: {
            category: 'Movie',
         },
      }).then(function (media) {
         res.render('home', {
            card: media,
            trailer: randomTrailer,
         })
      })
   },

   series: (req, res) => {
      const randomTrailer = randomMovieFunction()
      db.Media.findAll({
         where: {
            category: 'Serie',
         },
      }).then(function (media) {
         res.render('home', {
            card: media,
            trailer: randomTrailer,
         })
      })
   },

   ratingFilter: (req, res) => {
      const randomTrailer = randomMovieFunction()
      db.Media.findAll({
         order: [['rating', 'DESC']],
      }).then(function (media) {
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
