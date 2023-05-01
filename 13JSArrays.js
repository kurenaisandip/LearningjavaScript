// An array is a special variable which can hold more than one value

const cars = ["asd", 'asdas','asd'];

// we can also create array using this method

const car1 = [];
car1[0] = "asd";

// using the new keyword
const car2 = new Array('asd', 78);

// Access the full Array 

document.getElementById("demo").innerHTML = cars;


// Arrays are objects

// Arrays are a special objects. The typeof operator in js returns "object" for arrays.
// but js arrays are best described as arrays.


// Arrays properties and methods
// the real strenth of javascript arrays are the built-in array properties and methods:

cars.length   // return the number of elements
cars.sort()   // sort the array

// accessing the last array element
const fruits = ["banana", "orange", "apple", "mango"];
let fruit = fruits[fruits.length -1 ];


// looping array elements
let flen = fruits.length;

let text = "<ul>";
for(let i = 0; i < flen; i++){
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";


//we can also use the Array.forEach() function:

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

let text1 = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}


// adding array elements
// the easiest way to add an array element is to use the push()
fruit.push("lemon");

// we can also use the length property

fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits

// Associative Arrays
// Many programming languages support arrays with named indexes.

// Arrays with named indexes are called associative arrays (or hashes).

// JavaScript does not support arrays with named indexes.

// In JavaScript, arrays always use numbered indexes. 

// Create an array with one element:
const points = [40];

// Create an array with 40 undefined elements:
const points1 = new Array(40);  
