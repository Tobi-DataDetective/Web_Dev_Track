 $("h1").css("color", "red");

<!-- selecting elemnts -->
document.querySelector("h1")   =   $("h1")

document.querySelectorAll("button")  =  $("button")

console.log($("h1").css("font-size"));  === return the size of font

$("h1").css("font-size","5rem"); == sets the font size;           $


<!-- proper way of styling with Jquery -->

--- style.css file

.big-title {
    font-size: 10rem;
    color:yellow;
    font-family: cursive;
}

--- index.js file

$("h1").addClass("big-title");



$("h1").removeClass("big-title");

<!-- adding multiple classes -->
$("h1").addClass("big-title margin-50");




$("h1").hasClass("big-title");      == Checking if there is a class in the property



<!-- Manipulating text in jquery -->
$("h1").text("bye")    at/changing the text to bye          $

$("button").html("<em>hey</em>");     adding html to element
$



<!-- Manipulating Attributes -->
$("img").attr("src"); 
$

$("a").attr("href", "http.yahoo.com")
$
$("h1").attr("class")  return all the classes of the h1 element
$

<!-- Adding Event Listeners with JQuery --> Click listener
for (var i = 0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("Click", function(){
        document.querySelector("h1").style.color = "purple"
    })
}


---Rewriting the above with JQuery

$("button").click(function() {
    $("h1").css("color","purple");
});

$

----- Keyboard Listener
$("input").keypress(function(event){
    console.log(event.key);
})

$("h1").on("mouseover",function(){
    $("h1").css("color","purple")
})



$("h1").on("click",function(){
    $("h1").css("color","purple")
})

<!-- Adding Removing Elements on the fly -->

$("h1").before("<button>New<button>");
$("h1").after("<button>New<button>");
$("h1").prepend("<button>New<button>");
$("h1").append("<button>New<button>");

$("h1").remove("<button>New<button>");
$("button").remove()


<!-- Animation -->
$("button").on("click",function() {
    $("h1").hide;
})

    $("h1").show();
    $("h1").toggle();
    $("h1").fadeIn();
    $("h1").fadeOut();
slideUp();
slideToggle;
.animate();

    $("h1").animate({margin:"20%"});

--Chaining the animation
    $("h1").slideUp().slideDown().animate({margin:"20%"});
    
