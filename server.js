
const express = require('express');
const app = express();



const PORT = 3000;


app.on('end', () => {
	console.log('My server is set up and running')
})

app.set('view engine', 'ejs')



app.listen(PORT)