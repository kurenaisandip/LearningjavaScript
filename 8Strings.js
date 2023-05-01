// Strings are for storing and manipulating text 

// We can use double or single quote in string

// Breaking long code lines
// for best readablility, programmers often like to avoid code lines longer than 80 characters. 
// if it doesn't fit in one line, the best place o break it is after on operators

document.getElementById("demo").innerHTML =
"Hello Sandip";

// We can also break up a code line withing a text string with a single blacklash

document.getElementById("demo").innerHTML ="Hello \
Sandip";

// The \ method is not the preferred method. It might not have universal support.
// Some browsers do not allow spaces behind the \ character.

// A safer way to break up a string, is to use string addition:

document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";

// length property

let txt = "hello world";
let x = txt.length;
alert(x);