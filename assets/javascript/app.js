// Declare variables
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
    $("input").prop("checked", false);

    // Hide all elements
    $(".vis").hide();

    // Show START button
    $("#start").show();
};

// Create countdown() function that updates the displayed time left and runs tally() if ended
function countdown() {
    if (clock > 0) {
        clock--;
        $("#timer").text("Time Remaining: " + clock);
    }
    // When timer ends, run tally()
    else {
        clearInterval(timer);
        tally();
    }
}

// START button on click event that displays timer, questions and DONE button
$("#start").on("click", function() {
    // display:none the START button
    $("#start").attr("display", "none");

    // Hide START button
    $("#start").hide();

    // Show all elements
    $(".vis").show();

    // Create countdown interval for 60 seconds
    timer = setInterval(countdown, 1000);
})

// Create a tally() function to display results
function tally() {
    // jQuery select each radio button and update correct, incorrect and unanswered counters
    if ($("#a1-1").prop("checked")) {
        correct++;
        unanswered--;
    }
    if ($("#a1-2").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a1-3").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a1-4").prop("checked")) {
        incorrect++;
        unanswered--;
    }

    if ($("#a2-1").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a2-2").prop("checked")) {
        correct++;
        unanswered--;
    }
    if ($("#a2-3").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a2-4").prop("checked")) {
        incorrect++;
        unanswered--;
    }

    if ($("#a3-1").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a3-2").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a3-3").prop("checked")) {
        correct++;
        unanswered--;
    }
    if ($("#a3-4").prop("checked")) {
        incorrect++;
        unanswered--;
    }

    if ($("#a4-1").prop("checked")) {
        correct++;
        unanswered--;
    }
    if ($("#a4-2").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a4-3").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a4-4").prop("checked")) {
        incorrect++;
        unanswered--;
    }

    if ($("#a5-1").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a5-2").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a5-3").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a5-4").prop("checked")) {
        correct++;
        unanswered--;
    }

    if ($("#a6-1").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a6-2").prop("checked")) {
        correct++;
        unanswered--;
    }
    if ($("#a6-3").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a6-4").prop("checked")) {
        incorrect++;
        unanswered--;
    }

    if ($("#a7-1").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a7-2").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a7-3").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a7-4").prop("checked")) {
        correct++;
        unanswered--;
    }

    if ($("#a8-1").prop("checked")) {
        correct++;
        unanswered--;
    }
    if ($("#a8-2").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a8-3").prop("checked")) {
        incorrect++;
        unanswered--;
    }
    if ($("#a8-4").prop("checked")) {
        incorrect++;
        unanswered--;
    }

    $("#display").empty();

    var h = $("<h3>");
    h.html("All Done!<br><br>");
    $("#display").append(h);

    var p1 = $("<p>");
    p1.text("Correct Answers: " + correct);
    $("#display").append(p1);

    var p2 = $("<p>");
    p2.text("Incorrect Answers: " + incorrect);
    $("#display").append(p2);

    var p3 = $("<p>");
    p3.text("Unanswered: " + unanswered);
    $("#display").append(p3);
};

// DONE button on click event that runs tally()
$("#done").on("click", tally);

// Run initialize to begin
initialize();