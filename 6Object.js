// java Script objects

// In real life car is an object 
// A car has properties like weight and color and method like start and stop 

// Objects are variable too but it can contain many values 

const car = {type:'fiat', model:"500"};

// It is common practise to declare object with the const keyword

// Object Definition

// You define (and create) a JavaScript object with an object literal:

const person = {firstName:"John", lastName:"Doe", age:50, 
eyeColor:"blue"};

// Spaces and line breaks are not important. An object definition can span multiple lines:

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  // Accessing Object Properties
//   we can access the object in two ways

// 1. objectName.propertyName 
// 2. objectName["propertyName"]


// Object Methods
// object can also have methods
// methods are action that can be performed on objects

// Methods are stored in properties as function definations.
// A method is a function stored as a property
const person3 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

//   this refers to the person object 

// What is this?
// In js, this keyword refers to an object

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// This Keyword

// In a function defination, this refers to the "owner" of the function

// Accessing Object Methods

objectName.methodName()
name = person.fullName();

// Do Not Declare Strings, Numbers, and Booleans as Objects!

// when a js variable is declared with the keyword "new" the variable is created as an object 

x = new String();  // declare a as a string object

// Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.

