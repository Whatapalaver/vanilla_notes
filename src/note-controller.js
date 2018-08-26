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

  makeUrlChangeShowNoteForCurrentPage();

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(document.location));
  };

  function getNoteFromUrl(location) {
    var position = location.hash.split("#notes/")[1]; //gets back a number
    var x = new SingleNoteListView((this.noteList).noteArray[position - 1])
    return x.singleNoteHTML();
    // var notePosition = location.hash.split("#notes/")[1];
    // var singleNote = new SingleNoteListView((this.noteList).noteArray[notePosition - 1])
    // return singleNote.singleNoteHTML();
  };

  function showNote(Note) {
    document
      .getElementById("app")
      .innerHTML = Note;
  };

  exports.NoteController = NoteController;
})(this);


// Console test scripts //
// var testNoteList = new NoteList()
// var testNoteController = new NoteController(testNoteList)
// testNoteList.createNote("FAV drink: Coffee")
// testNoteList.createNote("FAV food: Curry")
// testNoteController.noteHTML()
