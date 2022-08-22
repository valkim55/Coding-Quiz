
// add variables that will represent HTML elements as objects


var scoreCounter = document.querySelector(".score-number");
var timerCounter = document.querySelector("timer");

var questionEl = document.querySelector("#question");
var btnEl1 = document.querySelector("#option1");
var btnEl2 = document.querySelector("#option2");
var btnEl3 = document.querySelector("#option3");
var btnEl4 = document.querySelector("#option4");

var choiceListEl = document.querySelector(".choice-container");

// create variable for the choices and make it an array
var choice = Array.from(document.querySelectorAll(".choice-text"));
console.log(choice);

// create a variable to represent all questions which is an array object
//var allQuestions = [];
//create a variable to represent current question, which is an element of allQuestions array
var currentQuestionEl = {};

// create a variable that will reflect the score
var startScore = 25;
var scorePoints = 5;

// assign a boolean value to the correct answer
var correctAnswer = true;

// create variable to reflect and track the questions 
var questionCounter = 0;

var header = document.querySelector(".header");

var main = document.querySelector(".questions-content");

var buttonStart = document.querySelector(".button-start");


// create a variable that will be used as an array for questions
var questionsArrayEl = [
    {
        question: "Question 1. Commonly used data types do NOT include: ",
        choice1: "arrays", // no numbers mixed in a string
        choice2: "variables",
        choice3: "alerts",
        choice4: "booleans",
        correct: "3" // 
    },

    {
        question: "Question 2. A very useful tool used during development and debugging for printing content to the debugger is: ",
        choice1: "JavaScript",
        choice2: "2. DOM",
        choice3: "3. for loop",
        choice4: "4. console.log",
        correct: "4"
    },

    {
        question: "Question 3. String values must be enclosed within ___ when being assigned to variables.",
        choice1: "1. curly brackets",
        choice2: "2. commas",
        choice3: "3. quotes",
        choice4: "4. parentheses",
        correct: "3"
    },

    {
        question: "Question 4. Arrays in JavaScript can be used to store: ",
        choice1: "1. all of them",
        choice2: "2. other arrays",
        choice3: "3. booleans",
        choice4: "4. numbers and strings",
        correct: "1"
    },

    {
        question: "Question 5. The condition in an if / else statement is enclosed with: ",
        choice1: "1. quotes",
        choice2: "2. parentheses",
        choice3: "3. curly brackets",
        choice4: "4. square brackets",
        correct: "3"
    },
];
console.log(questionsArrayEl);

var startQuiz = function() {
    main.classList.replace("hide", "show");
    questionEl.textContent = questionsArrayEl[questionCounter].question;
    btnEl1.textContent = questionsArrayEl[questionCounter].choice1;
    btnEl2.textContent = questionsArrayEl[questionCounter].choice2;
    btnEl3.textContent = questionsArrayEl[questionCounter].choice3;
    btnEl4.textContent = questionsArrayEl[questionCounter].choice4;
    //main.classList.remove("show", "hide")
    // when it reaches last question go to initials page
    // if questionCounter === questionsArrayEL.length then go to final page with initials
        //score = 25;
    // questionCounter = 0;
    //allQuestions = questionsArrayEl; //if doesn't work write as allQuestions = [...questionsArrayEl]
    //getNextQuestion();
}

var getNextQuestion = function(userChoice) {
    if (userChoice === questionsArrayEl[questionCounter].correct) {
        questionCounter++;
        startScore = startScore + scorePoints;
        scoreCounter.innerHTML = parseInt(startScore);
        startQuiz();
        console.log(startScore);
        //console.log(userChoice === questionsArrayEl[questionCounter].correct);
    } else {
        questionCounter++;
        // put the timer here and deduct time
        startQuiz();
        //console.log(userChoice !== questionsArrayEl[questionCounter].correct);
    }

}

// choiceListEl.forEach(choice = function() {
//     choice.addEventListener("click", e => {
//         if (!correctAnswer) return;

//         correctAnswer = false;
//         var selectedChoice = event.target;
//         var selectedAnswer = selectedChoice.dataset["index"] ;


//     })
// })


// all event listeners at the bottom
buttonStart.addEventListener("click", (e) => {
    e.preventDefault();
    header.style.display = "none";
    startQuiz();
    console.log("click");
})

choiceListEl.addEventListener("click", () => {
    var userInput = this.event.target.getAttribute("data-set");
    console.log(userInput);
    getNextQuestion(userInput);
})