DOM = Document object model
document.firstElementChild.lastElementChild

<!-- Editing HTML with js -->
var heading = document.firstElementChild.lastElementChild
 heading.innerHTML = "good bye"
 heading.style.color = "red"

<!-- you could also make it do things -->
making a checkbox click= document.querySelector("input").click()

Objects can have properties and methods

Properties describe something about the object and the method is something the object can do.

Example of car prperties are:
colour, NUmber of doors, number of seats

Examples of car methods are:
brake(), drive(), park()

To use js to manipulate objects we use the dot notation e.g
car.colour; //red
car.numberOfDoors = 0;

for methods an example is
car.drive();

<!-- some HTML properties for a button  -->
innerHTML, style, firstChild

<!-- Some methods for a button are-->
click(), appendChild(), SetAttribute()


<!-- SELECTING ELEMENTS JS -->
----getElementsByTagName()    Produces an array 
document.getElementsByTagName("li");
document.getElementsByTagName("li")[2].style.color = "purple";
document.getElementsByTagName("li").length;

----getElementsByClassName()   Also produces an array of classes
getElementsByClassName("btn");

---getElementById()  Select only a single item of element
document.getElementById("title").innerHTML = "Good Bye"

---querySelector()  only returns a single item of either or class or element
querySelector("h1")
querySelector("#title")
querySelector(".btn")
querySelector("li a") ----you could also combine selectors together
querySelector("li.item") --- things that occur in the same elements
querySelector("#list a")

---querySelectorAll does the above but in arrays
querySelectorAll("#list .item")[2]


last 2 selects styles allows for complex HTML selection and manipulation while the others are more broad

Most often you will use just the 2


<!-- Manipulation CSS using JS -->
document.querySelector("li a").style.color="green"
document.querySelector("li a").style.fontSize="10rem"  in JS the styles are also in camel casing also note that the values must be specified as a string

<!-- Seperation of content -->
HTML - for content
CSS - for styling
JS - function/action

document.querySelector("button").classList.add("invisible");  this addes the invisible class to the list of class in the class button and allows for styling in CSS in the style.css file

i.e .invisible { visibility: hidden;}

document.querySelector("button").classList.remove("invisible");

document.querySelector("button").classList.toggle("invisible");

<!-- Text Manipulation -->
---innerHTML()  gives all the contents and elements inside the html tagg identified
--textContent() gives only the content inside the html tag

document.querySelector("h1").innerHTML;
document.querySelector("h1").textContent;
document.querySelector("h1").innerHTML = "<em>Good Bye</em>"

<!-- Attribute manipulation -->
examples of attributes are class, href, src 

document.querySelector("a").attributes;   displays all the attributes associated with the tag a

document.querySelector("a").getAttribute("href");  get the specific attribute from the above provided lists

document.querySelector("a").setAttribute("href", "https://www.bing.com");  manipuation of the attribute by selecting the attribute to be changed and what its to be changed to