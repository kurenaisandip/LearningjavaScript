// Array iteration methods operate on every array DataTransferItemList.

// Array forEach()

// The forEach() method calls a function (a callback function) once for each array element.

const number = [12, 3, 12,1, 43,23];

let txt = "";
number.forEach(myfunction);

function myfunction(value, index,array){
    txt += value + "<br>";
}


// Array map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

