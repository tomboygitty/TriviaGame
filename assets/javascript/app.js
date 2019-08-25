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
    clock = 1;
    correct = 0;
    incorrect = 0;
    unanswered = 8;
    $("input").prop("checked", false);
    // display:none all question elements
    $("#start").attr("display", "block");
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
    // display:none the START button
    $("#start").attr("display", "none");

    // Create new text and radio button elements corresponding to the questions
    
        var remain = $("<h3>");
        remain.text("Time Remaining: 60");
        remain.attr("id", "timer");
        $("#display").append(remain);

        /*
        <h3>Question 1</h3>
        <input id="q1" type="radio" name="q1" value="a1">
        <label for="q1">Answer 1</label>
        <input id="q1" type="radio" name="q1" value="a2">
        <label for="q1">Answer 2</label>
        <input id="q1" type="radio" name="q1" value="a3">
        <label for="q1">Answer 3</label>
        <input id="q1" type="radio" name="q1" value="a4">
        <label for="q1">Answer 4</label>

        <h3>Question 2</h3>
        <input id="q2" type="radio" name="q2" value="a1">
        <label for="q2">Answer 1</label>
        <input id="q2" type="radio" name="q2" value="a2">
        <label for="q2">Answer 2</label>
        <input id="q2" type="radio" name="q2" value="a3">
        <label for="q2">Answer 3</label>
        <input id="q2" type="radio" name="q2" value="a4">
        <label for="q2">Answer 4</label>

        <h3>Question 3</h3>
        <input id="q3" type="radio" name="q3" value="a1">
        <label for="q3">Answer 1</label>
        <input id="q3" type="radio" name="q3" value="a2">
        <label for="q3">Answer 2</label>
        <input id="q3" type="radio" name="q3" value="a3">
        <label for="q3">Answer 3</label>
        <input id="q3" type="radio" name="q3" value="a4">
        <label for="q3">Answer 4</label>

        <h3>Question 4</h3>
        <input id="q4" type="radio" name="q4" value="a1">
        <label for="q4">Answer 1</label>
        <input id="q4" type="radio" name="q4" value="a2">
        <label for="q4">Answer 2</label>
        <input id="q4" type="radio" name="q4" value="a3">
        <label for="q4">Answer 3</label>
        <input id="q4" type="radio" name="q4" value="a4">
        <label for="q4">Answer 4</label>

        <h3>Question 5</h3>
        <input id="q5" type="radio" name="q5" value="a1">
        <label for="q5">Answer 1</label>
        <input id="q5" type="radio" name="q5" value="a2">
        <label for="q5">Answer 2</label>
        <input id="q5" type="radio" name="q5" value="a3">
        <label for="q5">Answer 3</label>
        <input id="q5" type="radio" name="q5" value="a4">
        <label for="q5">Answer 4</label>

        <h3>Question 6</h3>
        <input id="q6" type="radio" name="q6" value="a1">
        <label for="q6">Answer 1</label>
        <input id="q6" type="radio" name="q6" value="a2">
        <label for="q6">Answer 2</label>
        <input id="q6" type="radio" name="q6" value="a3">
        <label for="q6">Answer 3</label>
        <input id="q6" type="radio" name="q6" value="a4">
        <label for="q6">Answer 4</label>

        <h3>Question 7</h3>
        <input id="q7" type="radio" name="q7" value="a1">
        <label for="q7">Answer 1</label>
        <input id="q7" type="radio" name="q7" value="a2">
        <label for="q7">Answer 2</label>
        <input id="q7" type="radio" name="q7" value="a3">
        <label for="q7">Answer 3</label>
        <input id="q7" type="radio" name="q7" value="a4">
        <label for="q7">Answer 4</label>

        <h3>Question 8</h3>
        <input id="q8" type="radio" name="q8" value="a1">
        <label for="q8">Answer 1</label>
        <input id="q8" type="radio" name="q8" value="a2">
        <label for="q8">Answer 2</label>
        <input id="q8" type="radio" name="q8" value="a3">
        <label for="q8">Answer 3</label>
        <input id="q8" type="radio" name="q8" value="a4">
        <label for="q8">Answer 4</label>

    */

    // Create timeout that counts down and runs tally() at 0
        // setTimeout(tally, 1000 * 60);
        // Create countdown interval for 60 seconds
        timer = setInterval(countdown, 1000);
})

// When timer ends OR when DONE button is clicked, tally results
// Create a tally() function to display results
function tally() {
    // jQuery select each radio button per question to check if all unchecked, else store checked in var
    $("#q1").each(function() {
        if (this.checked) {
            a1 = this.value;
        }
    })
    console.log(a1);

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