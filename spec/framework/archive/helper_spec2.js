var assert = {
  isTrue: function(desc, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(desc +"Assertion failed: " + assertionToCheck + " is not truthy");
    } else { console.log('Test ' + desc + ' passed') }
  }
}
