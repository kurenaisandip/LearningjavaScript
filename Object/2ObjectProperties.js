// Properties are the most important part of any js object.


// JavaScript Properties
// Properties are the values associated with a JavaScript object.

// A JavaScript object is a collection of unordered properties.

// Properties can usually be changed, added, and deleted, but some are read only.


// Accessing JavaScript Properties
// The syntax for accessing the property of an object is:

objectName.property      // person.age
or

objectName["property"]   // person["age"]
or

objectName[expression]   // x = "age"; person[x]


// for in loop 

// syntax
for(let variable in object){
    // code to be executed
}


const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  for (let x in person) {
    txt += person[x];
  }


  // adding new peroperties
  // we can add new proprties to an existing object by simply giving it a value.

  person. nationality = "Nepali";

  // Deleting Properties

  delete person.age;


  // Property attribute
  // all properties have a name. in addition they also have a value.
//   The value is one of the property attributes
