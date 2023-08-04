const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000
const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))
app.listen(PORT, () => console.log(`Servidor en PORT:${PORT} corriendo`))
app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/home-page/home.html'))
})
app.get('/login', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/login/login.html'))
})
