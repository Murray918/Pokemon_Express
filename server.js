const express = require('express')
const bodyParser = require('body-parser')
const pokemon = require('./models/pokemon.js')
const path = require('path')
const PORT = 3000

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// this links our server to a static public directory
app.use(express.static(path.join(__dirname, '/public')))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('pages/index.ejs', {
        component: pokemon,
        page: '../partials/list.ejs',
        cssPath: '/css/style.css'
    })
})

app.get('/pokemon/:index', (request, response) => {
    let pokedex = request.params.index
    response.render('pages/index.ejs', {
        component: pokemon[pokedex],
        page: '../partials/show.ejs',
        cssPath: '/css/style.css'
    })
})

app.get('/new', (request, response) => {
    response.render('partials/new.ejs')
})

app.post('/pokemon', (request, response) => {
    let newMon = {
        name: request.body['name']
    }
    pokemon.push(newMon)
    response.redirect('/')
})

app.get('/pokemon/:id/edit', (request, response) => {
    response.render('partials/edit.ejs')
})

app.post('/pokemon/:id', (request, response) => {
    let index = request.body.id
    let newName = request.body['name']
    console.log(index)
    response.redirect('/')
})


app.listen(PORT)
console.log(`listening on port: ${PORT}`)