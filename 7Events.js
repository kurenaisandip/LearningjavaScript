// Javascript Events 

// HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

// With single quotes:

<element event = 'some javaScript'></element>

// With Double Quotes:

{/* <element event1 = "Some javascript"></element> */}

// In the following example, an onclick attribute (with code), is added to a <button> element:

// Example
// <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

// javaScript code is often several lines long. It is more common to see event attributes calling functions.

<button onclick="displayDate()">The time is </button>

// Common Html Events

// Event	        Description
// onchange	    An HTML element has been changed
// onclick	        The user clicks an HTML element
// onmouseover	    The user moves the mouse over an HTML element
// onmouseout	    The user moves the mouse away from an HTML element
// onkeydown	    The user pushes a keyboard key
// onload	        The browser has finished loading the page

// JS Event Handlers

// Event handlers can be used to handle and verify user input, user actions, and browser actions:
// - Things that should be done every time a page loads
// - Things that should be done when the page is closed
// - Action that should be performed when a user clicks a button
// - Content that should be verified when a user inputs data 
// - and manymore 

// many different methods can be used to let javascript work with events:

// -Html event attribute can execute js code directly 
// - Html event attribute can call javascript functions
// You can assign your own event handler functions to HTML elements
// You can prevent events from being sent or being handled
// And more ...