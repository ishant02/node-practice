const {MongoClient,ObjectID}= require('mongodb');


var url="mongodb://localhost:27017/TodoApp";

MongoClient.connect(url,{useNewUrlParser:true},(err, client) =>{
	if(err){
		return console.log("Unable to connect with DB", err);
	}
	console.log("Connected with DB");
	var db = client.db('TodoApp');
	
	/* db.collection('Todos').findOneAndUpdate({
		_id :new ObjectID("5b7d5501bffe17137073af36") 
	},{
		$set:{
			completed:false
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	}); */
	db.collection('Users').findOneAndUpdate({
		_id:new ObjectID("5b7bece8bffe17137073af0f")
	},{
		$set:{
			name:"Ishant"
		},
		$inc:{
			age:-2
		}
	}).then((res)=>{
		console.log(res);
	})
	client.close();
});