var mongoose = require('mongoose');

/* var Users = mongoose.model('Users',{
	fname:{
		type:String,
		required:true,
		minLength:2,
		trim:true
	},
	lname:{
		type:String
	},
	age:{
		type:Number,
		required:true
	},
	gender:{
		type:String,
		required:true
	},
	completedAt:{
		default:null
	}
});

var newUsers= new Users(
	{
		fname:' This is the value ',
		lname:"Arora",
		age:25,
		gender:"M"
	}	
);


newUsers.save().then((doc) => {
	console.log("Save data",doc);
},(err)=>{
	console.log("Unable to save data", err);
}); */




var User = mongoose.model('Users',{
	fname:{
		type:String,
		required:true,
		trim:true,
		minLength:1
	},
	email:{
		type:String,
		required:true,
		trim:true,
		minLength:1
	}
});

module.exports={
	User
};
/* var newUser = new Users({
	fname:" Ishant ",
	email:" ishant.arora@trantorinc.com "
});

newUser.save().then((doc)=>{
	console.log("User Saved", doc);
}, (err)=>{
	console.log("Unable to save User", err);
}); */