// A map holds key-value pairs where the keys can be any datatye.

// A map remembers the orignal insertion order of the keys 

// Essential Map Methods
// Method	                Description
// new Map()	            Creates a new Map
// set()	                Sets the value for a key in a Map
// get()	                Gets the value for a key in a Map
// delete()	                Removes a Map element specified by the key
// has()	                Returns true if a key exists in a Map
// forEach()	            Calls a function for each key/value pair in a Map
// entries()	            Returns an iterator with the [key, value] pairs in a Map



// Property	                Description
// size	                    Returns the number of elements in a Map



// How to Create a Map
// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()


// You can create a Map by passing an Array to the new Map() constructor:

Example
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


// The set() Method
// You can add elements to a Map with the set() method:

Example
// Create a Map
const fruit = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// The set() method can also be used to change existing Map values:

Example
fruits.set("apples", 200);


// The get() Method
// The get() method gets the value of a key in a Map:

Example
fruits.get("apples");    // Returns 500

// The size Property
// The size property returns the number of elements in a Map:

Example
fruits.size;


// The delete() Method
// The delete() method removes a Map element:

Example
fruits.delete("apples");


// The has() Method
// The has() method returns true if a key exists in a Map:

Example
fruits.has("apples");
