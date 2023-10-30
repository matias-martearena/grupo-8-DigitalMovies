const fs = require('node:fs')
const path = require('node:path')

const User = {
   fileName: path.join(__dirname, '..', 'database', 'users.json'),

   getData: function () {
      return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
   },

   generateId: function () {
      const newId = `user_${Date.now()}`
      return newId
   },

   findAll: function () {
      return this.getData()
   },

   findByPk: function (id) {
      let allUsers = this.findAll()
      let userFound = allUsers.find(user => user.id === id)
      return userFound
   },

   // Busca a un usuario por un campo especifico, el primer parametro es la columna del dato a buscar ej: email
   // y el segundo parametro es el valor del dato de dicha columna ej: 'hola@gmail.com'
   // te retornara el usuario con todos sus datos
   findByField: function (field, text) {
      let allUsers = this.findAll()
      let userFound = allUsers.find(user => user[field] === text)
      return userFound
   },

   create: function (userData) {
      let allUsers = this.findAll()
      let newUser = {
         id: this.generateId(),
         ...userData,
      }

      allUsers.push(newUser)
      fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '))
      return newUser
   },

   delete: function (id) {
      let allUsers = this.findAll()
      let finalUsers = allUsers.filter(user => user.id !== id)
      fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '))
      return true
   },
}

module.exports = User
