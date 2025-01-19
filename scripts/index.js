var btnsColours = ["green", "red", "yellow", "blue"];

var gameSequence = [];

var userSequence = [];

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");

    userSequence.push(userChosenColour);

    console.log(userSequence);
});




function sequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = btnsColours[randomNumber];

    gameSequence.push(randomChosenColour);
    console.log(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("/assets/sounds/" + randomChosenColour + ".mp3");
    audio.play();
}


sequence();