// This is Dani's code and is designed to be run with node in the terminal console.

var green = '\033[32m';
var red = '\033[31m';
var white = '\033[36m';

function expect(actual) {
  function toEqual(expected) {
    if(expected == actual) {
      console.log(`${green}${actual} equals ${expected}`)
    }
    else {
      throw new Error(`${red}Test failed: expected ${actual} to equal ${expected}`)
    }
  }

  function toBe(expected) {         
    if(expected === actual) {
      console.log(`${green}${actual} is identical to ${expected}`)
    }
    else {
      throw new Error(`${red}Test failed: expected ${actual} to be ${expected}`)
    }
  }
  return {
    toEqual,
    toBe
  }
}

function it(description, bs) {
  try {
    bs();
  } catch(error) {
    console.log(error.stack)
  }
}

function describe(message, callback) {
  console.log(`\n${message}`)
  callback()
}

describe(`${white}Check === identical`, function() {
  it('2 === 2', function() {
    expect(2).toBe(3)
  });
})

describe(`${white}Check == equality`, function() {
  it('6 == 6', function() {
    expect(6).toEqual('6')
  })
})

{/* <script src="https://rawgit.com/theraot/emoji/master/emoji.js" charset="utf-8"></script> */}