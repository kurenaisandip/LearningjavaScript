// JS Classes are templates for javascript objects


//JS Class Syntax
// use the kwyword class to create a class
// always add a method constructor()

class ClassName {
    constructor() {}
}


class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

// using a class
// when we have a class, we can use the class to create objects

const mycar1 = new Car("Ford", 2017);
const mycar2 = new Car("Audi", 2019);

note 
// the constructor method is called automatically when a new object is created

