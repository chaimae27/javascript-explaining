'use strict'

/* 

	Functions it's a arguments contain blocks of code that need to be executed repeatedly. 

	Functions can take zero or more arguments, and can optionally return a value.

	Function allows you to define a block of code, give it a name and then execute it 
	as many times as you want.

	Function is confined by a brackets

	How to create a function :
	
	function functionName() {

		Arguments
	} 
	functionName()

	To execute the function we need to calling it in the last. with her name and the '()'

*/

// let's explain how to work !! Look to example blow :
// this is a basic function
// This function takes a Name and return the salutation with the name.
4
const sayHello = (Name) => ' Hi ' + Name

// In the our begnning we will use the console.log()
console.log(sayHello('Chaimaa')) // logs 'Hi Chaimaa'

// This function have a one argument showing in the output.
// This function concatenates the entered in the console name with the salutation.


// What if you entered a number instead of a name
// let's try it together !!
console.log(sayHello(1)) // logs 'Hi 1'

/*

 In the console, we will see that the function took the number as a string
 and concatenate it with the salutation message.

*/

// let's create a function with two parameters and add them to each other.
// To create it we need to declare it as a constant variable by add.

const add = (a, b) => a + b

// The function creates to add two parameters 'a' and 'b'.
// The 'add' is the name of the function.
// 'a' and 'b' called parrametes of the function.
// the (a, b) is the argument.
// the '=>' informing us that we work with a function.
// after '=>' we put code to be executed.
/*
 In this function, we have not given it a specific value
 for 'a' and 'b' which allows us to put any value in 'a' and 'b'.
*/
// It can be a float number, an integer or not, etc...
// We using the parametres as a variable with value
 
// So let's call it !

console.log(add(1, 2)) // logs 3
console.log(add(-1, 4)) // logs 3

console.log(add('Hello', ' World')) // Hello World
// In the last console.log(), we test the function with a string and it works.
// because in the function we have not created a condition that takes just a number.
// This is the concatenation.


// The function return a value so can make it in a variable and use it.
// let's try to create a variable and store the return value of function.

const addition = (add(50, 88))
console.log(addition) // logs 138

// we can use function as a argument like this :

console.log(add(1, sayHello('Chama'))) // logs '1 Hi Chama'


// There are many way to create a function :


// Function with one argument
const function1 = (key) => key
console.log(1)
// the function1 return a key value


// Function with more argument 
const greater = (a, b) => a < b ? true : false
console.log(greater(7, 8))

// This function returns true if a less than b or false if the opposite.


// Arrow Function :
const anonyme = (key) => {
	console.log(key)
}
anonyme(4)

// Anonymous Function 
let A = function(value) {
	console.log(value)
}
A(7)

// Anonymous function is that type of function that has no name 
// or we can say which is without any name
// When we create an anonymous function, it is declared without any identifier

