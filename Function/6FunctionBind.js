// Function Borrowing

// with the bind() method, an object can borrow a method from another object.

// for example
// the member object borows the fullname method from the person object. 

const person = {
    firstName: "Sandip",
    lastName: "Rai",
    fullName: function (){
        return this.firstName + "" + this.lastName;
    }
}

const member = {
    firstName: "Ashmi",
    lastName: "Bhusal",
}

let fullName = person.fullName.bind(member);






// Preserving this
// somtimes the bind() method has too be used to prevent losing this.

const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  
  person.display();

  // when a function is used as a callback, this is lost
// the bind() method solves the problem.

const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  
  let display = person.display.bind(person);
  setTimeout(display, 3000);



  note 
  // this is not a variable. It is akeyword. we cannot change the value of this