const express = require('express')

let app = express()

app.set('view engine','ejs')

const port = 3000

pokemon = require('./models/pokemon')

app.get('/',(request,response)=>{
	response.send(pokemon)
})




app.listen(port, function(){
	console.log('Pokemon running on port', port);
})

module.exports = app;