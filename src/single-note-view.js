// The single note view constructor takes a note model as a parameter.
// The single note view has a method that, when called, returns a string of HTML 
//    that represents the note model. For example: <div>Favourite drink: seltzer</div>.

(function(exports) {

  function SingleNoteListView(note) {
    this.note = note;
  }

  SingleNoteListView.prototype.singleNoteHTML = function(){
    return "<div>" + this.note.getNote() + "</div>"
  }

  exports.SingleNoteListView = SingleNoteListView;
})(this);