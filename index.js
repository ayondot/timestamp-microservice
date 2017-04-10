var express = require('express');
var app = express();

app.get('/:date', function(req, res){
	var unixdate, naturaldate;
	var entered_date = req.params.date;
	if(!isNaN(+entered_date)){
		unixdate = entered_date; 
		naturaldate = new Date(entered_date * 1000).toDateString();
	}else{
		unixdate = new Date(entered_date).valueOf() / 1000;
		naturaldate = entered_date; 
	}
	res.json({ unix: unixdate, natural: naturaldate });
	// console.log(req.connection.remoteAddress);
	// res.end(JSON.stringify(req.headers, null, '\t'));
});

app.listen(8080, function(){
	console.log('Listening on port 8080');
})