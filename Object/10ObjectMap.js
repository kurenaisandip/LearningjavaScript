 // A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.
 // A Map has a property that represents the size of the map.


// Method	        Description
// new Map()	    Creates a new Map object
// set()	        Sets the value for a key in a Map
// get()	        Gets the value for a key in a Map
// clear()	        Removes all the elements from a Map
// delete()	    Removes a Map element specified by a key
// has()	        Returns true if a key exists in a Map
// forEach()	    Invokes a callback for each key/value pair in a Map
// entries()	    Returns an iterator object with the [key, value] pairs in a Map
// keys()	        Returns an iterator object with the keys in a Map
// values()	    Returns an iterator object of the values in a Map


// Property	        Description
// size	            Returns the number of Map elements


// How to Create a Map
// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);






//   Map.set()
  // Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// The set() method can also be used to change existing Map values:

Example
fruits.set("apples", 500);


// Map.get()
// The get() method gets the value of a key in a Map:

Example
fruits.get("apples");    // Returns 500

// Map.get()
// The get() method gets the value of a key in a Map:

Example
fruits.get("apples");    // Returns 500


// Map.delete()
// The delete() method removes a Map element:

Example
fruits.delete("apples");


// Map.clear()
// The clear() method removes all the elements from a Map:

Example
fruits.clear();


// Map.has()
// The has() method returns true if a key exists in a Map:

Example
fruits.has("apples");

// Maps are Objects
// typeof returns object:

Example
// Returns object:
typeof fruits;

// instanceof Map returns true:

Example
// Returns true:
fruits instanceof Map;



// Map.forEach()
// The forEach() method invokes a callback for each key/value pair in a Map:

Example
// List all entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

// Map.entries()
// The entries() method returns an iterator object with the [key,values] in a Map:

Example
// List all entries
let text = "";
for (const x of fruits.entries()) {
  text += x;
}


// Map.keys()
// The keys() method returns an iterator object with the keys in a Map:

Example
// List all keys
let text = "";
for (const x of fruits.keys()) {
  text += x;
}

// Map.keys()
// The keys() method returns an iterator object with the keys in a Map:

Example
// List all keys
let text = "";
for (const x of fruits.keys()) {
  text += x;
}


// You can use the values() method to sum the values in a Map:

Example
// Sum all values
let total = 0;
for (const x of fruits.values()) {
  total += x;
}


// Objects as Keys
// Being able to use objects as keys is an important Map feature.

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);