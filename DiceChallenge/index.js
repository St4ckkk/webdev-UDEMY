
var diceImages = [
    "./assets/dice1.png",
    "./assets/dice2.png",
    "./assets/dice3.png",
    "./assets/dice4.png",
    "./assets/dice5.png",
    "./assets/dice6.png"
  ];
var randomNumber1 = Math.floor(Math.random() * diceImages.length);
var randomNumber2 = Math.floor(Math.random() * diceImages.length);
var diceImagesElement1 = document.querySelector(".diceImage1");
var diceImagesElement2 = document.querySelector(".diceImage2");
diceImagesElement1.setAttribute("src", diceImages[randomNumber1]);
diceImagesElement2.setAttribute("src", diceImages[randomNumber2]);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else {
    document.querySelector("h1").innerHTML = "Draw!"
}
