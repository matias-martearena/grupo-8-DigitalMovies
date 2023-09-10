// ---------------- Require's ----------------- //
const express = require('express')
const methodOverride = require('method-override')
const path = require('path')
const mainRouter = require('./src/routes/main')
const snacksRouter = require('./src/routes/snacks')
const cardsRouter = require('./src/routes/cards')

// -------------- Express() ------------------ //
const app = express()

// -------------- Middlewares --------------- //
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))

// ------------- Template Engine ------------ //
app.use('/', mainRouter)
app.use('/snacks', snacksRouter)
app.use('/cards', cardsRouter)
app.set('view engine', 'ejs')

// ------------- PORT ----------------------- //
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Servidor en PORT:${PORT} corriendo`))
