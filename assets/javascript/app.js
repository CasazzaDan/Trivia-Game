$(document).ready(function() {
// Variables
    var correct = 0;
    var incorrect = 0;
    var currentQuestion = 0;
    var answer = [];
    

    var trvia = [
        q1 = {
			question: "What is the elemental symbol for mercury?",
			correct: 2,
			multChoice: ['Me', 'Mc', 'Hg', 'Hy']
		},
		q2 = {
			question: "What is the name of the main healing item in Dark Souls?",
			correct: 1,
			multChoice: ["Health Potion", "Estus Flask", "Orange Juice", "Ashen Flask"]
		},
		q3 = {
			question: "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
			correct: 3,
			multChoice: ["United States of America", "Soviet Union", "Poland", "India"]
		},
		q4 = {
			question: "What name does the little headcrab in &quot;Half Life 2&quot; have?",
			correct: 0,
			multChoice: ["Lamarr", "Jumperr", "Drett", "Jerry"]
		},
		q5 = {
			question: "Which Nation DID NOT have a Colony in Modern-day America?",
			correct: 0,
			multChoice: ["Portugal", "Spain", "Sweden", "Netherlands"]
		},
		q6 = {
			question: "Which of the following is not a character in the Street Fighter series?",
			correct: 3,
			multChoice: ["Laura Matsuda", "Sakura Kasugano", "Ibuki", "Mai Shiranui"]
		},
		q7 = {
			question: "In &quot;One Piece&quot;, what does &quot;the Pirate King&quot; mean to the captain of the Straw Hat Pirates?",
			correct: 1,
			multChoice: ["Promise", "Freedom", "Adventure", "Friendship"]
		},
		q8 = {
			question: "When Batman trolls the online chat rooms, what alias does he use?",
			correct: 2,
			multChoice: ["iAmBatman", "BWayne13", "JonDoe297", "BW1129"]
        }
    ];


//=====================================================
// Start Function


    $("#question_container").hide();
    $("#end_container").hide();

$("#startBtn").on("click", function(){

    $("#start_container").hide();
    $("#question_container").show();

})
}) 
    




//======================================================
// Set up game timer
var time = 30;

function timer() {
    clock = setInterval(countDown, 1000);
    function countDown() {
        if (time < 1) {
            clearInterval(clock);
            userTimeout();
        }
        if (time > 0) {
            time--;
        }
        $("#timerDiv").html("<strong>" + time + "</strong>");
        console.log(timer);
    }
}

//=====================================================
// change question function

// create a for loop to go thru the array of questions
// append the the chosen question to the div so that it displays for the played on the DOM
// after an answer is selected and the answer is checked, display the next question in the array


//=====================================================
// check answer function

// create a for loop to go thru the answer array inside the question object
// compare the string of the selected answer to the correct answer in the array
// add the score to the correct or incorrect tally depending the results of the check 

//=======================================================
// Restart function

// Set all the tallys, timer, and question array back to defaults 
// Display Start screen