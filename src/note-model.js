// Uses the constructor and prototype pattern to define a note model object that can be instantiated.
// Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.
// Stores the text in a text property on the note.
// Has a method that will return the note text.

(function(exports) {

  function Note(noteText, id) {
    this.noteText = noteText;
    this.id = id;
  }

  Note.prototype.getText = function () {
    return this.noteText;
  };

  Note.prototype.getId = function () {
    return this.id;
  };

  exports.Note = Note;
})(this);
