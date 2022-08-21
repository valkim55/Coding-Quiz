
// add variables that will represent HTML elements as objects


var scoreCounter = document.querySelector("score-number");
var timerCounter = document.querySelector("timer");

var questionEl = document.querySelector("#question");
var choiceListEl = document.querySelector("choice-container");

// create variable for the choices and make it an array
var choice = Array.from(document.querySelectorAll(".choice-text"));
console.log(choice);

// create a variable to represent all questions which is an array object
var allQuestions = [];
//create a variable to represent current question, which is an element of allQuestions array
var currentQuestionEl = {};

// create a variable that will reflect the score
var startScore = 25;
var scorePoints = 5;

// assign a boolean value to the correct answer
var correctAnswer = true;

// create variable to reflect and track the questions 
var questionCounter = 0;


// create a variable that will be used as an array for questions
var questionsArrayEl = [
    {
        question: "Question 1. Commonly used data types do NOT include: ",
        choice1: "1. arrays",
        choice2: "2. variables",
        choice3: "3. alerts",
        choice4: "4. booleans",
        correct: 3
    },

    {
        question: "Question 2. A very useful tool used during development and debugging for printing content to the debugger is: ",
        choice1: "1. JavaScript",
        choice2: "2. DOM",
        choice3: "3. for loop",
        choice4: "4. console.log",
        correct: 4
    },

    {
        question: "Question 3. String values must be enclosed within ___ when being assigned to variables.",
        choice1: "1. curly brackets",
        choice2: "2. commas",
        choice3: "3. quotes",
        choice4: "4. parentheses",
        correct: 3
    },

    {
        question: "Question 4. Arrays in JavaScript can be used to store: ",
        choice1: "1. all of them",
        choice2: "2. other arrays",
        choice3: "3. booleans",
        choice4: "4. numbers and strings",
        correct: 1
    },

    {
        question: "Question 5. The condition in an if / else statement is enclosed with: ",
        choice1: "1. quotes",
        choice2: "2. parentheses",
        choice3: "3. curly brackets",
        choice4: "4. square brackets",
        correct: 3
    },
];
console.log(questionsArrayEl);

var startQuiz = function() {
    score = 25;
    questionCounter = 0;
    allQuestions = questionsArrayEl; //if doesn't work write as allQuestions = [...questionsArrayEl]
    getNextQuestion();
}

var getNextQuestion = function() {
    // whenever the questions array length reaches 0, it means that quiz is completed and we can send the score the local storage
    if (allQuestions.length === 0) {
        // set the score as a newest score everytime you run the quiz
        localStorage.setItem("newestScore", score)
        // then we'll send this data to the endpage of the quiz so user can save it with their name
        return window.location.assign("/endpage.html")
    }

    var questionsIndex = allQuestions.length[i];
    questionEl.innerText = currentQuestionEl.question;
    console/log(questionsIndex);

    choiceListEl.forEach(choice = function() {
        var index = choice.dataset["index"];
        choice.innerText = currentQuestionEl["choice" + index];
    })

    allQuestions.splice(questionsIndex, 1);

    correctAnswer = true;

}

choiceListEl.forEach(choice = function() {
    choice.addEventListener("click", e => {
        if (!correctAnswer) return;

        correctAnswer = false;
        var selectedChoice = event.target;
        var selectedAnswer = selectedChoice.dataset["index"] ;


    })
})