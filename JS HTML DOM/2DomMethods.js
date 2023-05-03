// HTML DOM methods are actions we can perform (on HTMl Elements)
// HTML DOM properties are values (of HTML elements) that we can set or change

// The DOM Programming Interface
// The Html DOM can be accessed with js ( and with other programming languages)

// In DOM, all HTML elemenst are defined as Objects
// The programming interface is the properties and methods of each object
// A property is a value that we can get or set ( like changing the content of an HTML elements)
// A method is an action we can do ( like add or delete an HTML elemets)

Example
// The following example changes the content (the innerHTML) of the <p> elemen with id = "demo":

<html>
    <body>
        <p id = "demo"></p>

        <script>
            document.getElementById('demo').innerHTML = "hello World";
        </script>
    </body>
    </html>

    // In the example above, getElementById is a method, while innerHTML is a property.

    // The getElementById Method
    // The most common way to access an HTML element is to use the id of the element.

// In the example above the getElementById method used id="demo" to find the element.



// The innerHTML Property

// the easiest way to get the content of an element is by using the innerHTML property.
// The innerHTML property is usedful for getting or replacing the content of HTML elements.


Note 
'The innerHTML property can be used to get or change any HTML element, including <html> and <body>"
