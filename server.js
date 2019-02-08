const express = require('express')
const app = express()
const myPokemon = require('./model/pokemon')
const router = require ('./model/controller')
const pug = require('pug')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = 3000


app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: true}), morgan('dev'))
app.use(express.static(path.join(__dirname + '/static')))

app.use('/', router)


// LISTENER
app.listen(port, function() {
    console.log('Ashy Ketchup Ready to Fight!: ', port);
})

module.exports = app;