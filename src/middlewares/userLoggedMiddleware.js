const db = require('../database/models')

function userLoggedMiddleware(req, res, next) {
   res.locals.isLogged = false
   
   let mailInCookie = req.cookies.userMail


   if(mailInCookie != undefined){
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
      })
   }
   next()
}

module.exports = userLoggedMiddleware
