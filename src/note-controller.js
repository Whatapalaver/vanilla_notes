// The note controller constructor does the following:
// Takes a note list model as a parameter.
// Adds a note that says Favourite drink: seltzer.
// Creates a note list view, passing in the note list model.
// The note controller has a method that gets HTML from the note list view and inserts it into the app element.

(function(exports) {

  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.noteHTML = function() {
    var element = document.getElementById('app');
    element.innerHTML = this.noteListView.returnNoteListHTML();
  };

  // makeUrlChangeShowNoteForCurrentPage();

  // function makeUrlChangeShowNoteForCurrentPage() {
  //   window.addEventListener("hashchange", showNoteForCurrentPage);
  // };

  // function showNoteForCurrentPage() {
  //   showNote(getNoteFromUrl(document.location));
  // };

  // function getNoteFromUrl(location) {
  //   var position = location.hash.split("#notes/")[1];
  //   var noteList = this.noteList
  //   var singleNote = new SingleNoteView((noteList).noteArray[position])
  //   return singleNote.singleNoteHTML();
  // };

  // function showNote(Note) {
  //   document
  //     .getElementById("app")
  //     .innerHTML = Note;
  // };

  exports.NoteController = NoteController;
})(this);


// Console test scripts //
// var testNoteList = new NoteList()
// var testNoteController = new NoteController(testNoteList)
// testNoteList.createNote("FAV drink: Coffee")
// testNoteList.createNote("FAV food: Curry")
// testNoteController.noteHTML()
