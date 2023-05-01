// Hoisting is a js's default behavior of moving delarations to the top.

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x





// The let and const Keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared:


// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.



// Declare your variables at the top

// Hoisting is (to many developers) and unknown or overlooked behavior of javascript
// if a developer doesn't understand hoisting, programs may contain bugs (errors).
// to avoid bugs, always declare all variables at the beginning of every scope.
// Since this is how jjavascript interprets the code, it is always a good rule.

