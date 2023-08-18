const trailerVideos = require('../database/trailers')

const login = {
   login: (req, res) => {
      res.render('users/login/login', {
         trailers: trailerVideos,
      })
   },
}

module.exports = login
