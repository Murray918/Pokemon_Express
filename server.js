
const express = require('express')
const pokemon = require('./models/pokemon')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')




app.get('/pokemon', (req, res)=> {
	res.render('pages/index', {
		data: pokemon,
		page: 'list',
		cssPath: 'css/style.css'
	})
})




const PORT = 3000

app.listen(PORT, ()=> {
	console.log('Pokemon-Express running on:', PORT)
})