const testingNote = new Note('This is a testing note')

expect('Note text is as expected', testingNote.getNote()).isEqualTo('This is a testing note')