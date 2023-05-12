// Static class methods are defined on the class itself.
// we cannot call a static method on an object, only on an object class



// if we want to use the myCar object inside the static method, we can send it as a parameter

class Car {
    constructor(name){
        this.name = name;
    }
    static hello(c) {
        return "Hello" + c.name;
    }
}

const myCar = new Car("ford");
document.getElementById("demo").innerHTML = Car.hello(myCar);