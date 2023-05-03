// The HTML DOM allows JS to change the content of HTML elements

// Changing HTML Content
// the easiest way to modify the content of an HTML element is by using the innerHTML property
// to change the content of an HTMl element, use this syntax

document.getElementById(id).innerHTML = new HTML 

// This example changes the content of a <p> elements

<html>
    <body>
        <p id = "p1"> Hello World</p>

        <script>
            document.getElementById("p1").innerHTML = "Hi Sandip";
        </script>
    </body>
    </html>


// Changing the value of an attibute 
// to change the value of an Hml attribute, use this syntax:

document.getElementById(id).attribute = new value 

// this example changes the value of the src attribute of an <img> element

<!DOCTYPE html>
<html>
<body>
    <img id = "img1" src="smiley.gif"></img>

    <script>
        document.getElementById("img1").src = "land.jpg";
    </script>
</body>
</html>



// Dynamic HTMl content
// js can create dynamic content

<!DOCTYPE html>
<html>
<body>

<script>
document.getElementById("demo").innerHTML = "Date : " + Date(); </script>

</body>
</html>



// document.write()
// In JavaScript, document.write() can be used to write directly to the HTML output stream:

<!DOCTYPE html>
<html>
<body>

<p>Bla bla bla</p>

<script>
document.write(Date());
</script>

<p>Bla bla bla</p>

</body>
</html>


// Never use document.write() after the document is loaded. It will overwrite the document.