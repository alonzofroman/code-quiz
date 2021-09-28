//Link divs to javascript
const scoreBox = document.getElementById("scores");
const startButton = document.getElementById("start-button");
const countDownTimer = document.getElementById("timer");

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

//Set variables for true statements when pressed


//Set at visible timer to create a time limit, ending the quiz when it hits zero



//Have them be displayed as text one at a time
function displayQuestion() {
    let questionNumber = 0;
    let currentQuestion = questionList[questionNumber];  //Set variables to iterate through question list one at a time
    questionSlot.innerHTML += "<p>" + currentQuestion.question + "</p>";
    optionASlot.innerHTML += currentQuestion.optionA;
    optionBSlot.innerHTML += currentQuestion.optionB;
    optionCSlot.innerHTML += currentQuestion.optionC;
    optionDSlot.innerHTML += currentQuestion.optionD;
}

var checkedAnswer = document.querySelector('input[name="option"]:checked'); 
console.log(checkedAnswer);

// function clickNext() {
//     if (correctAnswer===
// }

function startQuiz() {

//Set a user score, starting at zero
let userScore = 0; 

displayQuestion();



}



//Take the user's input and check if it matches the predetermined answers

//If correct, add one point to user score

//If incorrect, take off time from the timer

//When answered, move to the next question

//Display the user's score and track it locally when the quiz is complete, allowing the user to input their initials


