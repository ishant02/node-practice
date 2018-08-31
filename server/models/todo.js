var mongoose = require('mongoose');

//Save new something
 var Todo= mongoose.model('Todo',{
	text:{
		type:String
	},
	completed:{
		type:Boolean
	},
	completedAt:{
		type:Number
	}	
});

/* var newTodo= new Todo({
	text:"Learning Mongoose1"
});

newTodo.save().then((doc)=>{
	console.log("Saved todo", doc)
},(e)=>{
	console.log("Unable to save todo",e);
}); */

module.exports = {
	Todo
};