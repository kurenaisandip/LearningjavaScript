// Js functions are defined with the function keyword.
// we can use a function declaration or a function expression.

function functionName(parameters){
    // code to be executed
}

function multiply(a, b){
    return a * b;
}


// function Expression
// a js function can also be defined using an expression.
// a function expression can be stored in a variable.

const x = function (a, b) {return a + b};

//after a function expression has been stored in a variable, the variable can be used as a function

let z = x(3, 5);

// the function above is actually an anonymous functio ( a function without a name).
// functions stored in variables do not need function names. They are always iinvoked using the variable name.

// the function above ends with a semicolon because it is a part of an executable statement.




// The function() constructor

// functions can also be defined with a built-in javascript constructor called Function().

const masd = new Function("a", "b", "return a * b");

let xmen = masd(2, 3);

// most of the time, we avoid using the new keyword in Javascript




// function hoisting
// hoisting is js default behaviour of moving declarations to the top of the current scope.
// hoisting applies to variable declarations and to function declarations.
// because of this, js functions can be called before they are declared.


newfunction(5);

function newfunction(y){
    return y + y;
}

// self-invoking functions
// function expressions can be made "self-invoking".
// a self-invoking expression is invoked automatically, without being called.
// function expression will execute automatically if the expression is followed by ().
// we cannot self-invoke a function declaration.
// we have to add parentheses around the function to indicate that it is a function expression.

(function (){
    let x = "hello"; // i will invoke myself
})();
// the function above is actually an anonymous self-invoking function (function without name)







// functions can be used as values
// js functions can be used as values.

function asd(a, b){
    return a - b;
}

let xqwe = asd(10, 5);

// it can also be used in expressions

let qw = asd(4, 6) + 3;







// functions are objects
// the typeof operaotr in javascript returns "function" for functions.

// js functions have both properties and methods and they can be described as objects.


toString() // method returns the dunctions as a string


// a function defined as the property of an object is called a method to the object. A function designed to create a new object, is called an object constructor.



// Arrow functions
// arrow functions allows a short syntax for writing function expressions.

//  we don't need the function keyword, the reurn keyword, and the curly brackets.

const d = (x,y) => x + y;

// arrow functions do not have their own this. They are not well suted for defining object methods.

// arrow functions are not hoisted and they must be defined before they are used .

const c = (a, d) => { return a - d };
