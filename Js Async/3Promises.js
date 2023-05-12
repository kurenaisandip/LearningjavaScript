// I promise a Result

// Producing code is code that can take some time 
// Consuming code is code that must wait for the result
// A promise is a JS object that links producing code and consuming code


// JS Promise Object
// A js Promise object contains both the producing code and calls to the consming code

let myPromise  new Promise(function(myResolve, myReject){
     //"producing code " (may take some time)

     myResolve(); //when sucessful 
     myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) {/* code if successful */},
    function(error){/* code if some error */}
);

// when producing code obtains the result, it should call one of the two callbacks

// Result	Call
// Success	myResolve(result value)
// Error	myReject(error object)


// Promise Object Properties
// A js Promise object can be:

-Pending
-Fulfilled
-Rejected

// The Promise object supports two properties: state and result
// while a promise object is "pending"(working), the result is undefined
// when a Promise object is "fullfiled", the result is a value 
// When a Promise object is "rejected", the result is an error object

// // Result	    Call
// Success	        myResolve(result value)
// Error	        myReject(error object)

note 
// We cannot access the Promise properties state and result
// we must use a promise method to handle promises



//Promise How to

newPromise.then(
    function(value){/* code if successful */ },
    function(error){/* code if some error */}
)

// Promise.then() takes two arguments, a callback for sucess and another for failure.
// Both are optional, so we can add a callback for sucess or failure only




// Javascript Promise Examples
// to demonstrate the use of promises, we will use the callback examples from the previous chapter
// - Waiting for a Timeout 
// - Waiting for a file


// Example using Promise
let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });

//   using callback 

setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}


// Waiting for a file

//    Example using Callback
function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(req.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer);



//   Example using Promise
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.htm");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

