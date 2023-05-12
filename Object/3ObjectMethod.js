const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

//   what is this?
// in js, this keyword refers to an objec.


// JS Methods
// Methods are functions stored as object properties.

Property	Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}

// Accessing object methods
//  we can access an object metho with the following syntax.

objectName.methodName();

name = person.fullName();

// adding a method to an object

person.name = function (){
    return this.firstName + "" + this.lastName;
};

// using built-in methods

let meassage = "hello";
let x = meassage.toUpperCase();
