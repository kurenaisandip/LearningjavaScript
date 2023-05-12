// Method Reuse
// with the call() method, we can write a method that ca be used on different objects.

// all functions are methods
// in js all functions are object methods.
// if the function is not a mehod of javascript object, it is a functio of the global object.


const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // This will return "John Doe":
  person.fullName();  

  // in this example, this refers to the person object.
//   this.firstName means the firstName property of this 



// JS call() method

// the call () method is a predefined js method.
// it can be used to invoke a method with an owner object as an argument(parameter).

// with call(), an object can use a mehod belonging to another object.

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  person.fullName.call(person1);
  
  


  // The call() method with Argumments
  // the call() method can accept arguments

  const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.call(person1, "Oslo", "Norway");








  