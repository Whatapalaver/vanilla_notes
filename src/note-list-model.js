// Uses the constructor and prototype pattern to define a note list model object that can be instantiated.
// Stores an array of note models.
// Has a method that will return all the note models stored in the array.
// Has a method that creates and stores a new single note model. 
// - This function takes a string argument that will be the value of the text property of the note e.g. "Favourite drink: seltzer".

(function(exports) {

  function NoteList() {
    this.noteArray = [];
  }

  NoteList.prototype.getNoteArray = function() {
    return this.noteArray;
  };

  NoteList.prototype.createNote = function(noteText) {
    var id = this.noteArray.length;
    var note = new Note(noteText, id)
    this.noteArray.push(note);
    return note;
  }

  exports.NoteList = NoteList;
})(this);