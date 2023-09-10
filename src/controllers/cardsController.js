const fs = require('fs')
const path = require('path')

const cardsFilePath = path.join(__dirname, '..', 'database', 'cards.json')
const cards = JSON.parse(fs.readFileSync(cardsFilePath, 'utf-8'))

const cardsController = {
   cardsCreate: (req, res) => {
      res.render('products/cards-create-form')
   },

   cardsStore: (req, res) => {
      const { body, file } = req

      const newIdCard = `MSC${Date.now()}`
      const newImgCard = `/images/movies${file?.filename}`

      const newCard = {
         id: newIdCard,
         image: newImgCard,
         ...body,
      }
      cards.push(newCard)

      fs.writeFileSync(cardsFilePath, JSON.stringify(cards))

      res.redirect('/')
   },

   cardsEdit: (req, res) => {
      const { id } = req.params
      const findCard = cards.find(prod => prod.id === id)
      res.render('products/cards-edit-form', {
         cardToEdit: findCard,
      })
   },

   cardsUpdate: (req, res) => {
      const { id } = req.params
      const { body, file } = req

      const findCard = cards.findIndex(prod => prod.id === id)
      const newImgName = `/images/movies${file?.filename}`

      if (!body.image && file) {
         cards[findCard] = {
            id: id,
            ...body,
            image: newImgName,
         }
      } else {
         cards[findCard] = {
            id: id,
            ...body,
            image: cards[findCard].image,
         }
      }

      fs.writeFileSync(cardsFilePath, JSON.stringify(cards))

      res.redirect('/')
   },

   cardsDestroy: (req, res) => {
      const { id } = req.params
      const newCardList = cards.filter(prod => prod.id !== id)

      fs.writeFileSync(cardsFilePath, JSON.stringify(newCardList))

      res.redirect('/')
   },
}

module.exports = cardsController
