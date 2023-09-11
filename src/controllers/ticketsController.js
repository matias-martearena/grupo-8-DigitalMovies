const fs = require('fs')
const path = require('path')

const ticketsFilePath = path.join(__dirname, '..', 'database', 'tickets.json')
const arrayTickets = JSON.parse(fs.readFileSync(ticketsFilePath, 'utf-8'))

const ticketsController = {
   showtimes: (req, res) => {
      res.render('products/showtimes', {
         ticket: arrayTickets,
      })
   },
   ticketsCreate: (req, res) => {
         res.render('products/tickets-create-form')
      },
   ticketsStore: (req, res) => {
         const { body, file } = req
   
         const newIdTicket = `TCK${Date.now()}`
         const newImgTicket = `/images/movies${file?.filename}`
   
         const newTicket = {
            id: newIdTicket,
            image: newImgTicket,
            ...body,
         }
         arrayTickets.push(newTicket)
   
         fs.writeFileSync(ticketsFilePath, JSON.stringify(arrayTickets))
   
         res.redirect('/')
      },
   ticketsEdit: (req, res) => {
         const { id } = req.params
         const findTicket = arrayTickets.find(prod => prod.id === id)
         res.render('products/tickets-edit-form', {
            ticketToEdit: findTicket,
         })
      },
      
   ticketsUpdate: (req, res) => {
      const { id } = req.params
      const { body, file } = req

      const findTicket = arrayTickets.findIndex(prod => prod.id === id)
      const newImgName = `/images/movies${file?.filename}`

      if (!body.image && file) {
         arrayTickets[findTicket] = {
            id: id,
            ...body,
            image: newImgName,
         }
      } else {
         arrayTickets[findTicket] = {
            id: id,
            ...body,
            image: arrayTickets[findTicket].image,
         }
      }

      fs.writeFileSync(ticketsFilePath, JSON.stringify(arrayTickets))

      res.redirect('/')
   },
   ticketsDestroy: (req, res) => {
      const { id } = req.params
      const newCardList = arrayTickets.filter(prod => prod.id !== id)

      fs.writeFileSync(ticketsFilePath, JSON.stringify(newCardList))

      res.redirect('/')
   },
}

module.exports = ticketsController





