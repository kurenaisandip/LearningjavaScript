"async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise


// Async Syntax 
// The keyword async before a function makes the function return a promise 

async function myFunction() {
    return "Hello";
  }

//   Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}




// normal way to write promise
async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );


//   simpler way to write promise 
async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);}
  );





  // Await Syntax
//   The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
  let value = await promise;
  

  Example
  async function myDisplay(){
    let myPromise = new Promise(function(resolve, reject){
        resolve("I love you");
    });
    document.getElementById("demo").innerHTML = await myPromise;

  }

  myDisplay();

  // the two arguments (resolve and reject ) are pre-defined by javascript
//   We will not create them, but call one of them when the executor function is ready.
// Very often we will not need a reject function