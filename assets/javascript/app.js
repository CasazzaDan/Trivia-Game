// Variables

//=====================================================
// Use AJAX you connect to the trivia API
var queryURL = "https://opentdb.com/api.php?amount=10";

$.ajax({
    url: queryURL,
    method: "GET"
})
//======================================================
// Start Function


//=======================================================
// Hide/Display containers

$("#question_container").hide();
$("#end_container").hide();

//======================================================
// Set up game timer

//=====================================================
// Score Card Tracker

//=======================================================
// Restart function
