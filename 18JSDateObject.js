// JavaScript Date Objects let us work with dates:

Examples
const d = new Date();
const d1 = new Date("2022-03-25");

Note
// Date objects are static. The "clock" is not "running".

// The computer clock is ticking, date objects are not.


// Creating Date Objects
// Date objects are created with the new Date() constructor.

// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)


// Displaying Dates
// JavaScript will (by default) output dates in full text string format:

// Example
// Sun Apr 30 2023 21:11:35 GMT+0545 (Nepal Time)

// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

Example
const d3 = new Date();
d.toString();
// The toDateString() method converts a date to a more readable format:

Example
const d2 = new Date();
d.toDateString();
