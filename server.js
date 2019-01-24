const express = require('express')
const myPokemon = require('./model/pokemon')
const pug = require('pug')
const path = require('path')
const port = 3000
let app = express()


app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname + '/static')))

app.get('/', (req, res) => {
    res.render('index', {
    	myTeam:myPokemon
    })
})
app.get('/show/:id', (req, res) => {
    console.log(myPokemon[req.params.id])
    res.render('show', {
    	myTeam:myPokemon[req.params.id],
    	path:'show'
    })
})
// LISTENER
app.listen(port, function() {
    console.log('Ashy Ketchup Ready to Fight!: ', port);
})

module.exports = app;