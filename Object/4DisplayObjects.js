// Some common solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()



// Displaying object properties
// the properties of an object can be displayed as a string:

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  document.getElementById("demo").innerHTML=
  person.age + "," + person.city + "," + person.name;


  //displaying the object in a loop

//   the properties of an objec can be collected in a loop

let txt = "";
for(let x in person){
    txt += person[x] + "";
}
document.getElementById("demo").innerHTML = txt;


// using object.values()
// any js objects can be converted to an array using Objects.values()

const myarray =Object.values(person);

document.getElementById("demo").innerHTML = myArray;




// Using JSON.stringify()
// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

let mystring = JSON.stringify(person);

document.getElementById("demo").innerHTML = myString;

// The result will be a string following the JSON notation:

{"name":"John","age":50,"city":"New York"}

// JSON.stringify converts dates into strings:

// stringify will not work with function

const person = {
    name: "John",
    age: function () {return 30;}
  };
  
  let myString = JSON.stringify(person);
  document.getElementById("demo").innerHTML = myString;

  // but this can be fixed by converting the function into string before stringify.

  const person = {
    name: "John",
    age: function () {return 30;}
  };
  person.age = person.age.toString();
  
  let myString = JSON.stringify(person);
  document.getElementById("demo").innerHTML = myString;





//   Stringify Arrays
// It is also possible to stringify JavaScript arrays:

Example
const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString;