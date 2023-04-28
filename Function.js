// A function is a block of code designed to perform a particular task

// A javascript dunction is executed when "something" invokes it.

// function to compute the product of p1 and p2

function myfunction(p1, p2){
    return p1 * p2;
}

// Structure to write the javascript function

function name(parameter1, paramenter2){
    // code to be executed
    // Function arguments are the values received by the function when it is invoked.
}

// Function invocation
// The code inside the function will execute when "something" invokes the function
// - when an event occurs ( when a user clicks a button)
// - when it is invoked from javascript code
//  Automatically (self invoked)

// Function Return
let x = fun(4, 5);  // function is called, return value will end up in x

function fun(a, b){
    return a*b;   // function returns the product of a and b
}

// why functions?
// - to reuse the same code 


// The () operator invokes the function
// Accessing a function without () will return the function object instead of the function result.

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  document.getElementById("demo").innerHTML = toCelsius;

  // Types of variables:

//   Local Variables 

