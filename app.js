const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))

const port = process.env.PORT || 3001;
app.listen( port, () => console.log(`Server up:  PORT:${port}`) );

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/sign-in/sign-in.html'))
})

app.get('/sign-in', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/sign-in/sign-in.html'))
})

app.post('/sign-in',  (req,  res) =>{
   res.redirect('/');
})

app.get('/login', (req, res) => {
   res.sendFile(path.resolve(__dirname, './views/login/login.html'))
})

app.post('/login',  (req,  res) =>{
   res.redirect('/');
})