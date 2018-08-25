const testingNote2 = new Note('This is my second testing note')
const testSingle = new SingleNoteListView(testingNote2)

expect('Single note text returned in html div tags', 
  testSingle.singleNoteHTML()).isEqualTo('<div>This is my second testing note</div>')