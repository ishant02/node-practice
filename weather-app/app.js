const request = require('request');

request( {
		url:'https://maps.googleapis.com/maps/api/geocode/json?address=Gh%2034%20panchkula',
		json:true
	} ,(error, response, body) => {
		console.log(JSON.stringify(body, undefined,2));
});