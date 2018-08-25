//This is a version of Alice's test framework which runs in the browser and returns all the tests in the browser window (not console)

/* testing helpers */
function appendResult(div, name, passed, error) {
  if (passed) {
    var title = document.createElement('p');
    title.className = 'pass';
    title.innerText = "Test " + name + " passed";
    div.appendChild(title);
  } else {
    title = document.createElement('p');
    title.innerText = "Test " + name + " failed with " + error;
    title.className = 'fail';
    div.appendChild(title);
    var stack = document.createElement('p');
    stack.innerText = error.stack;
    div.appendChild(stack);
  }
  var rule = document.createElement('hr');
  div.appendChild(rule);
}

function runAndDisplayTests(testArray) {
  var results = document.getElementById('test_results_div');
  //var rule = document.createElement('hr');
  //results.appendChild(rule);
  for (var i = 0; i < testArray.length; i ++) {
    var passing = true;
    try {
      testArray[i]();
    } catch (e) {
      passing = false;
      appendResult(results, testArray[i].name, false, e);
    } finally {
      if (passing === true) {
        appendResult(results, testArray[i].name, true);
      }
    }
  }
}

function assert(assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("expected " + assertionToCheck.toString() + " to be true.");
  }
}