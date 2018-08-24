(function(exports) {

  function noteModel(note) {
    this.note = note;
  }

  noteModel.prototype.getNote = function getNote() {
    return this.note;
  };

  exports.noteModel = noteModel;
})(this);
