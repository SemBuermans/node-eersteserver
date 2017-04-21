var http = require('http');

function onRequest(request, response){
	console.log('er was een request');
	response.writeHead(200,{'Content-Type': 'application/json'});
	
	var json = JSON.stringify({
		ikwil : 'dode neger',
		watwiliknogliever: 'nog meer negers',
		ikheb: [ 'holstront', 'poepscheet', 1488],
		mijnobject: {
			mijnlabel: 'mijntekst',
			getal: 4
		}
	})
	response.write(json);
	response.end();
}

http.createServer(onRequest).listen(process.env.PORT || 3000);

console.log('De server luistert op poort 3000');