// Javascript array const

// ECMAScript 2015 (ES6)
// In 2015, JavaScript introduced an important new keyword: const.

// It has become a common practice to declare arrays using const:

const cars = ["Saab", "Volvo", "BMW"];

// Cannot be Reassigned
// An array declared with const cannot be reassigned:

Example
const cars1 = ["Saab", "Volvo", "BMW"];
cars1 = ["Toyota", "Volvo", "Audi"];    // ERROR

// Arrays are Not Constants
// The keyword const is a little misleading.

// It does NOT define a constant array. It defines a constant reference to an array.

// Because of this, we can still change the elements of a constant array.

// but we can change the element of the constant array

// You can create a constant array:
const carss = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// Assigned when Declared
// JavaScript const variables must be assigned a value when they are declared:

// Meaning: An array declared with const must be initialized when it is declared.

// Using const without initializing the array is a syntax error:

const cars;
cars = ["Saab", "Volvo", "BMW"];