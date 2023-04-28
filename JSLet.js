// variable defined with let cannot be redeclared.
// variable defined with let must be declared before use.
// variable defined with let have block scope



// Const 
// Always declare a variable with const when you know that value should be changed
// use const when you declare:
// - A new Array
// - A new Object
// - A new Function
// - A new RegExp

// Constant objects and arrays
// Const keyword is a little misleading.

// It doesn't define a constant value. It defines a constant reference to a value.
//  Because of this we cannot:
// -reassign a constant 
// - reassign a constant 
// - reassign a constant object 

// But we can 
// - change the elements of constant array 
// - change the properties of constant object 

// Constant Array 

// we can change the elements of a constant array 

// We can create a constant array:
const cars = ["s", "as", "asd"];

// we can change an element:
cars[0] = "q";

// we can add an element:
cars.push("ausi");

// But we cannot reassign the array 

// const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];    // ERROR


// Consatant Objects
// we can change the properties of a constant object 

// You can create a const object:
// const car = {type:"Fiat", model:"500", color:"white"};

// // You can change a property:
// car.color = "red";

// // You can add a property:
// car.owner = "Johnson";

//  but we cannot reassign the objects

