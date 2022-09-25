//Definitions
var startButton = document.querySelector(".start-button");
var welcomeMsg = document.querySelector("welcome-msg");
var highScoresLink = document.querySelector("high-scores-link");
var welcomeText = document.getElementById("welcome-text");
var gameHeading = document.getElementById("game-heading");

//Define quiz questions
var questions =
    [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            choices: ["<scripting>", "<script>", "<js>", "<javascript>"],
            answer: 1
        },

        {
            question: "Where is the correct place to insert a JavaScript?",
            choices: ["Both the <head> section and the <body> section are correct", "The <body> section", "The <head> section"],
            answer: 0
        },

        {
            question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
            choices: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>"],
            answer: 2
        },

        {
            question: "How do you call a function named myFunction?",
            choices: ["call myFunction()", "call function myFunction()", "myFunction()"],
            answer: 2
        },

        {
            question: "How can you write an IF statement in JavaScript?",
            choices: ["if i = 5", "if i == 5 then", "if i = 5 then", "if (i == 5)"],
            answer: 3
        },

        {
            question: "How does a WHILE loop start?",
            choices: ["while i = 1 to 10", "while (i <= 10)", "while (i <= 10; i++)"],
            answer: 1
        },

        {
            question: "How does a FOR loop start?",
            choices: ["for (i = 0; i <= 5)", "for i = 1 to 5", "for (i=0; i <= 5; i++)", "for (i <= 5; i++)"],
            answer: 2
        }
    ]

//Attach event listener to start button
startButton.addEventListener("click", startGame);

//Defines startGame function
function startGame() {
    console.log("button works");
    startButton.remove();
    welcomeText.remove();
    gameHeading.remove();
}
