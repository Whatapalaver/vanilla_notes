// The note controller constructor does the following:
// Takes a note list model as a parameter.
// Adds a note that says Favourite drink: seltzer.
// Creates a note list view, passing in the note list model.
// The note controller has a method that gets HTML from the note list view and inserts it into the app element.

(function(exports) {

  function NoteController(noteList = new NoteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(noteList)
    this.element = document.getElementById('app')
  }

  NoteController.prototype.noteHTML = function noteHTML() {
    this.element.innerHTML = this.noteListView.viewEachNote()
  };

  exports.NoteController = NoteController;
})(this);


// Console test scripts //
// var testNoteList = new NoteList()
// var testNoteController = new NoteController(testNoteList)
// testNoteList.createNote("FAV drink: Coffee")
// testNoteList.createNote("FAV food: Curry")
// testNoteController.noteHTML()
