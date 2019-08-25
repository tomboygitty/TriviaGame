// Declare variables
var a1;
var a2;
var a3;
var a4;
var a5;
var a6;
var a7;
var a8;
var timer;
var clock;
var correct;
var incorrect;
var unanswered;

// Initialize function to clear radio buttons and display START button
function initialize() {
    clock = 60;
    correct = 0;
    incorrect = 0;
    unanswered = 8;
    $("#q1").empty();
    $("#q2").empty();
    $("#q3").empty();
    $("#q4").empty();
    $("#q5").empty();
    $("#q6").empty();
    $("#q7").empty();
    $("#q8").empty();
    $("#display").empty();
    $("#display").html("<button id='start'>START</button>");
};

// Create countdown() function that updates the displayed time left
function countdown() {
    if (clock > 0) {
        clock--;
        $("#timer").text("Time Remaining: " + clock);
    }
    else {
        clearInterval(timer);
        tally();
    }
}

// START button on click event that displays timer, questions and DONE button
$("#start").on("click", function() {
    // Create new text and radio button elements corresponding to the questions
    window.onload = function() {
        // Create timeout that counts down and runs tally() at 0
        // setTimeout(tally, 1000 * 60);
        // Create countdown interval for 60 seconds
        timer = setInterval(countdown, 1000);
    };
})

// When timer ends OR when DONE button is clicked, tally results
// Create a tally() function to result 
function tally() {

};

// DONE button on click event that runs tally()
$("#done").on("click", tally);

initialize();