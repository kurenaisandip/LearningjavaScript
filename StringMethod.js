// JavaScript String methods


// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

// Example
// Slice out a portion of a string from position 7 to position 13:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);



// JavaScript String substring()
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);




// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// Example
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");



// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():



