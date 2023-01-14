// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs")

//const { it } = require("node:test")
//const { array, describe } = require("yargs")

//const { it } = require("node:test")
//const { describe } = require("yargs")

//const { it } = require("node:test")
//const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe ('codeSec', () => {
    it("takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () =>{
        expect(codeSec(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codeSec(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codeSec(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.
const codeSec = (string) => {
    const code = {'a': 4, 'e' : 3, 'i': 1,'o': 0, 'E' : 3}
    const returnCode = letter => code.hasOwnProperty(letter) ? code[letter] : letter

    return string.split('').map(returnCode).join('')
}



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.


describe ( 'comboFruit', () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        expect(comboFruit(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(comboFruit(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
const comboFruit = (array, letter) => {
  return array.filter(word => word.includes(letter.toUpperCase()) || word.includes(letter.toLowerCase()))
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
describe ('cardVal', () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house." , () => {
        expect(cardVal(hand1)).toEqual(true)
        expect(cardVal(hand2)).toEqual(false)
        expect(cardVal(hand3)).toEqual(false)
        expect(cardVal(hand4)).toEqual(true)
    })
})

// b) Create the function that makes the test pass.
const cardVal = (arr) => {
    let countObj = {}
    for(let x of arr){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }
  
  //To check two pairs
  const twoPairs = arr => {
    let countObj = {}
    for(let x of arr){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    //console.log(vals);
    if(vals.filter(x => x === 2).length == 2) return true;
    return false;
  }
  
  
