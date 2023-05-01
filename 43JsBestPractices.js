// avoid global variables, avoid new, avoid ==, avoid eval()

// Avoid Global Variables
// Minimize the use of global variables.

// This includes all data types, objects, and functions.

// Global variables and functions can be overwritten by other scripts.

// Use local variables instead, and learn how to use closures.

// Always Declare Local Variables
// All variables used in a function should be declared as local variables.

// Local variables must be declared with the var, the let, or the const keyword, otherwise they will become global variables.





// Declarations on Top
// It is a good coding practice to put all declarations at the top of each script or function.

// This will:

// Give cleaner code
// Provide a single place to look for local variables
// Make it easier to avoid unwanted (implied) global variables
// Reduce the possibility of unwanted re-declarations

// Initialize Variables
// It is a good coding practice to initialize variables when you declare them.

// This will:

// Give cleaner code
// Provide a single place to initialize variables
// Avoid undefined values


// Declare Objects with const
// Declaring objects with const will prevent any accidental change of type:

let car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Changes object to string

const car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Not possible



// Declare Arrays with const
// Declaring arrays with const will prevent any accidential change of type:

Example
let cars = ["Saab", "Volvo", "BMW"];
cars = 3;    // Changes array to number

const cars = ["Saab", "Volvo", "BMW"];
cars = 3;    // Not possible


// Don't Use new Object()
// Use "" instead of new String()
// Use 0 instead of new Number()
// Use false instead of new Boolean()
// Use {} instead of new Object()
// Use [] instead of new Array()
// Use /()/ instead of new RegExp()
// Use function (){} instead of new Function()
Example
let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object



// Beaware of Automatic Type Conversions
// -js is loosely typed. 
// - a variable can contain all data types. 
// - a variable can change its datatype:

let x = "Hello";     // typeof x is a string
x = 5;               // changes typeof x to a number

Use === Comparison
// The == comparison operator always converts (to matching types) before comparison.

// The === operator forces comparison of values and type:



// Avoid Number, String, and Boolean as Objects
// Always treat numbers, strings, or booleans as primitive values. Not as objects.

// Declaring these types as objects, slows down execution speed, and produces nasty side effects:


// Avoid Using eval()
// The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.

// Because it allows arbitrary code to be run, it also represents a security problem.