// Arrow functions were introduced in ES6. 
// Arrow functions allows us to write shorter function syntax.

let myFunction = (a, b) => a * b;

//Before Arrow
hello = function(){
    return "Hello World";
}

// with arrow function

hello = () => {
    return "hello world";
}

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

hello = () => "Hello World";

// Note: This works only if the function has only one statement.

// If you have parameters, you pass them inside the parentheses:
hello = (val) => "Hello " + val;

// In fact, if you have only one parameter, you can skip the parentheses as well:

// Arrow Function Without Parentheses:
hello = val => "Hello " + val;

// What About this?
// The handling of this is also different in arrow functions compared to regular functions.

// In short, with arrow functions there are no binding of this.





// Regular Function:
hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);




// With an arrow function this represents the owner of the function:

// Arrow Function:
hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

// Remember these differences when you are working with functions. Sometimes the behavior of regular functions is what you want, if not, use arrow functions.

