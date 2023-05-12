// this page teches us how to find and access HTMl elements in an HTMl

// Finding HTML Elements 
// often, with js we want to manipulate HTML elements 
// To do so, we have to find the elements first. there are several ways to do this

// - finding HTML elements by id 
// - finding HTML elements by tag name
// - finding HTML elements by class name
// - finding HTML elements by CSS Selector 
// - finding HTML elements by HTML object collections

// finding html elements by id
// the easiest way to find an HTMl element in the Dom,is by using the element id
const element = document.getElementById("intro");

// if the element is found, the method will return the element as an object ( in element).
// if the element is not found, element will contain null



// Finding HTML Elements by Tag Name
// This example finds all <p> elements:
const element = document.getElementsByTagName("p");


// This example finds the element with id="main", and then finds all <p> elements inside "main":

Example
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");



// Finding HTML Elements by Class Name
// If you want to find all HTML elements with the same class name, use getElementsByClassName().

const x = document.getElementsByClassName("intro");



// Finding HTML Elements by CSS Selectors
// If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
const x = document.querySelectorAll("p.intro");






// Finding HTML Elements by HTML Object Collections
// This example finds the form element with id="frm1", in the forms collection, and displays all element values:

const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;

