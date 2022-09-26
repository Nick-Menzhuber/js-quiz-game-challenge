//Definitions
var startButton = document.querySelector(".start-button");
var welcomeMsg = document.querySelector("welcome-msg");
var highScoresLink = document.querySelector("high-scores-link");
var welcomeText = document.getElementById("welcome-text");
var gameHeading = document.getElementById("game-heading");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var choiceButtonsEl = document.getElementById("choice-buttons");
//var answerButtonsElement = document.getElementsByClassName("btn");
let shuffledQuestions, currentQuestionIndex;
var timer = document.getElementById("timer");
var seconds = 75;
var countDown;



//Define quiz questions
const questions =
    [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            answers: [
                { text: "<scripting>", correct: false },
                { text: "<script>", correct: true },
                { text: "<js>", correct: false },
                { text: "<javascript>", correct: false }
            ],
        },

        {
            question: "Where is the correct place to insert a JavaScript tag?",
            answers: [
                { text: "Both the <head> section and the <body> section are correct", correct: true },
                { text: "The <body> section", correct: false },
                { text: "The <head> section", correct: false }
            ],
        },

        {
            question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
            answers: [
                { text: "<script href='xxx.js'>", correct: false },
                { text: "<script name='xxx.js'>", correct: false },
                { text: "<script src='xxx.js'>", correct: true }
            ],
        },

        {
            question: "How do you call a function named myFunction?",
            answers: [
                { text: "call myFunction()", correct: false },
                { text: "call function myFunction()", correct: false },
                { text: "myFunction()", correct: true }
            ],    
        },

        {
            question: "How can you write an IF statement in JavaScript?",
            answers: [
                { text: "if i = 5", correct: false },
                { text: "if i == 5 then", correct: false },
                { text: "if i = 5 then", correct: false },
                { text: "if (i == 5)", correct: true }
            ],
        },

        {
            question: "How does a WHILE loop start?",
            answers: [
                { text: "while i = 1 to 10", correct: false },
                { text: "while (i <= 10)", correct: true },
                { text: "while (i <= 10; i++)", correct: false }
            ],
        },

        {
            question: "How does a FOR loop start?",
            answers: [
                { text: "for (i = 0; i <= 5)", correct: false },
                { text: "for i = 1 to 5", correct: false },
                { text: "for (i=0; i <= 5; i++)", correct: true },
                { text: "for (i <= 5; i++)", correct: false }
            ],
        }
    ]

//Attach event listeners
startButton.addEventListener("click", startGame);


//function fires at start button
function startGame() {
    startButton.remove();
    welcomeText.remove();
    gameHeading.remove();
    countDown = setInterval(decrementSeconds, 1000);
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
    
}

//function selects the next question
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    showAnswers(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question
    //showAnswers()
}

function showAnswers(question) {
    console.log(question)
    question.answers.forEach(element => {
        console.log(element.text)
        let btnEl = document.createElement("button")
        //put the text of each answer inside button element
        btnEl.innerText = element.text;
        console.log(btnEl)
        //add class to each element so buttons are styled
        btnEl.classList.add("btn");
        //add event listener to each button
        btnEl.addEventListener("click", checkAnswer)
        //update dom to show answer buttons
        choiceButtonsEl.appendChild(btnEl);
        checkAnswer;
    });
}

//function selectAnswer() {}
function endGame() {
    console.log("The game is over")
}

function checkAnswer(event) {
    console.log(event.target.innerText)
    
    
}

//timer functions
function decrementSeconds() {
    if (seconds < 1) {
        clearInterval(countDown)
        endGame()
    }
    seconds -= 1;
    timer.innerText = "  " + seconds;

}

