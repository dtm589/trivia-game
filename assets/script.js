// Set Variables
const quizDisplay = document.getElementById("display-container");
let timeLeft = document.getElementById("timer");
let quizContainer = document.getElementById("container");
let nextButton = document.getElementById("next-button");
let highScores = document.getElementById("high-scores");
let scoreContainer = document.getElementById("score-container");
let restartButton = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let score = 0;

// Questions and Answers array
const quizArray = [{ id: "0", question: "Javascript is an _______ language?", options: "Object-Oriented", "Object-Based", "Procedural", "None of the Above", correct: "Object-Oriented" },
{ id: "1", question: "Which of the following keywords is used to define a variable in Javascript?", options: "var", "let", "Both A and B", "x=", correct: "Both A and B" },
{ id: "2", question: "How can a datatype be declared to be a constant type?", options: "const", "var", "let", "constant", correct: "const" },
{ id: "3", question: "What keyword is used to check whether a given property is valid or not?", options: "in", "is in", "exists", "lies", correct: "in" },
{ id: "4", question: "When an operator’s value is NULL, the typeof returned by the unary operator is:", options: "Boolean", "Undefined", "Object", "Integer", correct: "Object" },
{ id: "5", question: "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?", options: "Object Serialization", "Object Encapsulation", "Object Inheritance", "None of the Above", correct: "Object Serialization" },
{ id: "6", question: "Which of the following are closures in Javascript?", options: "Variables", "Functions", "Objects", "All of the Above", correct: "All of the Above" },
{ id: "7", question: "Which of the following is not a Javascript framework?", options: "Node", "Cassandra", "Vue", "React", correct: "Cassandra" },
{ id: "8", question: "How to stop an interval timer in Javascript?", options: "clearInterval", "clearTimer", "intervalOver", "stopTimer", correct: "clearInterval" },
{ id: "9", question: "How are objects compared when they are checked with the strict equality operator?", options: "The contents of the objects are compared.", "Their references are compared.", "Both A and B", "None of the Above", correct: "Their references are compared." },
{ id: "10", question: "How do we write a comment in javascript?", options: "/* */", "//", "#", "$ $", correct: "//" },
{ id: "11", question: "Arrays in JavaScript are defined by which of the following statements?", options: "It is an ordered list of values.", "It is an ordered list of objects.", "It is an ordered list of strings.", "It is an ordered list of functions.", correct: "It is an ordered list of values." },
{ id: "12", question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?", options: "Position", "Standard", "Location", "Window", correct: "Window" },
{ id: "13", question: "Which of the following can be used to call a JavaScript Code Snippet?", options: "Preprocessor", "Function", "Triggering Event", "RMI", correct: "Function" },
{ id: "14", question: "The 'function' and 'let' are known as:", options: "Declaration Statements", "Data Types", "Keywords", "Prototypes", correct: "Declaration Statements" },
];

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() =>Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question
        let div_question = document.createElement("p");
        div_question.classList.add("question");
        div_question.innerHTML = i.question;
        div.appendChild(div_question);
        //answers
        div.innerHTML += '
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        ';

        quizContainer.appendChild(div);
    }
}