// Method 1

// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1 * 5;
// randomNumber1 = Math.floor(randomNumber1) + 1;

// var randomNumber2 = Math.random();
// randomNumber2 = randomNumber2 * 5;
// randomNumber2 = Math.floor(randomNumber2) + 1;



// function roll1() {
//     if (randomNumber1 === 1) {
//         return "images/dice1.png";
//     } else if (randomNumber1 === 2) {
//         return "images/dice2.png";
//     } else if (randomNumber1 === 3) {
//         return "images/dice3.png";
//     } else if (randomNumber1 === 4) {
//         return "images/dice4.png";
//     } else if (randomNumber1 === 5) {
//         return "images/dice5.png";
//     } else {
//         return "images/dice6.png";
//     }
// }


// function roll2() {
//     if (randomNumber2 === 1) {
//         return "images/dice1.png";
//     } else if (randomNumber2 === 2) {
//         return "images/dice2.png";
//     } else if (randomNumber2 === 3) {
//         return "images/dice3.png";
//     } else if (randomNumber2 === 4) {
//         return "images/dice4.png";
//     } else if (randomNumber2 === 5) {
//         return "images/dice5.png";
//     } else {
//         return "images/dice6.png";
//     }
// }
// var diceRoll1 = roll1();
// var diceRoll2 = roll2();



// document.querySelector(".img1").setAttribute("src", diceRoll1);
// document.querySelector(".img2").setAttribute("src", diceRoll2);

// function champion() {
//     if (diceRoll1 < diceRoll2) {
//         return "Player2 Wins";
//     } else if (diceRoll1 > diceRoll2) {
//         return "Player1 Wins";
//     } else {
//         return "Draw";
//     }

// }
// var champ = champion();
// document.querySelector("h1").innerHTML = champion();
// // alert("working")




// // Method 2

// First Dice
randomNumber1 = Math.floor(Math.random() * 5) + 1;
imgLink1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", imgLink1);
// Second Dice
randomNumber2 = Math.floor(Math.random() * 5) + 1;
imgLink2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imgLink2);

// Winner
if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins🚩";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player1 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}