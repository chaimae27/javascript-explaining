'use strict'

/*

	Method
		The methods help developers to work with arrays and variables easily and efficiently.
		Methods are the actions that can be performed on objects.
		Like an array is an object.
		In javascript we have a lot of method you just put the object and full stop
		and you will see the suggested methods.
		Then choose the best for your code.

*/

// let's create a code that filter the age 
// if greater then 18 return 'Yes' if less then return 'No'.
// In the basic you think to use a loops with a contion 'if-else'.
// That's cool you are in the right way, but the condition takes a lot of lines. 
// and this is not good for our code performance. 

let arr = [17, 22, 8, 87, 10]
const filtre = function() {
	
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > 18) {

			console.log("yes")
		} else {

			console.log("No")
		}
	}
}
console.log(filtre())

// So in javascript we able to use this hole function as simple and short method.
// in this method we need to use arrow function.

arr.filter(arr => {
	console.log(arr > 18)
})

// great it's good right ?


// let's use another method with the same array.
// in this method we need to add a 4 in each element of the table.
// Without changing the main matrices, we just make a copy of it
// In this case we use map() method.
// map() it's like filter() it is just a loop.

let result = arr.map(arrs => arrs + 4) 
console.log(result)
// We have one instruction so we are creating it like this
// N.B: arrs is the element I'm pointing at on each iteration 


// let's try with another method with chain of characters.

let str = 'Hello World'
console.log(str.indexOf("H")) // logs 0

// Never forget that the program calculate from the number 0
// This method we will show the number of the index in the 'str' variable.

// In the previews file, we talk about the join() and split() method.
// You can go back to it ^_^ .
