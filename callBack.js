'use strict'

/*
	callBack
		The callBack is to working with function as an argument for another function.
		In this file we will explain how to work with function into function.
*/

// Function inside fuction.
// let's create a function firstName().
// And create another function Name().
// The purpose of the function Name() is to callBack the firstName() function

const firstName = function() {

		console.log('Chaimaa')
}


const Name = function(fn) {
	
	console.log(fn())
}
Name(firstName) // logs 'Chaimaa'

// In the last function, we use fn() as an argument to execute the chosen function
// The object of fn() is we want to replace it with a specific object
// If I give the fn() a name of the previews functions. 
// it will return the result of the taken function in fn().


// This means that we are created a function and give it another function as an argument.
// In the final, we have a function inside another function
// To execute the function Name() we need to call it and give it a specific argument.
// Like in the first example.




