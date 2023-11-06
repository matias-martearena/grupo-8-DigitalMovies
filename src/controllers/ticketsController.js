const db = require('../database/models')

const ticketsController = {
   showtimes: (req, res) => {
      db.Showtime.findAll()
      .then((prod)=>{
         res.render('products/showtimes', {
            ticket: prod,
         })
      })
      
   },
   ticketsCreate: (req, res) => {
         res.render('products/tickets-create-form')
      },
   ticketsStore: (req, res) => {
         
         /* const newImgTicket = `/images/movies${file?.filename}` */
         db.Showtime.create({
            price: req.body.price,
            room: req.body.room,
            genre: req.body.genres,
            image: req.body.image,
            synopsis: req.body.synopsis,
            title: req.body.title,
         })
         res.redirect('/')
      },
   ticketsEdit: (req, res) => {
         const { id } = req.params
         db.Showtime.findByPk(id)
         .then((prod)=>{
         res.render('products/tickets-edit-form', {
            ticketToEdit: prod,
         })
      })
      },
      
   ticketsUpdate: (req, res) => {
      const { id } = req.params
      db.Showtime.update({
         price: req.body.price,
         room: req.body.room,
         genre: req.body.genres,
         image: req.body.image,
         synopsis: req.body.synopsis,
         title: req.body.title,
      }, {
         where: {
            id: req.params.id
         }
      })

      res.redirect('/')
   },
   ticketsDestroy: (req, res) => {
      db.Showtime.destroy({
         where: {
            id: req.params.id,
         }
      })
      res.redirect('/')
   },
}

module.exports = ticketsController





