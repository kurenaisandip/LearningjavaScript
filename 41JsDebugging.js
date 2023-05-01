// Errors can (will) happen, every time you write some new computer code.

// Code Debugging
// Programming code might contain syntax errors, or logical errors.

// Many of these errors are difficult to diagnose.

// Often, when programming code contains errors, nothing will happen. There are no error messages, and you will get no indications where to search for errors.

// Searching for (and fixing) errors in programming code is called code debugging.



// The console.log() Method
// If your browser supports debugging, you can use console.log() to display JavaScript values in the debugger window: 


<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>

<script>
a = 5;
b = 6;
c = a + b;
console.log(c);
</script>

</body>
</html>


// Setting Breakpoints
// in the debugger window, we can set breakpoints in the js code.
// at each breakpoint, js will stop executing , and let us examine js values.
// after examining values, we can resume the execution of code(typically with a play button)


// The debugger keyword
// The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.

let x = 15 * 5;
debugger;
document.getElementById("demo").innerHTML = x;

// Debugging is the process of testing, finding, and reducing bugs (errors) in computer programs.
// The first known computer bug was a real bug (an insect) stuck in the electronics.