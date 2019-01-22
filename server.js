const express = require('express')
const app = express()
const pokemon = require('./pokemon.js')


app.set('view', './view')
app.set('view engine', 'ejs')













app.get('/',(request,response)=>{
	response.send(pokemon[0].img)
})


app.listen(3000)