// add a variable representing <main> using its id
var mainContentEl = document.querySelector("#questions-content");

// add variable representing the <section> QUESTION 1
var questionOneEl = document.querySelector("#question-1");

// create an element to hold the answerStatus (whether it's correct or wrong) after user clicks on one of the options
var answerStatusBoxEl = document.createElement("div");
questionOneEl.appendChild(answerStatusBoxEl);
answerStatusBoxEl.className = "answerCheckBox"; // we're not focusing on this class right now, it's mostly for CSS but wanna keep it in one place

// create a variable that will be inside of the DIV box and will show CORRECT or WRONG when users clicks
var answerStatusEl = document.createElement("h3");
answerStatusBoxEl.appendChild(answerStatusEl);

//if the answer is corrent
document.getElementById("true").addEventListener("click", correctAnswer);
function correctAnswer() {
    answerStatusEl.textContent = "CORRECT!";
}

//if the answer is wrong, this works but try to consolidate code
document.getElementById("false-1").addEventListener("click", wrongAnswer);
function wrongAnswer() {
    answerStatusEl.textContent = "WRONG";
}

document.getElementById("false-2").addEventListener("click", wrongAnswer);
function wrongAnswer() {
    answerStatusEl.textContent = "WRONG";
}

document.getElementById("false-3").addEventListener("click", wrongAnswer);
function wrongAnswer() {
    answerStatusEl.textContent = "WRONG";
}


// go to the next question
//create a div element to contain the button and append it to the question <section> element
var buttonContainerEl = document.createElement("div");
questionOneEl.appendChild(buttonContainerEl);
// create a button element to go to the next question
var buttonNextQuestion = document.createElement("button");
buttonContainerEl.appendChild(buttonNextQuestion);
buttonNextQuestion.textContent = "next";


var questionTwoEl = document.createElement("section");
mainContentEl.appendChild(questionTwoEl);
questionTwoEl.className = "question-element";
console.log(questionTwoEl);

var questionTwoTextEl = document.createElement("h2");
questionTwoEl.appendChild(questionTwoTextEl);
questionTwoTextEl.innerHTML = "Question 2. A very useful tool used during development and debugging for printing contene to the debugger is: ";
console.log(questionTwoTextEl);