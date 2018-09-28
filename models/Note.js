// require mongoose//
var mongoose = require("mongoose");

//create Schema class//
var Schema = mongoose.Schema;

//create the note schema/

var NoteSchema = new Schema({
    body: {
        type: String
    }
});

// Keep in mind that Mongoose will automaticly save the objids of notes/
//these ids are referred to in the Aritical model/

//create the note model with the NoteSchema/

var Note = mongoose.model("Note", NoteSchema);

//exports the Note model
module.exports = Note;