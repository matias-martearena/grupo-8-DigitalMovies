const db = require('../database/models')

function userLoggedMiddleware(req, res, next) {
   res.locals.isLogged = false
   
   let mailInCookie = ''

   if(req.cookies.userMail != undefined){
      mailInCookie = req.cookies.userMail
   }
   db.User.findOne({
      where: {
         email: mailInCookie
      }
   })
   .then(userFromCookie => {
      console.log(userFromCookie)

      if (userFromCookie) {
         req.session.userLogged = userFromCookie
      }
   
      if (req.session && req.session.userLogged) {
         res.locals.isLogged = true
         res.locals.userLogged = req.session.userLogged
      }
      next()
   })
}

module.exports = userLoggedMiddleware
