'use strict'

/*
 variables
*/

// The variable is a space for storing any values.
// To make a variable useful we need to declare it first.
// To declare a variable we need to use the reserved keyword var/let/const.
var varibl 
let keyBold
const some
boolean = true // or false

// To make the variable visible or showing we create it like this
// The output will ' undefined '
// Because the variable is declared without any value
console.log(variabl) // undefined.

// To assign a value to a variable we need to use an equal  (=) operator 
variabl = 1 // The value of the variable is 1.

// Now the program will show the value.
console.log(variabl) // 1.

// We can re-change our value of the variable.

variabl = 2
console.log(variabl) // The output will be 2

// Great, And now let see how to name variables
// Variable names cannot contain spaces
// Variable names can begin with a letter (A, a - Z, z), (_), or ($)
var PascalCase 
var camelCase
var snake_case
// var kebab-case

// var is a global declaration (outside any function).
var number = 2
function global() {
    console.log(number)
}
global()

// let is a local declaration (inside my function).
// const is like let variables, except they cannot be reassigned.
function local() {
    let localNumber = 4
    const localConst = 5
    console.log(localNumber, localConst)
}
local()


