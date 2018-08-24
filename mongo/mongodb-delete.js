const MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/TodoApp";
MongoClient.connect(url,{useNewUrlParser: true}, (err, client) =>{
	if(err){
		return console.log("Not connected with DB",err);
	}
	
	var db= client.db("TodoApp");
	
	//deleteMany
	/* db.collection('Todos').deleteMany({text:"Eat Lunch"}).then((res)=>{
		console.log("Result:", res);
	},(err)=>{
		console.log("Some error",err);
	}); */
	
	//deleteOne
	/* db.collection('Todos').deleteOne({text:"Eat Lunch"}).then((res)=>{
		console.log("Result:", res);
	},(err)=>{
		console.log("Some error",err);
	}); */
	//findOneAndDelete
	/* db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
		console.log("Result:", res);
	},(err)=>{
		console.log("Some error",err);
	}); */
	
	db.collection("Users").findOneAndDelete({
		name:"Pearl"
	}).then((res)=>{
		console.log("Result",res);
	}, (err)=>{
		console.log("Some Error",err);
	});
	
	client.close();
	
});
