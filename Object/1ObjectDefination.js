// In js, objects are king. If we understand object, we understand javascript.

// In js, almost everything is an object.

// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects

// All JavaScript values, except primitives, are objects.

// a primitive value is a value that has no properties or methods.

// Javascript has 7 types of primitive datatype
string 
Number
Boolean
null
undefined
Symbol
BigInt

// Primitive values are immutable that means they cannot be changed. 



// Objects are variables
// js variables can contain single values.

let person = "John";

// objects are variables too but objects can contain many values.
// objects values are written as name:value pairs

let person1 = {firstName:"Sandip", lastName:"Rai", age:22};
// a js object is a collection of named values.
// it is common practice to declare objects with the const keyword.


const person2 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Object Methods
// methods are actions that can be performed on objects.
// object properties can be both primitive values, other objects and functions.
// an object method is an object property containing a function defination.

fullName	function() {return this.firstName + " " + this.lastName;}








//we can create object in the following ways

// using an object literal
// this is the easiest way to create j js object.
// using an object literal, we both define and create an object in one statement. 

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Spaces and line breaks are not important. An object definition can span multiple lines:

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};








// using the js keyword new
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// JS Objects are Mutable
// they are addressed by reference, not by value.
// if person is an objec, the following statement will not create a copy of person.

const x = person; // will not create a copy of person

// both x and person are same object 
// any changes to x will also change person, because x and person are the same object.


const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  const x = person;
  x.age = 10;      // Will change both x.age and person.age