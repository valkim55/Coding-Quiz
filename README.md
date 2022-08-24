# Coding-Quiz

## Welcome to Coding Quiz!

<p>In this repository you will find index.html file, script.js and style.css that were used to create this application.<br>
HTML was used to create the foundation for this application and CSS was used to make it look like a game :) <br>
The "brain" that makes it work was created with Javascript. DOM was also applied to make the code more functional and efficient. <br>
Should any suggestions be made, I will be more than happy to bring any improvements in this code.</p>


### The structure of the application
<p>The quiz is presented in a question - answer format, where the user is given 10 questions testing their basic Javascript knowledge.</p>
- <em> all questions and answers were generated using array, each answer choice is a button with an event listener tied to it. </em></br>


<p>The user is also given 2min 30secs to complete the quiz, each correct answer grants 5 points and each wrong answer will result in deducting 15secs from total time.</p> 
- <em>setInterval() method was used to run the timer when the first question is presented, and with the last question the timer stops. If the user runs out of time before the last question they are not able to complete the quiz.</em></br>


<p>Every time the user answers the question - the application will let them know whether their answer is correct or wrong.</p>
- <em> every time the user clicks on their selected choice the text appears indicating whether the choice was correct or not</em></br>


<p>The user is able to track the time as it is shown on the webpage, as well as their current score.</p>
- <em> the score counter increments by 5 with every correct answer</em></br>


<p>Once the quiz is completed or user runs out of time, the user is able to view their final score and save it alongside with their initials</p>
- <em> localStorage() method is used to store user's initials and score in their browser memory</em></br>

<p>If the user decides to start over they can do so by refreshing the page.</p><br>


### Credits
<em><strong> the data for the questions in this quiz was taken from the provided mock-up and W3Schools Javascript quiz</strong></em> (https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS) 


#### The screenshot of deployed application

![quiz-screenshot](./assets/images/quiz-screenshot.JPG)


##### The link to deployed application
