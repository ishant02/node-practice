const fs= require('fs');
/* const data= fs.readFileSync('file.txt',{encoding:'utf-8'});
console.log(data);
console.log("End of the program");

return false; */
 fs.readFile('file.txt', {encoding:'utf-8'}, (err, data) =>{
	 if(err){
		 return console.log("Some error", err);
	 }
	 console.log(data);
 });

console.log("End of the program");


return false;
/* console.log("Starting App.js");
const yargs= require('yargs');
const notes = require('./notes/note.js');

const titleOptions= {
		describe:"Title of note",
		demand:true,
		alias:'t'
	};
const bodyOptions= {
		describe:"Body of note",
		demand:true,
		alias:'b'
	};

const argv= yargs.command("add","Add a new note",{
	title:titleOptions,
	body:bodyOptions
})
.command('remove', 'remove note',{
	title:titleOptions
})
.help().argv;
var command = argv._[0];

console.log(argv);
/* var command = process.argv[2];
console.log(process.argv);*//*
console.log(command);
if(command == 'add') {
	console.log("Adding new note");
	var note=notes.addNote(argv.title, argv.body);
	if(note ==0){
		console.log("Note already exists");		
	} else if((note) !==undefined){
		console.log("Note Added:", JSON.stringify(note));
	}
} else if(command =='list') {
	
	var notesList=notes.getAll();
	console.log(notesList);
}  else if(command =='read') {
	debugger;
	var note=notes.getNote(argv.title);	
	if(note === undefined){
		console.log("Title not found");
	}
	else{
		console.log(note);
	}
	
} else if(command =='remove') {
	console.log("Removing notes");
	notes.removeNote(argv.title);
} else {
	console.log("command not recognized");
} */