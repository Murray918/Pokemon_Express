const express = require('express')
const myPokemon = require('./model/pokemon')
const pug = require('pug')
const port = 3000
let app = express()
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {
    	title:"Hello world!"
    })
})

// LISTENER
app.listen(port, function() {
    console.log('Ashy Ketchup Ready to Fight!: ', port);
})

module.exports = app;