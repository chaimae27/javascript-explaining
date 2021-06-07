'use strict'

// Loops let you run a block of code a certain number of times.
// In javascript we have differnts loops.

/*
	For loops

	A for loop is made up of four statements and has the following structure:

	for ([ initialisation ]; [ conditional ]; [ iteration ]) {
		[loopBody] 
	}

*/

	for(let i = 0; i <= 10; i++) {

		console.log('Number ' + i)
	}

// The initialization statement is executed only once before the loop starts.
// It gives you an opportunity to prepare or declare any variables.
// The conditional statement is executed before each iteration,
// and its return value decides the loop is to continue or not.
// If the conditional statement evaluates to a false value then the loop stops.
// In our loop when the variable i = 10 the loop execute it and exit.
// Iteration is the increase or decrease counter.
// In this case the counter increment to the number 10.
// The loop body statement is what runs on every iteration. It can contain anything you want.
// Have multiple statements that need to be executed and so will wrap them in a block ( {...}). 


/*
	While loops

	A while loop is similar to an if statement, except that its body will keep executing until 
	the condition evaluates to false.

	Syntax :
	while ([ conditional ]) [ loopBody ]

*/

// Here an example for a valid while loops.

let a = 1 // initialization the counter
while(a < 5) {

	console.log('Number ' + a) // the executed code
	a++; // increment by +1
}

// You will observe that we’re having to increment the counter within the loop’s body.


/*
	Do-while loops

	This is almost exactly the same as the while loop, 
	except for the fact that the loop’s body is executed at least once before the condition 
	is tested.

*/

// Here's a do..while loop

let i = 1; // initialization of the counter

do {

	console.log(i);
	i++
} while(i < 5)


// Breaking	and	continuing

// it is possible to stop a loop in its tracks from within the loop’s body 
// with the break statement. Like :

for(let i = 0; i < 4; i++) {

	if(i > 2) { // When the condition is true the loop will stop even if not finished yet
		break;
	}
	console.log(i)
}

