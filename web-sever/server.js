const express= require('express');
const hbs= require('hbs');

var app = express();
app.set('View Engine','hbs');
app.use(express.static(__dirname + '/html'));

app.get('/', (req, res) => {
	//res.send("<h1>Hello Express!</h1>");	
	/* res.send({
		name:"Ishant",
		likes:[
			'Gym',
			'Cricket'
		]
	}) */
	
	res.render('home.hbs',{
		welcomeMsg:"Welcome to website",
		pageTitle:"Home Page",
		currentYear:new Date().getFullYear()
	})
});
// About page
app.get('/about', (req, res) => {
	//res.send("About page");
	res.render('about.hbs', {
		pageTitle:"About Page",
		currentYear:new Date().getFullYear()
	});
});
// Bad request
app.get('/bad',(req, res) => {
	res.send({
		errorMsg:"Unable to handle request"
	})
});

app.listen(3000,  () => {
	console.log("Server is up on port 3000");
});