const MongoClient=  require('mongodb').MongoClient;

MongoClient.connect( 'mongodb://localhost:27017/todoapp',{ useNewUrlParser: true }, (err, db) =>{
	if(err){
		return "Unable to connect with MongoDB server";
	}
	console.log("Connected with MongoDB");
	/* db.collection('Todos').insertOne({
		text:"Something to do",
		completed:true
	}, (err, res) => {
		if(err){
			return console.log("Unable to insert new record", err);
		}
		console.log(JSON.stringfy(res, undefined, 2));
	}); */
	db.close();
});