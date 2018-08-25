const noteList = new NoteList();
const noteListViewer = new NoteListView(noteList);
const str1 = "I am making slow progress"
const str2 = "I am following the approach of wax on, wax off"

noteList.createNote(str1)
noteList.createNote(str2)

expect('Expect viewer to show html list of notes', noteListViewer.viewEachNote()).isEqualTo(
  `<ul><li><div id='0'><a href='#notes/1'>${str1}</a></div></li><li><div id='1'><a href='#notes/2'>${str2}</a></div></li></ul>`)
