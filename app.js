const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.resolve(__dirname, './public')
const mainRouter = require('./src/routes/main')

app.use(express.static(publicPath))

app.use('/', mainRouter)
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Servidor en PORT:${PORT} corriendo`))
