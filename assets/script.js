//Link divs to javascript
const scoreBox = document.getElementById("scores");
const startButton = document.getElementById("start-button");
const countDownTimer = document.getElementById("timer");

const quizBox = document.getElementById("quiz");
const questionSlot = document.getElementById("question");
const optionASlot = document.getElementById("optionA");
const optionBSlot = document.getElementById("optionB");
const optionCSlot = document.getElementById("optionC");
const optionDSlot = document.getElementById("optionD");



//Write every question on the quiz with three answer options

const questionList = [
   //Question 1
    {
        question: "What does var mean in relation to Javascript?",
            optionA: "Variant",
            optionB: "Variable",
            optionC: "Variety",
            optionD: "Variance"
    },
    //Question 2
    {
        question: "Which tag do you use to link an external Javascript page to HTML?",
            optionA: "link",
            optionB: "style",
            optionC: "script",
            optionD: "href",
    },
    //Question 3
]

//Set variables for true statements when pressed
var selectA = optionA.value = false;
var selectB = optionB.value = false;
var selectC = optionC.value = false;
var selectD = optionD.value = false;

function selectAnswer() {
     selectA = !selectA;  //I'm trying to get this working
 };

optionA.addEventListener("click", selectAnswer());



console.log(selectA);


//Set at visible timer to create a time limit, ending the quiz when it hits zero



function startQuiz() {

//Set a user score, starting at zero
let userScore = 0; 

let questionNumber = 0;
let currentQuestion = questionList[questionNumber];

//Have them be displayed as text one at a time

questionSlot.innerHTML += "<p>" + currentQuestion.question + "</p>";
optionASlot.innerHTML += currentQuestion.optionA;
optionBSlot.innerHTML += currentQuestion.optionB;
optionCSlot.innerHTML += currentQuestion.optionC;
optionDSlot.innerHTML += currentQuestion.optionD;

}

//Take the user's input and check if it matches the predetermined answers

//If correct, add one point to user score

//If incorrect, take off time from the timer

//When answered, move to the next question

//Display the user's score and track it locally when the quiz is complete, allowing the user to input their initials


startQuiz();