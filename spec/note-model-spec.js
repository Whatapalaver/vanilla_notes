const testingNote = new Note('This is a testing note')

expect('Note text is as expected', testingNote.getText()).isEqualTo('This is a testing note')