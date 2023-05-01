// JavaScript Regular Expressions

// A regualar expression is a sequence of characters tat form a search pattern. 
//  The search pattern can be used for text search and text replace operations.

Syntax
/pattern/modifiers;

/w3schools/i;

// Example explained:

/w3schools/i  //is a regular expression.

w3schools  //is a pattern (to be used in a search).

i // is a modifier (modifies the search to be case-insensitive).


// Using String Methods

// in js, regualr expressions are often used with the two string methods: search() and replace()

// the search() method uses and expression to search for a mach, and returns the position of the match.
//the replace() method returns a modified string where the pattern is replaced.

// Using String search() With a String
// The search() method searches a string for a specified value and returns the position of the match:

Example
// Use a string to do a search for "W3schools" in a string:

let text = "Visit W3Schools!";
let n = text.search("W3Schools");
// The result in n will be:
6

// Using String search() With a Regular Expression
Example
// Use a regular expression to do a case-insensitive search for "w3schools" in a string:

let text = "Visit W3Schools";
let n = text.search(/w3schools/i);



// Using String search() With a Regular Expression
Example
// Use a regular expression to do a case-insensitive search for "w3schools" in a string:

let text = "Visit W3Schools";
let n = text.search(/w3schools/i);

// Regular expressions can make your search much more powerful (case insensitive for example).

test() // method is a REgExp expression method. it returns true or false

exec() // mthod is aRegExp method that searches a string for a specific pattern, and returns the found text as an object.

