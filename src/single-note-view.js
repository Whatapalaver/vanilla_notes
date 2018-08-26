// The single note view constructor takes a note model as a parameter.
// The single note view has a method that, when called, returns a string of HTML 
//    that represents the note model. For example: <div>Favourite drink: seltzer</div>.

(function(exports) {

  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.singleNoteHTML = function(){
    return `<div>${this.note.noteText}</div>`
  }

  exports.SingleNoteView = SingleNoteView;
})(this);