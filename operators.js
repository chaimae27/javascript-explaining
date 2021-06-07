'use strict'

/*
  Operators
    An operator allows you to manipulate values.
    An operator performs some operation on single or multiple data value and produces a result
*/

// For basic operation in javascript we have

/* 
	Concatenation can allow you to concatenate two or more strings' values.
	And returns it as a string. 
*/

let firstName = 'Chaimaa';
let lastName = 'Ess-bbah';
let virus = 'Covid';
let year = 19;

console.log('My full name is: ' + firstName + ' ' + lastName) // My full name is: Chaimaa Ess-bbah

// In javascript we can concatenate strings with numbers, and return a string value.
console.log(virus + year) // 'Covid19'


// Arithmetic Operators are used to performing mathematical operations between numeric operands.

// In this example, the addition operator '+' is used to add two numeric variables
let a = 4;
let b = 4;
console.log(a + b); // 8


// Subtract two variables
console.log(a - b); // 0


// Divide two variables by
console.log(a / b); // 1


// Multiplication and division
console.log(a * b); // 16
console.log(a / b); // 1


// The modulus operator (%) returns the remainder after (integer) division.
console.log(a % b); // 0


// The incrementing operators will add one (+1).
a++; // pre-increment : a equals 4
++a; // pre-increment : a equals 5
console.log(a); // after increment : 6


// The decrementing operators will subtract one (-1).
b--; // pre-increment : b equals 4
--b; // pre-increment : b equals 3
console.log(b); // after decrement : 2

// N.B: Can use the operators '++' after or before the variable.


// We can find operators that compare two operands and return true or false.
console.log(a == b);
// logs 'false'.
// In the example above we compare if 'a' equal 'b' at value level using '=='.


// In this example below we compare if 'a' equal 'b' at the value and the type using '==='.
console.log(a === b);
// logs 'false'


// '!=' using to compare the inequality of two variables.
console.log(a != b);
// logs 'true'

// The operator '>' checks whether if the left-side value is greater than the right-side value.
// If yes then return true otherwise false.

let key1 = 2;
let key2 = 8;

console.log(key1 > key2) // logs 'false'


// The '<' operator Checks whether the left variable is less than the right variable.
// If yes then return true otherwise false.

let key3 = 4;
let key4 = 7;

console.log(key3 < key4) // logs 'true'

// The '>=' operator checks whether the left variable is greater than or equal to the right variable.
// If yes then return true otherwise false.

let key5 = 7;
let key6 = 7;

console.log(key5 >= key6) // logs 'true'

// The '<=' operator checks whether the left variable is less than or equal to the right variable.
// If yes then return true otherwise false.

console.log(key5 <= key6) // logs 'true'


// Logical Operators
// The logical operators allow you to compare variables and do something based on the result
// of that comparison. using AND and OR operations.
// Using the double ampersand '&&' to represent the logical AND operator. 

if(key5 == 7 && key6 == 7) {

	console.log(true)
} else {

	console.log(false)
}
// The two condition must be true
// logs 'true'


// The example below the condition use OR '||'.
// It's like if one condition or the two is true the program will get true if not the program will show false 
if(key5 == 7 || key6 == 8) {

	console.log(true)
} else {

	console.log(false)
}
// logs 'true'
// The one condition or two must be true


// '!' is known as NOT operator. It reverses the boolean result of the condition

if(key5 != key6) {

	console.log(true)
} else {

	console.log(false)
}
// logs 'false'