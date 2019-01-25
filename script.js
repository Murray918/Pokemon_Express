/*

$(.delete).click(function() {



})
*/

function horse(id) {
	var request = new XMLHttpRequest();
	request.open('DELETE', '/pokemon/deleter/' + id, /* async = */ false);
	request.send();
	request.done(window.location.href="/pokemon");
	//window.location.href="/pokemon"; 
	//console.log('response head: ' + request.responseText.substring(0, 15) + '...');
}