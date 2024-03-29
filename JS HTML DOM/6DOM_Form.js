// JS Form Validation

// HTML form validation can be done by JavaScript.

// If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  <!DOCTYPE html>
<html>
<head>
<script>
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>
</head>
<body>

<h2>JavaScript Validation</h2>

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  Name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>

</body>
</html>

{/* 
Automatic HTML Form Validation
HTML form validation can be performed automatically by the browser:

If a form field (fname) is empty, the required attribute prevents this form from being submitted: */}


required


/* Data Validation */

Data validation is the process of ensuring that user input is clean, correct, and useful

Typical validation tasks are:
- has the user filled in all required fields?
- has the user enetered a valid date?
- has user entered text in a numeric field?

most often the purpose of data validation is to ensure correct user input.
valdidation can be defined by many differnet methods, and deployed in many differnet ways.

server side validation is performed by a web server, after input has been sent to the server.

Client side validation is performed by a web browser input is sent to a web server.


HTMl Constraint Validation 

TML5 introduced a new HTML validation concept called constraint validation.

HTML constraint validation is based on:

- Constraint validation HTML Input Attributes
- Constraint validation CSS Pseudo Selectors
- Constraint validation DOM Properties and Methods

Constraint validation HTML input attributes 

Attribute	        Description
disabled	        Specifies that the input element should be disabled
max	                Specifies the maximum value of an input element
min	                Specifies the minimum value of an input element
pattern	            Specifies the value pattern of an input element
required	        Specifies that the input field requires an element
type 	            Specifies the type of an input element


Constraint validation CSS Psuedo Selectors
Selector	            Description
:disabled	            Selects input elements with the "disabled" attribute specified
:invalid	            Selects input elements with invalid values
:optional	            Selects input elements with no "required" attribute specified
:required	            Selects input elements with the "required" attribute specified
:valid	                Selects input elements with valid values