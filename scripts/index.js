var btnsColours = ["green", "red", "yellow", "blue"];

var gameSequence = [];

var userClickedSequence = [];

var started = false;

var level = 0;

$(document).on("keydown", function () {
    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedSequence.push(userChosenColour);

    playAudio(userChosenColour);
    pressed(userChosenColour);

    checkAnswer(userClickedSequence.length - 1);

});

function checkAnswer(currentLevel) {

    if (gameSequence[currentLevel] === userClickedSequence[currentLevel]) {
        console.log("sucess");
        if (userClickedSequence.length === gameSequence.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playAudio("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        restartGame();
    }
}


function restartGame() {
    started = false;
    level = 0;
    userClickedSequence = [];
}

function nextSequence() {

    userClickedSequence = [];

    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = btnsColours[randomNumber];
    gameSequence.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playAudio(randomChosenColour);
}

function playAudio(name) {
    var audio = new Audio("/assets/sounds/" + name + ".mp3");
    audio.play();
}

function pressed(currentColour) {
    $('#' + currentColour).addClass('pressed');

    setTimeout(function () {
        $('#' + currentColour).removeClass('pressed');
    }, 100);
}
