const MongoClient = require('mongodb').MongoClient;

//var obj = new ObjectID();
//console.log(obj);
var users = {name:"Ishant",age:25};
var {name}=users;

var url="mongodb://localhost:27017/TodoApp"
MongoClient.connect(url, { useNewUrlParser: true },(err, client) => {
	if(err){
		return console.log("Unable to connect with MongoDB", err);
	}
	console.log("Connected with MongoDB");
	const db = client.db('TodoApp');
	
	/* db.collection('Todos').insertOne({
		text:"Something to do",
		completed:true		
	}, (err, res)=> {
		if(err){
			return console.log("Unable to insert new Todo");
		}
		//console.log(res);
		console.log(JSON.stringify(res.ops, undefined, 2));
	}); */
	
	/* db.collection('Users').insertOne({
		name: "Ishant",
		age:25,
		location:"Chandigarh"
	}, (err, res) => {
		if(err){
			return console.log("Unable to insert new record in users collection");
		}		
		console.log(JSON.stringify(res.ops, undefined,2));
	}); */
	
	client.close();	
});