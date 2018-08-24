const MongoClient= require('mongodb').MongoClient;

var url="mongodb://localhost:27017/TodoApp";
MongoClient.connect(url,{ useNewUrlParser: true }, (err,client) => {
	if(err){
		return console.log("Unable to connect with MonogDB", err);
	}
	
	const db= client.db('TodoApp');
	// Get Array of all records
	/* var todos=db.collection('Todos').find({
		//_id:new ObjectID("5b2399a5743c151bd08ccdac")
		//completed:true,
		//text:"Eat Lunch"
	}).toArray().then( (docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));		
	}, (err)=>{
		if(err){
			return console.log("There is some err", err);
		}		
	}); */
	
	
	//Count Records
	/* db.collection('Todos').find({
		//_id:new ObjectID("5b2399a5743c151bd08ccdac")
		//completed:true,
		//text:"Eat Lunch"
	}).count().then((count) => {
		console.log('Records Count:', count);
	}, (err)=>{
		console.log("Some error", err);
	}); */
	
	/* count=0;
	db.collection('Todos').find().forEach().then((doc) => {
		if(doc !=null){
			count=count+1;
		}
	}, (err)=>{
		if(err){
			//console.log("Some error", err);
		}
	});
	console.log(count); */
	
	db.collection('Users').find({
		name:"Ishant"
	}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) =>{
		console.log("Some Error", err);
	});
	client.close();	
});