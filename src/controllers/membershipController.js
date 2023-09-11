const fs = require('fs')
const path = require('path')

const membershipFilePath = path.join(__dirname, '..', 'database', 'membership.json')
const arrMembership = JSON.parse(fs.readFileSync(membershipFilePath, 'utf-8'))


const membershipController = {
   membership: (req, res) => {
      res.render('products/membership', {
         arrMembership,
      })
   },
   membershipCreate: (req, res) => {
      res.render('products/membership-create-form')
   },
   membershipStore: (req, res) => {
      const { body, file } = req

      const newIdMembership = `MBS${Date.now()}`

      const newMembership = {
         id: newIdMembership,
         ...body,
      }
      arrMembership.push(newMembership)

      fs.writeFileSync(membershipFilePath, JSON.stringify(arrMembership))

      res.redirect('/')
   },
   membershipEdit: (req, res) => {
      const { id } = req.params
      const findMembership = arrMembership.find(prod => prod.id === id)
      res.render('products/membership-edit-form', {
         membershipToEdit: findMembership,
      })
   },
   membershipUpdate: (req, res) => {
      const { id } = req.params
      const { body, file } = req

      const findMembership = arrMembership.findIndex(prod => prod.id === id)

      arrMembership[findMembership] = {
            id: id,
            ...body,
      }

      fs.writeFileSync(membershipFilePath, JSON.stringify(arrMembership))

      res.redirect('/')
   },
   
   membershipDestroy: (req, res) => {
      const { id } = req.params
      const newMembershipList = arrMembership.filter(prod => prod.id !== id)

      fs.writeFileSync(membershipFilePath, JSON.stringify(newMembershipList))

      res.redirect('/')
   },
}

module.exports = membershipController

   


