var testNL = new NoteList()
var testNLC = new NoteController(testNL)
var testingNote2 = testNL.createNote('This is my second testing note')
var testSingle = new SingleNoteView(testingNote2)

expect('Single note text returned in html div tags', 
  testSingle.singleNoteHTML()).isEqualTo('<div>This is my second testing note</div>')