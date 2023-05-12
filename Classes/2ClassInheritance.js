// Class Inheritance
// to create a class inheritance, use the word extends keyword

// a class created with a class nheritance inherits all the methods from another class

class Car {
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'I have a' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();









// Getters and Setters
// classes allows us to use getters and setters.
// it can be smart to use getters and setter s for our properties, especially if we want to do something special with the value before returning them, or before we set them
// to add getters and setters in the class, use the get and set keywords.


class Truck {
    constructor(brand) {
        this.truckname = brand;
    }
    get tname(){
        return this.tname;
    }
    set tname(x){
        this.tname = x;
    }
}

const mytruck = new Truck("Tata");

document.getElementById("Demo").innerHTML = mytruck.tname;

note 
// even if the getter is a method, we do not use paranthese when we want to get the peoperty value





// Hoisting
// unlike functions, and other js declarations, class declarations are not hoisted.
// this means that we must declare a class beofre we can us it 