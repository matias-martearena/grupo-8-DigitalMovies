const fs = require('fs')
const path = require('path')

const arrCards = require('../database/cards.json')

const cardsFilePath = path.join(__dirname, '..', 'database', 'cards.json')
const cards = JSON.parse(fs.readFileSync(cardsFilePath, 'utf-8'))

const cardsController = {
   cardsCreate: (req, res) => {
      res.render('products/cards-create-form')
   },
}

module.exports = cardsController
