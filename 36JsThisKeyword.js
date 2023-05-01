const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  // What is this?

  // in js, this keyword refers to an object.

//   which object depends on how this is being invoked

// the this keyword refers to different objects depending on how it is used:


// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.



// when used alone, this refers to the global object.

let x = this;

// In strict mode, when used alone, this also refers to the global object:

// this in a function (default)
// In a function, the global object is the default binding for this.

// In a browser window the global object is [object Window]:

function myFunction() {
    return this;
  }


//   this in Event Handlers
// In HTML event handlers, this refers to the HTML element that received the event:

<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>



// Explicit Function Binding

// The call() and apply() methods are predefined JavaScript methods.

// They can both be used to call an object method with another object as argument.

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);
  
  


//   Function Borrowing
// With the bind() method, an object can borrow a method from another object.

// This example creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);


//   This Precedence
// To determine which object this refers to; use the following precedence of order.

// Precedence	        Object
// 1	                bind()
// 2	                apply() and call()
// 3	                Object method
// 4	                Global scope