'use strict'

// In Javascript, we can declare a variable with different types of data.
let Num = 4
let Nul1 = 14.35

console.log(Num) // Integer or float

let emptStr = '' // empty String
let Str = 'String'
console.log(Str) // Textual data
// To set the series it is necessary to use ('')

let Bool = true
console.log(typeof(Bool)) // Two value true Or false


/*
Arrays :
  Arrays store multiple values. So unlike other data types like strings and numbers.
  An array can contain more than one piece of information.
  Arrays it's like a row of cubby boxes to store data
*/

// To create or declare an array we use braces and separate between the items by a comma.
// We can name the array affter the '=' symbol.
// We can name our array, Arr and put all the elements inside the square

let empty = [] // empty array
let Arr = ['item1', 'item2', 'item3', 'item4']
console.log(Arr)


// When we need to access an array of items by index.
// just make the name of the array plus the number of the index in the array
// Don't forget that the number of items in the array starts from '0'

let Arr1 = ['item5', 'item6', 'item7', 'item8']
console.log(Arr1[2]) // 'item7'
// The output will be 'item7'

/* 
  To find the size of the array, we put the name of the array 
  plus the length and separate them with a point.
*/

let Arr2 = ['item9', 'item10', 'item11', 'item']
console.log(Arr2.length) // logs 4

// Changing the value of an array item
/*
  To change the value of an array item, we just need to put the name of the array
  and the number of the item in the array that we want to change
*/

Arr2[1] = 'itemChanged'
console.log(Arr2[1]) // logs 'itemChanged'

// While it’s possible to change the value of an array item as shown in,
// it’s generally not advised.


// Adding elements to an array
// To add a new item To our array we need in this case To the method push()
// The push() method adds new items to the end of an array, and returns the new length.

Arr2.push('item12')
console.log(Arr2) // logs ['item9', 'item10', 'item11', 'item', 'item12']


// Working with arrays
// For joining the array elements into a string javascript is using the join() method.
// So let's see the exemple below 


console.log(Arr1)
console.log(Arr1.join(', ')) // Returns a string
// By default the value of the separator is comma “,”.
// In the example above we separated the Arr1 items by comma and space.


console.log(Arr2)
let arri = Arr2[2].split('');
console.log(arri)
// The split() is a method is used to split a string into an array of substrings
// and returns the new array.



// Objects can contain one or many key-value, The key can be any string
// The value can be any type of value a number, string, array, function, or object.
// Here we store person into a variable
// This is an Object

let emptObjt = {} // empty object

let person = { 
  firstName: 'John',
  lastName: 'Johny',
  sayHi : function () {
    console.log('Hello World')
  }
}
person.sayHi();
console.log(person.firstName);


// To create object we need braces '{}'.
// NB: When one of these values is a function, it’s called a method of the object.
// Otherwise, they are called properties.

let book = {
  peaper: 208,
  genre: 'Adventur',
  author: 'Oussama Muslim',
  paid: true
}
// To get the name of the author in the output we use 
console.log(book.author)

// The 'book' is the object and 'author' is the property.
// To seperate property we need to use ','.
// N.B: And is not necessary to use it in the last properties.