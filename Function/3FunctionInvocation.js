// the code inside a js function will execute when "something" invokes it.

// invoking a js function
// the code inside a function is not executed when the function is defined.
// the code inside a function is executed when the function is invoked


// invoking a function as a function
function myFunction(a, b) {
    return a * b;
  }
  myFunction(10, 2);           // Will return 20

// the function above does not belong to any object.
// in a browser the page object is he browser window. The function above automatically becomes a window function.

Note 
// This is a common way to invoke a js function, but not a very good practice.
// Global variables, methods, or functions can easily create name conflicts and bugs in the global object.

myFunction() and window.myFunction() // is the same function



// invoking a function as a method
// in js, we can define functions as object methods.

const myObj = {
    firstName: "Sandip",
    lastName: "rai",
    fullName: function () {
        return this.firstName + "" + this.lastName;
    }
}

myObj.fullName();  // will retunr "Sandip rai"

//the fullnme method is a function. The function belongs to the object. myObject is the owner of the function.
// the thing called this, is the object that "owns" the javascript code. In this case the value of this is myObject.


// invoking a function as an object method causes the value of this to be the object itself.





//invoking a function with a function constructor
// This is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }
  
  // This creates a new object
  const myObj = new myFunction("John", "Doe");
  
  // This will return "John"
  myObj.firstName;