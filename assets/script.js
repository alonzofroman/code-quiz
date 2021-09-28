//Link divs to javascript
const scoreBox = document.getElementById("scores");
const startButton = document.getElementById("start-button");
const countDownTimer = document.getElementById("timer");
const highScores = document.getElementById("high-scores");

const quizBox = document.getElementById("quiz");
const questionSlot = document.getElementById("question");
const answerChoices = document.getElementById("answers");
const optionASlot = document.getElementById("aSlot");
const optionBSlot = document.getElementById("bSlot");
const optionCSlot = document.getElementById("cSlot");
const optionDSlot = document.getElementById("dSlot");


// const optionASelect = document.getElementById("optionA");
// const optionBSelect = document.getElementById("optionB");
// const optionCSelect = document.getElementById("optionC");
// const optionDSelect = document.getElementById("optionD");
// const nextButton = document.getElementById("nextButton");



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
    },
    //Question 5
    {
        question: "Which of the following is not a loop statement in Javascript?",
            optionA: "for",
            optionB: "while",
            optionC: "if",
            optionD: "do",
    },
    //End Question
        
]

//Set at visible timer to create a time limit, ending the quiz when it hits zero



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
    // optionASelect.checked = false;
    // optionBSelect.checked = false;
    // optionCSelect.checked = false;
    // optionDSelect.checked = false;
};


//Set a Timer
var secondsLeft = 60;

function countDown() {

    var timeInterval = setInterval(function() {
        secondsLeft--;

        countDownTimer.textContent = "Time Left: " + secondsLeft;

    if (secondsLeft === 0) {
        clearInterval(timeInterval);
        endQuiz();
    }
    },1000);
}




//Function for the end of the quiz
function endQuiz() {
    var initials = prompt("Your Score: " + userScore, "Please enter your initials");
    var finalScore = {
        user: initials,
        score: userScore};
    
    }


// var checkedAnswer = document.querySelector('input[name="option"]:checked');


function startQuiz() {
    clearQuizBox();
    displayQuestion();
    countDown();

}
// var checkedAnswer = document.querySelector('input[type=radio][name=option]:checked');

// while (questionNumber<6) {
    // displayQuestion();
    answerChoices.addEventListener("click", function (event) {
        var checkedAnswer = event.target.getAttribute("data-value");

    console.log(checkedAnswer);
   
    if (questionNumber == questionList.length - 1 && checkedAnswer === questionList[questionNumber].correctAnswer) {
        userScore++;
        endQuiz(); }

    else if (questionNumber == questionList.length - 1) {
        endQuiz(); }
    
        //When answered, move to the next question //Take the user's input and check if it matches the predetermined answers
    else if (checkedAnswer === questionList[questionNumber].correctAnswer) {
            clearQuizBox();
            questionNumber++;
            userScore++;
            console.log(userScore);
            displayQuestion();
            // console.log(questionNumber);
        }
        
    
    else {
            clearQuizBox();
            questionNumber++;
            userScore--;
            console.log(userScore);
            displayQuestion();
            // console.log(questionNumber);
        }
    
        
    }) 




// scoreBox.innerHTML += "<p>User Score: " + userScore + "</p>";
// function nextQuestion() {
    // if (document.querySelector('input[name="option"].checked')) {   
    //     var checkedAnswer = document.getElementById('option').value;
    // }
     //This part is not working
     
    





//If correct, add one point to user score

//If incorrect, take off time from the timer



//Display the user's score and track it locally when the quiz is complete, allowing the user to input their initials


