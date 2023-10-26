// ---------------- Require's ----------------- //
const express = require('express')
const session = require('express-session')
const cookies = require('cookie-parser')
const methodOverride = require('method-override')
const path = require('node:path')

// --------------- Routes require -------------- //
const mainRouter = require('./src/routes/main')
const snacksRouter = require('./src/routes/snacks')
const cardsRouter = require('./src/routes/cards')
const membershipRouter = require('./src/routes/membership')
const ticketsRouter = require('./src/routes/tickets')
const usersRouter = require('./src/routes/user')

// -------------- Middlewares require --------------- //
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware')

// -------------- Express() ------------------ //
const app = express()

// -------------- Middlewares --------------- //
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(
   session({
      secret: 'Correct session',
      resave: false,
      saveUninitialized: false,
   })
)
app.use(cookies())
app.use(userLoggedMiddleware)

// ------------- Template Engine ------------ //
app.use('/', mainRouter)
app.use('/user', usersRouter)
app.use('/snacks', snacksRouter)
app.use('/cards', cardsRouter)
app.use('/membership', membershipRouter)
app.use('/tickets', ticketsRouter)
app.set('view engine', 'ejs')

// ------------- PORT ----------------------- //
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Servidor en PORT:${PORT} corriendo`))
