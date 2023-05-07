// Set Variables
const displayContainer = document.getElementById("display-container");
let timeLeft = document.getElementById("timer");
let quizContainer = document.getElementById("container");
let nextButton = document.getElementById("next-button");
let highScores = document.getElementById("high-scores");
let scoreContainer = document.querySelector(".score-container");
let restartButton = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let submitButton = document.getElementById("submit");
let userName = document.getElementById("user-name");
let leaderBoard = document.getElementById("leader-board");
let playerScore = 0;
let timer = 75;
let countdown;
let quizCounter = 0;



// Questions and Answers array
const quizArray = [{ id: "0", question: "Javascript is an _______ language?", answers: ["A Object-Oriented", "B Object-Based", "C Procedural", "D None of the Above"], correct: "A Object-Oriented" },
{ id: "1", question: "Which of the following keywords is used to define a variable in Javascript?", answers: ["A var", "B let", "C Both A and B", "D x="], correct: "C Both A and B" },
{ id: "2", question: "How can a datatype be declared to be a constant type?", answers: ["A const", "B var", "C let", "D constant"], correct: "A const" },
{ id: "3", question: "What keyword is used to check whether a given property is valid or not?", answers: ["A in", "B is in", "C exists", "D lies"], correct: "A in" },
{ id: "4", question: "When an operator’s value is NULL, the typeof returned by the unary operator is:", answers: ["A Boolean", "B Undefined", "C Object", "D Integer"], correct: "C Object" },
{ id: "5", question: "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?", answers: ["A Object Serialization", "B Object Encapsulation", "C Object Inheritance", "D None of the Above"], correct: "A Object Serialization" },
{ id: "6", question: "Which of the following are closures in Javascript?", answers: ["A Variables", "B Functions", "C Objects", "D All of the Above"], correct: "D All of the Above" },
{ id: "7", question: "Which of the following is not a Javascript framework?", answers: ["A Node", "B Cassandra", "C Vue", "D React"], correct: "B Cassandra" },
{ id: "8", question: "How to stop an interval timer in Javascript?", answers: ["A clearInterval", "B clearTimer", "C intervalOver", "D stopTimer"], correct: "A clearInterval" },
{ id: "9", question: "How are objects compared when they are checked with the strict equality operator?", answers: ["A The contents of the objects are compared.", "B Their references are compared.", "C Both A and B", "D None of the Above"], correct: "B Their references are compared." },
{ id: "10", question: "How do we write a comment in javascript?", answers: ["A /* */", "B //", "C #", "D $ $"], correct: "B //" },
{ id: "11", question: "Arrays in JavaScript are defined by which of the following statements?", answers: ["A It is an ordered list of values.", "B It is an ordered list of objects.", "C It is an ordered list of strings.", "D It is an ordered list of functions."], correct: "A It is an ordered list of values." },
{ id: "12", question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?", answers: ["A Position", "B Standard", "C Location", "D Window"], correct: "D Window" },
{ id: "13", question: "Which of the following can be used to call a JavaScript Code Snippet?", answers: ["A Preprocessor", "B Function", "C Triggering Event", "D RMI"], correct: "B Function" },
{ id: "14", question: "The 'function' and 'let' are known as:", answers: ["A Declaration Statements", "B Data Types", "C Keywords", "D Prototypes"], correct: "A Declaration Statements" },
];

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (i = 0; i < quizArray.length; i++) {
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid",);
        //questions
        let div_question = document.createElement("p");
        div_question.classList.add("question");
        div_question.innerHTML = quizArray[i].question;
        div.appendChild(div_question);
        //answers
        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${quizArray[i].answers[0]}</button>
        <button class="option-div" onclick="checker(this)">${quizArray[i].answers[1]}</button>
        <button class="option-div" onclick="checker(this)">${quizArray[i].answers[2]}</button>
        <button class="option-div" onclick="checker(this)">${quizArray[i].answers[3]}</button>
        `;
        quizContainer.appendChild(nextButton);
        quizContainer.appendChild(div);

    }
};

//Timer
function timerDisplay() {
    countdown = setInterval(() => {
        timer--;
        timeLeft.innerHTML = `${timer}`;
        if (timer < 1) {
            clearInterval(countdown);
            endGame();
        }
    }, 1000)

};

//Display quiz
let quizDisplay = (quizCounter) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    for (i = 0; i < 15; i++) {
        quizCards[i].classList.add("hide");
    }
    //Display current question card
    quizCards[quizCounter].classList.remove("hide");

    nextButton.addEventListener("click", function () {
        quizCards[quizCounter].classList.add("hide");
        quizCards[quizCounter + 1].classList.remove("hide");
        quizCounter++;
        if (quizCounter === 14) {
            endGame();
        }
    })
};

//Answer Checker
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[quizCounter];
    let options = question.querySelectorAll(".option-div");

    //if user clicks correct answer
    if (userSolution === quizArray[quizCounter].correct) {
        userOption.classList.add("correct");
        playerScore += 20;
    } else {
        //user clicks wrong answer
        timer = timer - 10;
        userOption.classList.add("incorrect");
        //For marking the correct answer
        options.forEach((element) => {
            if (element.innerText == quizArray[quizCounter].correct) {
                element.classList.add("correct");
            }
        })
    }

    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial quiz setup
function initial() {
    quizContainer.innerHTML = "";
    timer = 75;
    playerScore = 0;
    quizCounter = 0;
    clearInterval(countdown);
    quizCreator();
    quizDisplay(quizCounter);
    timerDisplay();
};

//start button functionality
startButton.addEventListener("click", function () {
    startScreen.classList.add('hide');
    displayContainer.classList.remove('hide');
    initial();
});

//when time runs out or no more questions
function endGame() {
    //hide all questions
    displayContainer.classList.add("hide");
    //display the score container
    scoreContainer.classList.remove("hide");
};

//View High Scores Button
highScores.addEventListener("click", function () {
    //hide all questions
    displayContainer.classList.add("hide");
    //show score container
    scoreContainer.classList.remove("hide");

    //show players current score
    userScore.innerText = playerScore;
});

//Add Functionality to restart button
restartButton.addEventListener("click", () => {
    scoreContainer.classList.add("hide");
    startScreen.classList.remove('hide');
});


submitButton.addEventListener("click", (event) => {
    //save current user name and score
    let userInfo = { "name": userName.value, "score": playerScore };
    //make sure they enter something into name field
    if(userName.value === "") {
        alert("Please enter your name");
        event.preventDefault();
    };
    localStorage.setItem("userObject", JSON.stringify(userInfo));
    event.preventDefault();

    //display leader board from local memory
    let lastUser = JSON.parse(localStorage.getItem("userObject"));
    if (lastUser !== null) {
        leaderBoard.innerHTML = `${lastUser.name} - ${lastUser.score}`;
        } else {
          return
        };
});
