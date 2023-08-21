const snackArray = require('../database/snackProducts.js')
const comboArray = require('../database/snackCombos.js')

const snacks = {
    snacks: (req, res) => {
       res.render('products/snacks/snacks', {
         snacksProducts: snackArray,
         snackCombos: comboArray,
      })
    },
 }
 
 module.exports = snacks