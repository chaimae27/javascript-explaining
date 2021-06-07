'use strict'

// To control the program flow we include if-else conditional statements.
// In this case we can use ternary function or work with basic if-else.
// Use if conditional statement if you want to execute something based on some condition.

/*
  if(condition) {
      code to execute
  }
*/

// let's work with this example !!
// To make this we need create a function a make the condition into it.

const max = (a, b) => {

  if(a > b) {
    
    console.log('a greater then b')
  } else {

    console.log('a less then b')
  }
}
max(1, 2)

// The first condition will achieve if the first value great then the second value.
// If the condition does not achieve the program will execute the other 'else' option.

// If the function have many condition we can create like it.

const min = (a, b) => {

  if(a > b) {
    
    console.log('a greater then b')
  } else if (a < b) {

    console.log('a less then b')
  } else {
    
    console.log('a equal b')
  }
}
min(4, 4)

// The else if make the second condition
// We can make many condition we just repeat the 'else if' element.

// The javascript has more ways to get your code more applicable.
// So we can change the else-if with the switch statment.

// let's see the exam result code.
const note = 2

switch ( note ) {
  case 1:
    console.log('one');
  break ;
  case 2:
    console.log('two')
  break ;
  default :
    console.log('Three')
  break ;
}
// The 'case' indicate the value that you will be show the result befor break.
// The 'break' statements indicate the end of a particular case.
// If they were to delete, the interpreter would continue executing each statement
// in each of the following cases.

