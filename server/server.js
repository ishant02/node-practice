var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose-db.js');
var {Todo}= require('./models/todo.js');
var {User}= require('./models/users.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
	var todo = new Todo({
		text:req.body.text,
		desc:req.body.desc
	});
	
	todo.save().then( (doc) =>{		
		res.send(doc);
	}, (err)=>{
		if(err){			
			res.status(400).send(err);
		}
	});
});



app.post('/users',(req, res) =>{	
	var user =new User({
		fname:req.body.fname,
		email:req.body.email
	});
	
	user.save().then((doc) =>{
		res.send(doc);
	}, (err) => {
		if(err){
			res.send(err);
		}
	})
});


app.get('/todos', (req, res) =>{
	Todo.find().then((todos) => {
		res.send(todos);
	}, (err) => {
		res.send(err);
	})
});

app.listen(3000, () =>{
	console.log("Server started on port 3000");
});

module.exports ={app};