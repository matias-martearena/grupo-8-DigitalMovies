const db = require('../database/models')
const randomMobileImg = require('../../public/scripts/randomMobileImg')
const randomCardClass = require('../../public/scripts/cardRandomClasses')
const randomDesktopImg = require('../../public/scripts/randomDesktopImg')
const { Op } = require('sequelize')

const mainController = {
   home: async (req, res) => {
      const getMobileImg = randomMobileImg()
      const getDesktopImg = randomDesktopImg()
      const cardClass = []
      const media = await db.Media.findAll()

      for (let i = 0; i < media.length; i++) {
         if (media[i].dataValues.id) {
            cardClass.push(randomCardClass())
         }
      }

      res.render('home', {
         card: media,
         mobileImg: getMobileImg,
         desktopImg: getDesktopImg,
         cardClass,
      })
   },

   search: async (req, res) => {
      const getMobileImg = randomMobileImg()
      const getDesktopImg = randomDesktopImg()
      const cardClass = []
      const { search } = req.query

      const media = await db.Media.findAll({
         where: {
            title: {
               [Op.like]: `%${search}%`,
            },
         },
      })

      for (let i = 0; i < media.length; i++) {
         if (media[i].dataValues.id) {
            cardClass.push(randomCardClass())
         }
      }

      res.render('products/search', {
         card: media,
         mobileImg: getMobileImg,
         desktopImg: getDesktopImg,
         cardClass,
      })
   },

   movies: async (req, res) => {
      const getMobileImg = randomMobileImg()
      const getDesktopImg = randomDesktopImg()
      const cardClass = []

      const media = await db.Media.findAll({
         where: {
            category: 'Movie',
         },
      })

      for (let i = 0; i < media.length; i++) {
         if (media[i].dataValues.id) {
            cardClass.push(randomCardClass())
         }
      }

      res.render('home', {
         card: media,
         mobileImg: getMobileImg,
         desktopImg: getDesktopImg,
         cardClass,
      })
   },

   series: async (req, res) => {
      const getMobileImg = randomMobileImg()
      const getDesktopImg = randomDesktopImg()
      const cardClass = []

      const media = await db.Media.findAll({
         where: {
            category: 'Serie',
         },
      })

      for (let i = 0; i < media.length; i++) {
         if (media[i].dataValues.id) {
            cardClass.push(randomCardClass())
         }
      }

      res.render('home', {
         card: media,
         mobileImg: getMobileImg,
         desktopImg: getDesktopImg,
         cardClass,
      })
   },

   ratingFilter: async (req, res) => {
      const getMobileImg = randomMobileImg()
      const getDesktopImg = randomDesktopImg()
      const cardClass = []

      const media = await db.Media.findAll({
         order: [['rating', 'DESC']],
      })

      for (let i = 0; i < media.length; i++) {
         if (media[i].dataValues.id) {
            cardClass.push(randomCardClass())
         }
      }

      res.render('home', {
         card: media,
         mobileImg: getMobileImg,
         desktopImg: getDesktopImg,
         cardClass,
      })
   },

   detail: async (req, res) => {
      const { id } = req.params
      const media = await db.Media.findByPk(id)

      res.render('products/detail', {
         product: media,
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
