// Start and Next Button
const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");

// Main Body Content
const mainHeader = document.querySelector("#mainHeader");
const quizContainer = document.querySelector("#quiz");
const questionElement = document.querySelector("#question");

// Answer Buttons
const choicesDiv = document.querySelector("#choices");
const choiceA = document.querySelector("#choiceA");
const choiceB = document.querySelector("#choiceB");
const choiceC = document.querySelector("#choiceC");
const choiceD = document.querySelector("#choiceD");

// Correct or Incorrect Alerts
const isCorrect = document.querySelector("#isCorrect");
const isIncorrect = document.querySelector("#isIncorrect");

//Timer Settings
const timerSpan = document.querySelector("#timerSpan");
const timeRemaining = document.querySelector("#timeRemaining");

// Event Listeners Go Here
startButton.addEventListener("click", startQuiz);
//startButton.addEventListener("click", startTimer);
nextButton.addEventListener("click", nextQuestion);


// Questions Array
let questions = [
    {
        question: 'How do you write a single line comment in JavaScript?',
        choiceA: '//',
        choiceB: '!!',
        choiceC: '/* */',
        choiceD: '/- -/',
        correct: "A"
    },
    {
        question: 'How do you write a multi line comment in JavaScript?',
        choiceA: '//',
        choiceB: '/--',
        choiceC: '/* */',
        choiceD: '<!-- -->',
        correct: 'C'
    },
    {
        question: 'What choice shows strict type checking?',
        choiceA: '!=',
        choiceB: '===',
        choiceC: '=',
        choiceD: '+=',
        correct: 'B'
    }
];

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let score = 0;
let timer;

function renderQuestion() {
    let q = questions[runningQuestionIndex];
    questionElement.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function answerIsCorrect() {
    isCorrect.classList.remove('hide');
    isIncorrect.classList.add('hide');
}

function answerIsWrong() {
    isCorrect.classList.add('hide');
    isIncorrect.classList.remove('hide');
}

function startTimer() {
    timerSpan.classList.remove('hide');
    var seconds = timeRemaining.textContent;
    seconds--;
    timeRemaining.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(timer);
    }
}

function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct == answer) {
        score++
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    nextButton.classList.remove('hide')
}

function startQuiz() {
    mainHeader.classList.add('hide');
    quizContainer.classList.remove('hide');
    startButton.classList.add('hide');
    timer = setInterval(startTimer, 1000);
    startTimer();
    renderQuestion();
}

function nextQuestion() {
    isCorrect.classList.add('hide');
    isIncorrect.classList.add('hide');
    if (runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        renderQuestion();
    } else {
        clearInterval(timer);
        timerSpan.classList.add('hide');
        scoreRender();
    }
}