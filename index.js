const express = require('express');
const app = express()
app.set('view engine', 'ejs')















const port = 3000
app.listen(port, function(){
	console.log('gotta catch em all on port: ', port);
})
module.exports = app;