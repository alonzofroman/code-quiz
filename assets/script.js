//Link divs to javascript
const scoreBox = document.getElementById("scores");
const startButton = document.getElementById("start-button");
const countDownTimer = document.getElementById("timer");
const highScores = document.getElementById("high-scores");
const scoreSlot = document.getElementById("saved-scores");
const displayScoreButton = document.getElementById("display-button");

const quizBox = document.getElementById("quiz");
const questionSlot = document.getElementById("question");
const answerChoices = document.getElementById("answers");
const optionASlot = document.getElementById("aSlot");
const optionBSlot = document.getElementById("bSlot");
const optionCSlot = document.getElementById("cSlot");
const optionDSlot = document.getElementById("dSlot");

//Write every question on the quiz with three answer options

const questionList = [
   //Question 1
    {
        question: "What does var mean in relation to Javascript?",
            optionA: "Variant",
            optionB: "Variable",
            optionC: "Variety",
            optionD: "Variance",
            correctAnswer: "B",
    },
    //Question 2
    {
        question: "Which tag do you use to link an external Javascript page to HTML?",
            optionA: "link",
            optionB: "style",
            optionC: "script",
            optionD: "href",
            correctAnswer: "C",
    },
    //Question 3
    {
        question: "The three popup boxes in Javascript are alert, confirm and _____",
            optionA: "notify",
            optionB: "message",
            optionC: "prompt",
            optionD: "popup",
            correctAnswer: "C",
    },
    //Question 4
    {
        question: "Which of the following is not a scope in Javascript?",
            optionA: "line",
            optionB: "global",
            optionC: "local",
            optionD: "block",
            correctAnswer: "A",
    },
    //Question 5
    {
        question: "Which of the following is not a loop statement in Javascript?",
            optionA: "for",
            optionB: "while",
            optionC: "if",
            optionD: "do",
            correctAnswer: "C",
    },
    //Question 6
    {
        question: "JSON stands for Javascript Object ______?",
        optionA: "Notation",
        optionB: "Number",
        optionC: "Nachos",
        optionD: "Nabber",
        correctAnswer: "A",
    }
        
]

//Set a user score, starting at zero
var userScore = 0;

//Variable to pull question number from
var questionNumber = 0;

//Have them be displayed as text one at a time
function displayQuestion() {
    var currentQuestion = questionList[questionNumber];  //Set variables to iterate through question list one at a time
    questionSlot.innerHTML += "<p>" + currentQuestion.question + "</p>";
    optionASlot.innerHTML += currentQuestion.optionA;
    optionBSlot.innerHTML += currentQuestion.optionB;
    optionCSlot.innerHTML += currentQuestion.optionC;
    optionDSlot.innerHTML += currentQuestion.optionD;
};

//Function to clear text from previous question
function clearQuizBox() {
    questionSlot.innerHTML = '';
    optionASlot.innerHTML = '';
    optionBSlot.innerHTML = '';
    optionCSlot.innerHTML = '';
    optionDSlot.innerHTML = '';
};


//Set a Timer
var secondsLeft = 60;

function countDown() {
    
    var timeInterval = setInterval(function() {
        secondsLeft--;

        countDownTimer.textContent = "Time Left: " + secondsLeft;

    if (secondsLeft === 0) {
        clearInterval(timeInterval);
        // endQuiz();
    }


    },1000);
}


//Display the user's score and track it locally when the quiz is complete, allowing the user to input their initials
//Function for the end of the quiz
function endQuiz() {
    
    let finalScore = userScore * secondsLeft;
    var initials = prompt("Your Score (correct answers x time left): " + finalScore, "Please enter your initials");
    var initialScore = {
        user: initials,
        score: finalScore,};
        if (initials !== null) {
            localStorage.setItem("storedScores", JSON.stringify(initialScore));
        }
    
}

var savedScores = [];

function gatherScores() {
    var storedScores = JSON.parse(localStorage.getItem("storedScores"));
    if (storedScores !== null) {
        savedScores.push(storedScores);
        }
}
    
//Function to display scores on click
function displayScores() { 
    
    gatherScores();

       for (let i = 0; i < savedScores.length; i++) {
           var scoreItem = savedScores[i];
           console.log(savedScores);
           var stringItem = JSON.stringify(scoreItem);
        var li = document.createElement("li");
        li.textContent = stringItem;
        scoreSlot.appendChild(li);
       }
}

//Start the quiz
function startQuiz() {
    clearQuizBox();
    displayQuestion();
    countDown();
}

// Function to check answers
answerChoices.addEventListener("click", function (event) {
    var checkedAnswer = event.target.getAttribute("data-value");
   
//Check if the quiz is over and trigger end quiz function
    if (questionNumber == questionList.length - 1 && checkedAnswer === questionList[questionNumber].correctAnswer) {
        clearQuizBox();
        userScore++; 
        endQuiz(); }

    else if (questionNumber == questionList.length - 1) {
        clearQuizBox();
        endQuiz(); }
    
        //When answered, move to the next question //Take the user's input and check if it matches the predetermined answers
    else if (checkedAnswer === questionList[questionNumber].correctAnswer) {
            clearQuizBox();
            questionNumber++;
            userScore++; //Add to user score if correct
            displayQuestion();    
        }
        
    else {
            clearQuizBox();
            questionNumber++;
            userScore--;
            secondsLeft -= 5; //If incorrect, take off time from the timer
            displayQuestion();
        }
    
    }) 












