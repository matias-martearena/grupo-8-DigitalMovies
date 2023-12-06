function adminAuthMiddleware(req, res, next) {
    console.log('c')
    console.log(req.session.userLogged)
    console.log(res.locals.isAdmin)
    if (!req.session.userLogged || !res.locals.isAdmin) {
            return res.redirect('/')
    }
    next()
 }
 
 module.exports = adminAuthMiddleware
 