// how to spped up your js code 

// -Reduce Activity in loops


Bad:
for (let i = 0; i < arr.length; i++) {
Better Code:
let l = arr.length;
for (let i = 0; i < l; i++) {}

//     The bad code accesses the length property of an array each time the loop is iterated.

// The better code accesses the length property outside the loop and makes the loop run faster.





// Reduce DOM Access 


// Accessing the HTML DOM is very slow, compared to other JavaScript statements.

// If you expect to access a DOM element several times, access it once, and use it as a local variable:

const obj = document.getElementById("demo");
obj.innerHTML = "Hello";



// Reduce DOM Size

// keep the number od elements in the HTMl DOM small.
// This will always improve page loading, and speed up rendering (page display), especially on smaller devices.




// Avoid unnecessary variable


// Delay javascript loading
// putting our scripts athe botom of the page body lets the browser load the page first.

// while the script is downloading, the browser will not start any other downloads. In addition all parsing and rendering activity might be blocked




// Avoid using with