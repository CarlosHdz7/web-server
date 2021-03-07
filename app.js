const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.send('Hello World')
})
 
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo')
})

app.get('/*', (req, res) => {
    res.send('404 page not found')
})

app.listen(8080)