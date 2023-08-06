const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/home/home.html'))
})

app.get('/car', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/cart/cart.html'))
})

app.get('/login', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/login/login.html'))
})

app.get('/membership', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/membership/membership.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Servidor en PORT:${PORT} corriendo`))

