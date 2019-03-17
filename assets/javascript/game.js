$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var guessnumber = 0;
    var randomnumber = Math.floor(Math.random() * 102) + 19;
    $("#rnumber").html(randomnumber);
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    console.log("Random Number: " + randomnumber);
    console.log("The value of the blue crystal is: " + crystal1);
    console.log("The value of the clear crystal is: " + crystal2);
    console.log("The value of the green crystal is: " + crystal3);
    console.log("The value of the red crystal is: " + crystal4);

    function start() {
        randomnumber = Math.floor(Math.random() * 102) + 19;
        $("#rnumber").html(randomnumber);
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        guessnumber = 0;
        $("#guessnumber").html(guessnumber);
        console.log("Random Number: " + randomnumber);
        console.log("The value of the blue crystal is: " + crystal1);
        console.log("The value of the clear crystal is: " + crystal2);
        console.log("The value of the green crystal is: " + crystal3);
        console.log("The value of the red crystal is: " + crystal4);
    }
    function youwin() {
        wins++;
        $("#wins").html("Wins: " + wins);
        $("#message").html("You won!!");
        start();
    }
    function youlose() {
        losses++;
        $("#losses").html("Losses: " + losses);
        $("#message").html("You lost!!");
        start();
    }
    $("#crystal1").on("click", function () {
        guessnumber = guessnumber + crystal1;
        console.log("Accumulated score: " + guessnumber);
        $("#guessnumber").html(guessnumber);
        if (guessnumber === randomnumber) {
            youwin();
        }
        else if (guessnumber > randomnumber) {
            youlose();
        }
    });
    $("#crystal2").on("click", function () {
        guessnumber = guessnumber + crystal2;
        console.log("Accumulated score: " + guessnumber);
        $("#guessnumber").html(guessnumber);
        if (guessnumber === randomnumber) {
            youwin();
        }
        else if (guessnumber > randomnumber) {
            youlose();
        }
    });
    $("#crystal3").on("click", function () {
        guessnumber = guessnumber + crystal3;
        console.log("Accumulated score: " + guessnumber);
        $("#guessnumber").html(guessnumber);
        if (guessnumber === randomnumber) {
            youwin();
        }
        else if (guessnumber > randomnumber) {
            youlose();
        }
    });
    $("#crystal4").on("click", function () {
        guessnumber = guessnumber + crystal4;
        console.log("Accumulated score: " + guessnumber);
        $("#guessnumber").html(guessnumber);
        if (guessnumber === randomnumber) {
            youwin();
        }
        else if (guessnumber > randomnumber) {
            youlose();
        }
    });
});
