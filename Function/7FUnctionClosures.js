// JS variables can belong to the local or global scope.

// global variables can be made local (private) with closures.


// Global Variables
// A function can access all variables defines inside the function, like this:

function myFunction() {
    let a = 4;
    return a * a;
  }

  // But a function can also access variables defined outside the function, like this:
  
  let a = 4;  // global variable
function myFunction() {
  return a * a;
}


note 
// variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.





// Variable Lifetime
// Global variables live until the page is discarded, like when you navigate to another page or close the window.

// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.




Note 
// a closure is a function having access to the parent scope, even after the parent function has closed.