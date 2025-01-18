function generateRandomNumber() {
    return Math.floor((Math.random() * 4) + 1);
}

function pickASquare() {
    var randomNumber = generateRandomNumber();
    var selectedSquare = $("button." + randomNumber);

    selectedSquare.addClass("active");

    setTimeout(() => {
        selectedSquare.removeClass("active");
    }, 200);
}

$("body").on("keydown", function (e) {
    console.log(e);
    pickASquare();
});

var clickedSquare = $("button").on("click", function clicked(e) {
    console.log(e)
    clickedSquare.addClass("active");

    setTimeout(() => {
        clickedSquare.removeClass("active");
    }, 200);    

})