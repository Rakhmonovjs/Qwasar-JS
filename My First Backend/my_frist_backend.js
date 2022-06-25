const express = require('express')
const app = express()



const auth = require('express-basic-auth');

app.get('/protected', auth({
    users: {"admin": "admin"},
    challenge: true,
    unauthorizedResponse: "401 Not authorized"
}),
 (req, res) => {
    res.send('Welcome, authenticated client')
  })



app.get('/', (req, res) => {
    let arr = ['Air For English Horn', 'Alice Blue Gown', 'All Alone', 'All By Myself', 'All I Do Is Dream of You']
    res.send(arr[Math.floor(Math.random() * arr.length)])
})
app.get('/birth_date', (req, res) => {
  res.send('December 12, 1915')
})
app.get('/birth_city', (req, res) => {
  res.send('Hoboken, HJ')
})
app.get('/wives', (req, res) => {
    res.send('Barbara Sinatra, Ava Gardner, Mia Farrow, Nancy Sinatra')
})
app.get('/picture', (req, res) => {
  res.redirect("https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg")
})
app.get('/public', (req, res) => {
    res.send('Everybody can see this page')
})
app.get('/protected', auth, (req, res) => {
    res.send('Welcome, authenticated client')
})
app.listen(8080);













