//Link divs to javascript
const scoreBox = document.getElementById("scores");
const startButton = document.getElementById("start-button");
const countDownTimer = document.getElementById("timer");
const highScores = document.getElementById("high-scores");

const quizBox = document.getElementById("quiz");
const questionSlot = document.getElementById("question");
const optionASlot = document.getElementById("aSlot");
const optionBSlot = document.getElementById("bSlot");
const optionCSlot = document.getElementById("cSlot");
const optionDSlot = document.getElementById("dSlot");


const optionASelect = document.getElementById("optionA");
const optionBSelect = document.getElementById("optionB");
const optionCSelect = document.getElementById("optionC");
const optionDSelect = document.getElementById("optionD");
const nextButton = document.getElementById("nextButton");



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
]

//Set at visible timer to create a time limit, ending the quiz when it hits zero



//Set a user score, starting at zero
var userScore = 0;

scoreBox.innerHTML += "<p>User Score: " + userScore + "</p>";

var questionNumber = 0;


//Have them be displayed as text one at a time
function displayQuestion() {
    var currentQuestion = questionList[questionNumber];  //Set variables to iterate through question list one at a time
    questionSlot.innerHTML += "<p>" + currentQuestion.question + "</p>";
    optionASlot.innerHTML += currentQuestion.optionA;
    optionBSlot.innerHTML += currentQuestion.optionB;
    optionCSlot.innerHTML += currentQuestion.optionC;
    optionDSlot.innerHTML += currentQuestion.optionD;
}

//Function to clear text from previous question
function clearQuizBox() {
    questionSlot.innerHTML = '';
    optionASlot.innerHTML = '';
    optionBSlot.innerHTML = '';
    optionCSlot.innerHTML = '';
    optionDSlot.innerHTML = '';
    optionASelect.checked = false;
    optionBSelect.checked = false;
    optionCSelect.checked = false;
    optionDSelect.checked = false;
}

// function clickNext() {
//     if (correctAnswer===
// }



function startQuiz() {


 

displayQuestion();

}

function nextQuestion() {
    // if (document.querySelector('input[name="option"].checked')) {   
    //     var checkedAnswer = document.getElementById('option').value;
    // }
    // let checkedAnswer = document.querySelector('input[name="option"]:checked'); //This part is not working
    var checkedAnswer = document.querySelector( 'input[name="option"]:checked'); 
    if (checkedAnswer === questionList[questionNumber].correctAnswer) {
        clearQuizBox();
        questionNumber++;
        userScore++;
        displayQuestion();
    }

    else {
        clearQuizBox();
        questionNumber++;
        displayQuestion();
    }
    
};

console.log(userScore);


//Take the user's input and check if it matches the predetermined answers

//If correct, add one point to user score

//If incorrect, take off time from the timer

//When answered, move to the next question

//Display the user's score and track it locally when the quiz is complete, allowing the user to input their initials


