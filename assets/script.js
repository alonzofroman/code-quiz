//Link divs to javascript
const scoreBox = document.getElementById("scores");
const startButton = document.getElementById("start-button");
const countDownTimer = document.getElementById("timer");

const quizBox = document.getElementById("quiz");
const questionSlot = document.getElementById("question");
const optionASlot = document.getElementById("optionA");
const optionBSlot = document.getElementById("optionB");
const optionCSlot = document.getElementById("optionC");

const selectA =document.getElementById("selectA");
const selectB = document.getElementById("selectB"); //Edit these to add event listeners
const selectC = document.getElementById("selectC");

//Write every question on the quiz with three answer options

const questionList = [
   //Question 1
    {
        question: "What does var mean in relation to Javascript?",
            optionA: "Variant",
            optionB: "Variable",
            optionC: "Variety",
            correctAnswer: optionB,
    },
    //Question 2
    {
        question: "Which tag do you use to link an external Javascript page to HTML?",
            optionA: "link",
            optionB: "style",
            optionC: "script",
           correctAnswer: optionC,
    },
    //Question 3
]




//Set a user score, starting at zero

var userScore = 0,

//Set at visible timer to create a time limit, ending the quiz when it hits zero

//Have them be displayed as text one at a time



//Take the user's input and check if it matches the predetermined answers

//If correct, add one point to user score

//If incorrect, take off time from the timer

//When answered, move to the next question

//Display the user's score and track it locally when the quiz is complete, allowing the user to input their initials


