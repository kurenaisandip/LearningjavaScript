// I will finish later

// function running in parallel with other functions are called asynchronous
// A good example is a JS setTimeout()


// Asynchronous JS

// Waiting for a Timeout
// When using the js function setTimeout(), we can specify a callback fnction to be executed on time-out

setTimeout(myfunction, 1000);

function myfunction(){
    document.getElementById("demo").innerHTML = "I love you !!";
}

// in this example, myfunction is used as a callback.
// myfunction is passed to setTimeout() as an argument
// 3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:

Example
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}




// Waiting for intervals
// when using the js function setIntervals(), we can specify a callback function to be executed for each interval

setInterval(myfunct, 10000);

function function(){
    let d = new Date();
    document.getElementById("demo").innerHTML =
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
}

// In the example above, myFunction is used as a callback.

// myFunction is passed to setInterval() as an argument.

// 1000 is the number of milliseconds between intervals, so myFunction() will be called every secon


// Callback alternatives
// with asynchronous programming, javascript program can start long-running tasks, and contiue running other tasks in paralell.

// But, asynchronus programmers are difficult to write and difficult to debug.

// Because of this, most modern asynchronous js methods don't use callbacks. Instead, in js, asynchronus programming is solved using Promises instead.
