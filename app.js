const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.resolve(__dirname, './public')
const mainRouter = require('./src/routes/main')
const loginRouter = require('./src/routes/login')
const snacksPage = require('./src/routes/snacks')

app.use(express.static(publicPath))

app.use('/', mainRouter)
app.use('/login', loginRouter)
app.use('/snacks', snacksPage)
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Servidor en PORT:${PORT} corriendo`))
