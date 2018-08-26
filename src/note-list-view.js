// Uses the constructor and prototype pattern to define a note list view object that can be instantiated.
// Takes a note list model upon instantiation.
// Has a method that, when called, returns a string of HTML that represents the note list model. 
// For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.

(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
    
  }

  NoteListView.prototype.returnNoteListHTML = function() {
    var list = this.noteList.noteArray;
    var noteHTML = [];
    list.forEach(function(i) {
      noteHTML.push(`<li><div id='${list.indexOf(i)}'><a href='#notes/${list.indexOf(i)}'>${i.noteText.substring(0, 20)}</a></div></li>`)
    });
    return `<ul>${noteHTML.join("")}</ul>`;
  }

  exports.NoteListView = NoteListView;
})(this);