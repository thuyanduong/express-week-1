//const utils = require("./utils")                     
//const rollDie = utils.rollDie                       // anti-pattern
const {rollDie, INSTRUCTOR_NAME} = require("./utils") // best practice
const superheroes = require('superheroes')
const supervillains = require('supervillains');

console.log(rollDie())
console.log(rollDie())
console.log(rollDie())
console.log(INSTRUCTOR_NAME)

console.log(superheroes.random(), "vs.", supervillains.random())
