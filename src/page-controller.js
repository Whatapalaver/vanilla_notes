var list = new NoteList();
list.createNote("Lentil curry is not the best option for the current state of affairs");
list.createNote("Yes its true, I have a tiny digestive problem");
list.createNote("Doesn't make me the most popular person in the house");
list.createNote("C'est La Vie");
var controller = new NoteController(list);
controller.noteHTML();

function getNoteIDFromURL(location) {
  return location.hash.split('#notes/')[1]
};

function showNote(note) {
  var snv = new SingleNoteView(note)
  document.getElementById('app').innerHTML = snv.singleNoteHTML();
}

function getShowNoteTarget(number) {
  return list.getNoteArray()[number]
}

function showNoteForCurrentPage() {
  showNote(getShowNoteTarget(getNoteIDFromURL(window.location)))
}

function makeURLChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage)
};

makeURLChangeShowNoteForCurrentPage()