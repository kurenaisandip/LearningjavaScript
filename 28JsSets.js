// JS set is a collection of unique values.
// Each value can only occur once is Set.

// Essential Set Method 

// Method	    Description
// new Set()	Creates a new Set
// add()	    Adds a new element to the Set
// delete()	    Removes an element from a Set
// has()	    Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// values()	    Returns an iterator with all the values in a Set


// Property	    Description
// size	Returns the number of elements in a Set


// How to create a set
// we can create a js set by:
// -Passing an Array to new Set()
// - Creating a new Set and use add() to add values 
// - Create a new Set and use add() to add variables

// the new Set() Method
// Pass an Array to the new Set() constructor:

// create a set
const letters = new Set(["a", "b", "c"]);

//create a Set and values:
const lets = new Set();

// Add values to the set
lets.add("a");
lets.add("b");
lets.add("c");

// Create a Set ad Variables:

const letter = new Set();

// create variables
const a = "a";
const b = "b";
const c = "c";

// add variables to the set
letter.add(a);
letter.add(b);
letter.add(c);

// if we add equal elements, only the forst will be saved

// foreach( ) method

// the forEach() method invokes (calls) a function for Set elements:

// Create a Set
const lett = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
})

// the values() method
// The values() method returns a new iterator object containing all the values in a Set:

letters.values() // returns [object set iterator]