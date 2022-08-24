// add variables that will represent HTML elements as objects (all variable declarations at the top)
// all variables at the top

var header = document.querySelector(".header");
var buttonStart = document.querySelector(".button-start");
var main = document.querySelector(".questions-content");
var quizContainer = document.querySelector(".quiz-container");

// create variable for the choices and make it an array
var choice = Array.from(document.querySelectorAll(".choice-text"));
console.log(choice);

var questionEl = document.querySelector("#question");
var btnEl1 = document.querySelector("#option1");
var btnEl2 = document.querySelector("#option2");
var btnEl3 = document.querySelector("#option3");
var btnEl4 = document.querySelector("#option4");

// create variable to reflect and track the questions 
var questionCounter = 0;
var choiceListEl = document.querySelector(".choice-container");

// create variables that will reflect the initial score and timer
var startScore = 0;
var scorePoints = 5;

// add variables to corresponding HTML elements
var scoreCounter = document.querySelector(".score-number");
var timerCounter = document.querySelector("#timer");

// add variables for the final results
var resultsContainer = document.querySelector(".results-form");
var saveResultsBtn = document.querySelector("#save-info");
var initialsInput = document.querySelector("#text-input");

// assign a var to popup container and change text depending on the answer
var popUp = document.querySelector(".popup");

// create a variable to store all the questions and coice options in an array
var questionsArrayEl = [
    {
        question: "Question 1. Commonly used data types do NOT include: ",
        choice1: "arrays", // no numbers mixed in a string
        choice2: "variables",
        choice3: "alerts",
        choice4: "booleans",
        correct: "3" 
    },

    {
        question: "Question 2. A very useful tool used during development and debugging for printing content to the debugger is: ",
        choice1: "JavaScript",
        choice2: "DOM",
        choice3: "for loop",
        choice4: "console.log",
        correct: "4"
    },

    {
        question: "Question 3. String values must be enclosed within ___ when being assigned to variables.",
        choice1: "curly brackets",
        choice2: "commas",
        choice3: "quotes",
        choice4: "parentheses",
        correct: "3"
    },

    {
        question: "Question 4. Arrays in JavaScript can be used to store: ",
        choice1: "all of them",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "numbers and strings",
        correct: "1"
    },

    {
        question: "Question 5. How do you create an anonymous function expression in JavaScript?",
        choice1: "function myFunction()",
        choice2: "var = function()",
        choice3: "function(myFunction)",
        choice4: "var myFunction = function()",
        correct: "4"
    },

    {
        question: "Question 6. The condition in an if / else statement is enclosed with: ",
        choice1: "quotes",
        choice2: "parentheses",
        choice3: "curly brackets",
        choice4: "square brackets",
        correct: "3"
    },

    {
        question: "Question 7. How do you write 'Hello World' in an alert box? ",
        choice1: "prompt('Hello World')",
        choice2: "alert('Hello World')",
        choice3: "window('Hello World')",
        choice4: "innerHTML('Hello World')",
        correct: "2"
    },

    {
        question: "Question 8. What will the following code return: Boolean(10 > 9)",
        choice1: "true",
        choice2: "NaN",
        choice3: "false",
        choice4: "undefined",
        correct: "1"
    },

    {
        question: "Question 9. Inside which HTML element do we put the JavaScript?",
        choice1: "<script.js>",
        choice2: "<javascript>",
        choice3: "<scripting>",
        choice4: "<script>",
        correct: "4"
    },

    {
        question: "Question 10. Where is the correct place to insert a JavaScript?",
        choice1: "The <body> section",
        choice2: "The <head> section and the <body>",
        choice3: "The <head> section",
        choice4: "The <footer> section",
        correct: "2"
    },

];
console.log(questionsArrayEl);

var maxTime = 151;
var timer = function() {
    maxTime--;
    timerCounter.innerHTML = maxTime;
    console.log(maxTime);
    if (maxTime <= 0) {
        console.log("time's up!");
        timerCounter.innerHTML = "You're out of time!";
        endQuiz();
    }
};

var runTimer; 
var startQuiz = function() {
    main.classList.replace("hide", "show");
    timer();
    runTimer = setInterval(timer, 1000);
    goToNextQuestion();
};

var goToNextQuestion = function() {
    if (questionCounter === questionsArrayEl.length) {
        endQuiz();
    }
    questionEl.textContent = questionsArrayEl[questionCounter].question;
    btnEl1.textContent = questionsArrayEl[questionCounter].choice1;
    btnEl2.textContent = questionsArrayEl[questionCounter].choice2;
    btnEl3.textContent = questionsArrayEl[questionCounter].choice3;
    btnEl4.textContent = questionsArrayEl[questionCounter].choice4;    
};

var userChoice = document.querySelector(".choice-text");
var getNextQuestion = function(userChoice) {
    if (userChoice === questionsArrayEl[questionCounter].correct) {
        popUp.innerHTML = "CORRECT :D";
        console.log(popUp);
        questionCounter++;
        startScore = startScore + scorePoints;
        scoreCounter.innerHTML = parseInt(startScore);
        goToNextQuestion();
        
        console.log("current score " + startScore);
        //console.log(userChoice === questionsArrayEl[questionCounter].correct);
    } else {
        popUp.innerHTML = "WRONG :(";
        console.log(popUp);
        questionCounter++;
        // put the timer here and deduct time
        maxTime = maxTime - 15;
        goToNextQuestion();
        //console.log(userChoice !== questionsArrayEl[questionCounter].correct);
    }
};

var endQuiz = function() {
    console.log("all done!");
    console.log("current score " + startScore);
    //quizContainer.style.display = "none";
    quizContainer.remove();
    resultsContainer.classList.replace("hide", "show");
    localStorage.setItem("player score", startScore);
    clearInterval(runTimer);
    document.getElementById("final-score").innerHTML = startScore + " points";
};


// create a function that will run after player submits their initials and we need to display these initials with player's score
// this also has to happen when user clicks submit button
var showPlayerData = function() {
    resultsContainer.remove();
    // create a container to hold 2 <div> boxes, 1 for initials, 1 for finalScore
    var playerDataContainer = document.createElement("div");
    playerDataContainer.className = "storage-container";
    main.appendChild(playerDataContainer);
    playerDataContainer.innerHTML = "Thank you for playing! Come play again!";
    
    // now create 2 inner boxes for initials and score
    var showInitials = document.createElement("h3");
    //showInitials.className = "show-initials"; - in case i need to change style
    playerDataContainer.appendChild(showInitials);
    showInitials.innerHTML = "Recent Player: " + localStorage.getItem("player initials");
    
    var showScore = document.createElement("h3");
    //showScore.className = "show-score";
    playerDataContainer.appendChild(showScore);
    showScore.innerHTML = "Recent Player's Score: " + localStorage.getItem("player score") + " points";
};


// all event listeners at the bottom
// save player's initials in localStorage when they click button save
saveResultsBtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("player initials", initialsInput.value);
    showPlayerData();
});


buttonStart.addEventListener("click", (e) => {
    e.preventDefault();
    header.style.display = "none";
    startQuiz();
});


choiceListEl.addEventListener("click", () => { 
    var userInput = this.event.target.getAttribute("data-set");
    console.log(userInput);
    getNextQuestion(userInput);
});