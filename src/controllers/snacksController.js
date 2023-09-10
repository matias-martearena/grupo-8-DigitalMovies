const fs = require('fs')
const path = require('path')

const snackArray = require('../database/snackProducts.json')
const comboArray = require('../database/snackCombos.json')

const snacksFilePath = path.join(
   __dirname,
   '..',
   'database',
   'snackProducts.json'
)
const snacks = JSON.parse(fs.readFileSync(snacksFilePath, 'utf-8'))

const snacksController = {
   snacksIndex: (req, res) => {
      res.render('products/snacks', {
         snacksProducts: snackArray,
         snackCombos: comboArray,
      })
   },

   snacksCreate: (req, res) => {
      res.render('products/snacks-create-form')
   },

   snacksStore: (req, res) => {
      const newId = 'SNK' + Date.now()
      const newImgName = '/images' + req.file?.filename
      const newPrice = '$' + req.body.price
      const newProduct = {
         id: newId,
         image: newImgName,
         price: newPrice,
         description: req.body.description,
      }
      snacks.push(newProduct)
      fs.writeFileSync(snacksFilePath, JSON.stringify(snacks))
      res.render('products/snacks', {
         snacksProducts: snacks,
         snackCombos: comboArray,
      })
   },

   snacksEdit: (req, res) => {
      const { id } = req.params
      const findProduct = snacks.find(prod => prod.id === id)
      res.render('products/snacks-edit-form', { productToEdit: findProduct })
   },

   snacksUpdate: (req, res) => {
      const { id } = req.params
      const { body, file } = req
      const findProduct = snacks.findIndex(prod => prod.id === id)
      const newImgName = '/images' + req.file?.filename
      if (!body.image && file) {
         // Si el campo de formulario está vacío, pero se cargó un nuevo archivo, usa el nuevo archivo
         snacks[findProduct] = {
            id: id,
            ...body,
            image: newImgName,
         }
      } else {
         // Si el campo de formulario está vacío y no se cargó un nuevo archivo, conserva la imagen existente
         snacks[findProduct] = {
            id: id,
            ...body,
            image: snacks[findProduct].image,
         }
      }
      fs.writeFileSync(snacksFilePath, JSON.stringify(snacks))
      res.render('products/snacks', {
         snacksProducts: snacks,
         snackCombos: comboArray,
      })
   },

   snacksDestroy: (req, res) => {
      const { id } = req.params
      const newList = snacks.filter(prod => prod.id !== id)
      fs.writeFileSync(snacksFilePath, JSON.stringify(newList))
      res.render('products/snacks', {
         snacksProducts: newList,
         snackCombos: comboArray,
      })
   },
}

module.exports = snacksController
