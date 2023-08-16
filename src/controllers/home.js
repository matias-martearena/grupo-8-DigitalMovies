const arrCards = require('../database/cards')

const home = {
   home: (req, res) => {
      res.render('home/home', {
         card: arrCards,
      })
   },
}

module.exports = home
