console.log("Starting node.js");

const fs = require('fs');


var fetchNotes = () => {
	try{
		var noteString=fs.readFileSync('notes-data.json');
		notes = JSON.parse(noteString);
		return notes;
	} catch(e){
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));	
};

var addNote  = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	
	// Check Duplicates title
	var duplicateNotes = notes.filter((note) => {
		return note.title===title;
	});
	
	if(duplicateNotes.length===0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}
	else {
		return 0;
	}
};

var getAll = () => {
	var notes = fetchNotes();
	return notes;
};

var getNote = (title) => {
	
	var notes= fetchNotes();
	var findNote = notes.filter((note) =>{
		if(note.title === title){
			return note.title;
		}
	});
	if(findNote.length > 0){
		return findNote;
	}
	
};

var removeNote = (title) => {
	var notes= fetchNotes();
	var filteredNotes= notes.filter((note)=>{
		return note.title !== title
	});	
	saveNotes(filteredNotes);
};

module.exports= {
	addNote,
	getAll,
	getNote,
	removeNote
};