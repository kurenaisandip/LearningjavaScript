// iterable objects are objects that can be iterated over with for..of
// technically, iterables must implement the Symbol..iterator method

// iterating over s string

for (const x of "W3Schools") {
    // code block to be executed
  }


//   Iterating Over an Array

for (const x of [1,2,3,4,5]) {
    // code block to be executed
  }

//   JavaScript Iterators
// The iterator protocol defines how to produce a sequence of values from an object.

// An object becomes an iterator when it implements a next() method.

// The next() method must return an object with two properties:

// value (the next value)
// done (true or false)


// value	    The value returned by the iterator
//              (Can be omitted if done is true)
// done	        true if the iterator has completed
// false        if the iterator has produced a new value


// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }

  // create iterable
  const n = myNumbers();
  n.next();  // return 10
  n.next();  // return 20
  n.next();  // return 30

  Note 
  // The problem with home made iterable is that it doesn't support for of statement

  