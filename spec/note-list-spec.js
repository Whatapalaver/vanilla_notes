var testNoteList = new NoteList()

expect('New note list returns initial array', testNoteList.getNoteArray()).isEqualTo(testNoteList.noteArray)

// This is not the best test. It just checks that the array has been populated with something
// I'm not sure how to test whether the text value of the array object is a specific value
testNoteList.createNote('New test note in test list')
expect('Create note populates note list', testNoteList.getNoteArray().length).isEqualTo(1)