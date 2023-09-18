const buttonColours = [
    "red", "blue", "green", "yellow"
];
let gamePattern = [];
let userClickedPattern = [];

let baseUrl = "sounds/";
let audio = {
    red: "red.mp3",
    blue: "blue.mp3",
    green: "green.mp3",
    yellow: "yellow.mp3"
};



$(".btn").click(function () { 
    
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    $("#" + userChosenColor).fadeOut(100).fadeIn(100);

    let audioFile = audio[userChosenColor];
    if (audioFile) {
        new Audio(baseUrl + audioFile).play();
    }
});




function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = randomNumber(buttonColours);
    gamePattern.push(randomChosenColour);
    $("#" + userChosenColor).fadeOut(100).fadeIn(100);
};



nextSequence();