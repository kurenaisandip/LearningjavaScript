// I will callback later


// A callback is a function passed as an argument to another function
// this technique allows a function to call another function
// a callback function can run after another function has finished




// Function Sequence
// Js functions are executed in the sequence they are called. Not in the sequence they are defined.


function myFirst(){
    myDisplayer("hello");
}

function mySecond(){
    myDisplayer("Goodbye");
}

myFirst();
mySecond();



// Sequence Control
// sometimes we would like to have better control over when to execute a function.
// Supose we want to do a calculation adn the display the result
// we could call a calculator function(myCalculator), save the result, and then call another function(myDisplayer) to display the result

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);


//   or we could call a calculator function(myfunction),and let the calculator function call the display function (myDisplayer)

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);

  // the problem with the first example above, is that we have to call two functions to display the result
  // the problem with the second example, is that we cannot prevent the calculator function from displaying he result
//   Now its ime to bring back callback











// JS Callbacks
// a callback is a function passed as an argument to another function

// using a callback, we could call the calculator function with a callback, and let the calculator function run the callback after the calculation is finished

function display(some){
 document.getElementById("demo").innerHTML = some;
}

function calculator(num1, num2, mycallback){
    let sum = num1 + num2;
    mycallback(sum);
}

calculator(2, 4, display);

// in this example, display is called a callback function.
// It is passed to calculator as an argument.

Note 
// When we pass a functio as an argument, remember ot to use parenthtesis.
// Right: calculator(2, 3, display);
// Wrong: calculator(2, 4, display());


Example
//create an array
const num = [4, 1, -20, -7, 5, 9, -6];

// call removeNeg with a callback
const posNumbers = removeNeg(num, (x) => x >= 0);

// display result
document.getElementById("demo").innerHTML = posNumbers;

// keep only positive numbers
function removeNeg(numbers, callback) {
    const arra = [];
    for(const x of numbers) {
        if(callback(x)){
            arra.push(x);
        }
    }
    return arra;
}

// in this example, (x) => x >= 0 is a callback function
// It is passed to removeNeg() as an argument


// When to use a Callback?

// the example above are not very exciting
// They are simpiliied to teach is the callback syntax
// where callbacks really shine are in asynchrnous functions, where one function has to wait for another function(like waiting for a file to load).
