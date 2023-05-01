// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// A Set can hold any value of any data type.

// Method	         Description
// new Set()	     Creates a new Set
// add()	         Adds a new element to the Set
// delete()	     Removes an element from a Set
// has()	         Returns true if a value exists
// clear()	         Removes all elements from a Set
// forEach()	     Invokes a callback for each element
// values()	     Returns an Iterator with all the values in a Set
// keys()	         Same as values()
// entries()	     Returns an Iterator with the [value,value] pairs from a Set

// Property	    Description
// size	        Returns the number elements in a Set


// / Create a Set
const letters = new Set(["a","b","c"]);

// same can be done in this way 
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");




// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Create a Set
const letters = new Set();

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);



// The forEach() Method
// The forEach() method invokes a function for each Set element:
// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})


letters.values()   // Returns [object Set Iterator]



// The keys() Method
// A Set has no keys.

// keys() returns the same as values().

// This makes Sets compatible with Maps.

letters.keys()   // Returns [object Set Iterator]


// The entries() Method
// A Set has no keys.

// entries() returns [value,value] pairs instead of [key,value] pairs.

// This makes Sets compatible with Maps:

// Create an Iterator
const myIterator = letters.entries();

// List all Entries
let text = "";
for (const entry of myIterator) {
  text += entry;
}


// Sets are Objects
// For a Set, typeof returns object:

typeof letters;      // Returns object
For a Set, instanceof Set returns true:

letters instanceof Set;  // Returns true