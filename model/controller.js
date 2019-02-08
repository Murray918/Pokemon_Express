const express = require('express')
const myPokemon = require('./pokemon')
const router = express.Router()


router.get('/', (req, res)=>{
	res.render('index',{
    	myTeam:myPokemon
    })
})

router.get('/show/:id', (req, res)=>{
	res.render('show', {
    	myTeam:myPokemon[req.params.id],
    	path:'show'
    })
})

router.post('/user_create', (req, res, next)=>{
	let newPokemon = {name:req.body.createPokemon}
	myPokemon.push(newPokemon)
	console.log("here is your new " + newPokemon.name)
	res.redirect('/')
})

router.put('/show/:id', (req, res, next)=>{
	myPokemon[0].name = {name:req.body.newName}
	console.log("here is your new " + myPokemon.name)
	res.redirect('/show/1')
})

router.get('/', (req, res)=>{
	
})


router.delete('/', (req, res)=>{
	
})


module.exports = router