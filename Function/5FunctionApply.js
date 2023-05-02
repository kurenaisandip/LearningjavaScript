// Method Reuse
// with the apply() method, we can write a method that can be used on different objects.

// js apply() method 
// the apply() method is similar to the call () method


const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
  person.fullName.apply(person1);

  // difference between call() and apply()
  // the difference is:
  // the call() method takes argument seperately.
  // the apply() mehod takes arguments as an array.



  // apply() method with aruguemnts
  // the apply() method accepts arguments in an array

  const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.apply(person1, ["Oslo", "Norway"]);


