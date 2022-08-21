
// add variables that will represent HTML elements as objects


var scoreCounter = document.querySelector("score-number");
var timerCounter = document.querySelector("timer");



var questionEl = document.querySelector("#question");
var choiceListEl = document.querySelector("choice-container");

// create variable for the choices and make it an array
var choice = Array.from(document.querySelectorAll(".choice-text"));
console.log(choice);

// create a variable that will be used as an array for questions
var allQuestions = [
    {
        question: "Question 1. Commonly used data types do NOT include: ",
        choice: "arrays",
        choice: "variables",
        choice: "alerts",
        choice: "booleans",
        correct: 3
    },

    {
        question: "Question 2. A very useful tool used during development and debugging for printing content to the debugger is: ",
        choice: "JavaScript",
        choice: "DOM",
        choice: "for loop",
        choice: "console.log",
        correct: 4
    },

    {
        question: "Question 3. String values must be enclosed within ___ when being assigned to variables.",
        choice: "curly brackets",
        choice: "commas",
        choice: "quotes",
        choice: "parentheses",
        correct: 3
    },

    {
        question: "Question 4. Arrays in JavaScript can be used to store: ",
        choice: "all of them",
        choice: "other arrays",
        choice: "booleans",
        choice: "numbers and strings",
        correct: 1
    },

    {
        question: "Question 5. The condition in an if / else statement is enclosed with: ",
        choice: "quotes",
        choice: "parentheses",
        choice: "curly brackets",
        choice: "square brackets",
        correct: 3
    },
];
console.log(allQuestions);