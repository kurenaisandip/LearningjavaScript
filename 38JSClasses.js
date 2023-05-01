// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// JavaScript Classes are templates for JavaScript Objects.

Syntax 
class ClassName {
    constructor(){ }
}

Example
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    
    }
}

// js class is not an object 
// it is a template for js objects

// using a class 
// when we have a class, we can use the class to create objects.

const mycar1 = new Car("ford", 2014);
const mycar2 = new Car("Audi", 1298);

// the constructor method is called automatically when a new object is created.

// The constructor method
// the cosntructor method is a special method:
//  it has to have the exact name "constructor"
// it is executed automatically when a new object is created.
// it is used to initialize object properties

// If you do not define a constructor method, JavaScript will add an empty constructor method.






// Class Methods
// Class methods are created with the same syntax as object methods.

class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
  }

//   create a class method named 'age', that returns the Car age:

class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age(){
        const date = new Car("Ford", 2014);
        document.getElementById("demo").innerHTML=
        "my car is" +mycar.age() + "year old."    }
}
