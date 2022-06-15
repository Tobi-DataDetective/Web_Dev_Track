                        Data Types
1. String: "hello"
2. NUmbers: 123 
3. Boolean: True or False

typeof(123);
alert("hello");
alert(1+2);

                        Variables

prompt("what is your name?"); this allows the user to impute a text

var myName = "Angela"; saving the piece of data into a variable called myName
    myName = "Jane"; changing the variable 

Example:
        var myName = "Tobi";
        var yourName = prompt("what is your name?");
        alert("my name is" + myName + ", welcome to my course" + yourName);

Rules for naming variables

var myVar = "name";
var my_age = "name";
var myAge = "name";
var myAge$_ = "name";


            String Concatenation
"a" + "b" = "ab"

var yourName = prompt("what is your name?");
var greeting = "Hello there, ";
alert(greeting + yourName);


            String Length
var name= "Folayan";
name.length;

Exercise: create this message ===> you have written 182 characters, you have -42 characters left

var messageInput = prompt("Input your message");
var maxCharacters = 182;
var no_of_character= messageInput.length;
var no_left= maxCharacters-no_of_character;
var messageOutput = "you have written "+no_of_character+" characters, you have "+no_left+" characters left";
alert(messageOutput);

            Slicing

var name = "Angela";
name.slice(0,1);

var messageInput = prompt("Input your message");
var maxCharacters = 182;
var no_of_character= messageInput.length;
var no_left= maxCharacters-no_of_character;
var messageOutput = "you have written "+no_of_character+" characters, you have "+no_left+" characters left";
messageInput.slice(0,maxCharacters);


        Changing cases of string

var name = "Angela";
name = name.toUpperCase();
name = name.toLowerCase();

Exercise:

var name = prompt("what is your name?");
var nameLength = name.length;
// var otherCharacter = name.slice(1,nameLength+1);
// var firstCharacter = name.slice(0,1);
// firstCharacter = firstCharacter.toUpperCase()
// otherCharacter = otherCharacter.toLowerCase()
// var nameTransfromed = firstCharacter+otherCharacter
// var message = "hello "+ nameTransfromed;
// alert(message);s

alert("hello "+ name.slice(0,1).toUpperCase()+name.slice(1,nameLength+1).toLowerCase())

                Numbers

var dogAge = prompt("input dog age");
var humanAge = (dogAge - 2) * 4 + 21;
alert("human age = "+humanAge);

                Increments and Decrement Opereration

var x = 5;
x = x+1;
x++;
x-1;
x--;
x = x+2:
x+=2

var x = 3;
var y = x++;
y += 1;         Answer = 4


               
NB: alert vs prompt vs console.log


                Creating and Calling Functions

function getMilk(){

}
getMilk();

function moveFoutTimes() {
        move();
        move();
        move();
}

function main() {
        moveFourTimes();
        turnleft();
        moveFourTimes();
}

                Parameters and Arguments
function numberOfBottle(amount) {
    var bottles = Math.floor(amount / 5);
    var outputMessage = "Purchased "+bottles+" bottles";
    return outputMessage;
}

numberOfBottle(19);


                Returns and outputs
function numberOfBottle(amount, costPerBottle) {
    var remainder = Math.floor(amount % costPerBottle);
    return remainder;
}

var change = numberOfBottle(23,10);
console.log(change);


Exercise:

function bmiCalculator(weight, height){
        var bmi = weight / Math.pow(height,2);
        return Math.round(bmi);
}

var bmi = bmiCalculator(65,1.8);

console.log(bmi);


                Generating Random NUmbers

var n Math.random();
n = n * 6;   where 6 is the range i.e (0,5.9999)
n = Math.floor(n) + 1;  instead of generating betwwen 1 and 6 it generates between 0 and 5, so we add 1

Exercise:

prompt("enter male name");
prompt("enter female name");
var n = Math.random();
n = n * 100;
var score = Math.floor(n)+1;
console.log(score + "%");


                Control Statements: Using if-Else statement

if (track === "clear") {
        goStraight();
} else {
        turnRight();
}

Exercise:

prompt("enter male name");
prompt("enter female name");
var n = Math.random();
n = n * 100;
var score = Math.floor(n)+1;
// console.log(score + "%");

if (score > 70) {
    alert("Your love score is "+score+ "%. Your love each other");
} else {
    alert("Your love score is "+score+ "%");
}

                Comparators and Equality
=== is equal to
!== is not equal to
> greater than
< less than
>= greater than equals
<= less than or equals
== checks for equality ignoring the datatypes e.g 1 == "1"


                Combining operators
 && and
 || or
 ! not

 if (score > 70) {
    alert("Your love score is "+score+ "%. Your love each other");
} 
if (score >30 && score <= 70) {
    alert("Your love score is "+score+ "%. Fairly strong");
} 
if (score <= 30){
    alert("Your love score is "+score+"%. Not strong");
}


exercise 

function isLeap(year){
    if(year % 4 === 0){
      if (year % 100 === 0){
          if (year % 400){
              return "Leap year";
          } else {
              return "Not leap year";
          }
      }  else {
          return "Leap year";
      }
    } else{
        return "Not leap year";
    }
}

alert(isLeap(2020));




                Arrays

var guestList = ["Angela","Jack","Pam","James","Lara","Jason"];
console.log(guestList);
console.log(guestList.length);
console.log(guestList[0]);
console.log(guestList.includes("Jack"));


// checking if the imputed name is in the guest list
var name = prompt("what is your name?");

console.log(guestList.includes(name));

if (guestList.includes(name)) {
    alert("Welcome");
}else{
    alert("Name not on the list");
}



                Adding Elements and Intermediate Array Techniques
name.push adds elements (to the end of list)
name.pop rmoves the last element


Exercise:

function condition(value) {
    
    if (value % 3 === 0 && value % 5 === 0) {
        return "Fizz Buzz";
    }else if (value % 3 === 0) {
        return "Fizz";
    }else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

// alert(condition(10));


var output = [];
var count = 1;
function fizzBuzz() {

    
output.push(condition(count));
count++;    
    console.log(output);
}



Exercise:
function whoIsPaying(names){
    var n = Math.random();
    n = n * names.length;
    n = Math.floor(n)+1;

    return names[n];
}

var guestList = ["Angela","Jack","Pam","James","Lara","Jason"];

alert(whoIsPaying(guestList) +"is going to buy launch today");


                While Loops
var output = [];
var count = 1;
function fizzBuzz() {

while (count <= 100) {   
output.push(condition(count));
count++;    }
    console.log(output);
}


                For loops
for (i=0; i<2; i++) {
//Do Something
}


var output = [];

function fizzBuzz() {

for (var count = 1; count <= 100; count++) {
output.push(condition(count));
    }
    console.log(output);
}


var output = [];

function fizzBuzz() {

for (var count = 100; count > 1 ; count--) {
output.push(condition(count));
    }
    console.log(output);
}


While checks for a state, it keeps running if a state is true
For is just iteration, defines how many times you want something to happen



                Fibonacci Challenge

function fibonacci(n) {
    var output = [];
    if (n===1){
        output = [0];
    }
    else if (n === 2) {
        output = [0,1];
    }
    else {
        output = [0,1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length-2] + output[output.length-1]);
        }
        
    }
    return output;
}