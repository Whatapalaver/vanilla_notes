Vanilla Notes App
========
Makers week 7 - pairing challenge to creat a single page web app without the use of any frameworks....

- [x] Create a unit testing system  

*Created a very rudimentary system*
Four examples have been captured and stored in the spec/framework folder, the test.html files are stored in the archive folder

1. helper_spec_alice.js
*This uses the assert function. Tests are written as functions which return either true or false.*
*The cool thing about this testing methodolgy is that it outputs the results of all tests to the webpage test_alice.html with styling*

2. daniTest.js
*This is Dani's framework using a nested 'describe' and 'it' as per RSpec etc*
*It's designed to be run in the terminal console and includes console colour styling*

3. helper_spec2.js
*Also uses the assert method. With individual tests written as functions with a true/false return.*
*Designed to be viewed in the browser console only*

4. helper_spec_expect.js
*This uses an 'expect' object which has properties which are also methods, like isEqual or isLessThan*
*This construction makes sense to me and is expansible*
*Designed to be viewed in the browser console only*

- [ ] Create a notes app  
*This is an unfinished work in progress. I am currently stuck on showing a page view of a single note. Stage 9 of instructions*

My test script for the console:

```javascript
var testNoteList = new NoteList()
var testNoteController = new NoteController(testNoteList)
testNoteList.createNote("FAV drink: Coffee")
testNoteList.createNote("FAV food: Curry")
testNoteController.noteHTML()
```  
Remember to run the server by typing `http-server`