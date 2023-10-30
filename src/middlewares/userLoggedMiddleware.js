const User = require('../models/User')

function userLoggedMiddleware(req, res, next) {
   res.locals.isLogged = false

   let mailInCookie = req.cookies.userMail
   let userFromCookie = User.findByField('mail', mailInCookie)

   console.log(userFromCookie)

   if (userFromCookie) {
      req.session.userLogged = userFromCookie
   }

   if (req.session && req.session.userLogged) {
      res.locals.isLogged = true
      res.locals.userLogged = req.session.userLogged
   }

   next()
}

module.exports = userLoggedMiddleware
