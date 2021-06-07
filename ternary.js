'use strict'

/* The conditional (ternary) operator is the an operator that takes three operands

That allows you to create a program to choose 
if you want to use the first choice or the other choice
    
    condition ? true : false

A condition followed by a question mark (?)
then an expression to execute if the condition is truthy followed by a colon (:)
and finally the expression to execute if the condition is false. 

*/

// Let's make a ternary condition if the person is major or not
 
const majorAge = (age) => age >= 18 ? 'Major' : 'Not Major'

console.log(majorAge(18)) // Major
console.log(majorAge(7)) // Not Major
console.log(majorAge(8)) // Not Major
console.log(majorAge(22)) // Major
console.log(majorAge([])) // Not Major
console.log(majorAge(['18'])) // Major
console.log(majorAge(0)) // Not Major