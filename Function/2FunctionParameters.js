// js functions does not perform any checking on parameters values (arguments).

// function parameters and Arguments

function functionName(parameter1, parameter2, parameter3){
    // code to be executed
}

// function parameters are the names listed in the function defination.

// function arguments are the real values passed to ( and received by) the function.



// Parameters Rules
// js function definations do not specify datatypes for parameters.
//js functions do not perform type checking on the passed arguments.
//js functions do not check the number of arguments received.



// default parameters
// if a function is called with mising arguments(less than declared), the missing values are set to undefined.

// Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter.





// default parameter values
// ES6 allows function paramters to have default values.

//Example
// if y is not passed or undefined, then y = 10

function y (x, y = 10){
    return x + y;
}
y(5);




// functions rest parameter
// the rest parameter(....) allows a function to treat an indefinite number of arguments as an array.

function sum(args){
let sum = 0;
for(let arg of args) sum += arg;
return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);


// The argument object
// js functions have abuilt in object called the arguments object. 
// the argument object contains an array of the arguments used when the function was called.
// this way we can simply use a function to find the highest value in a list of numbers.

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}



// if a function is called with too many arguments (more than declared), these arguments can be reached using the argument object.



// Arguments are passed by value
// the parameters, in a function call, are the function's arguments.
