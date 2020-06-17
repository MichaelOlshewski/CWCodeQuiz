const startButton = document.querySelector("#start-btn");
const questionContainer = document.querySelector("#quiz");
const mainHeader = document.querySelector("#mainHeader");
const timerSpan = document.querySelector("#timerSpan");
const nextButton = document.querySelector("#next-btn");
const questionElement = document.querySelector("#question");
const answerBtns = document.querySelector("#answerBtns");
const choiceA = document.querySelector("#choiceA");
const choiceB = document.querySelector("#choiceB");
const choiceC = document.querySelector("#choiceC");
const choiceD = document.querySelector("#choiceD");
const isCorrect = document.querySelector("#isCorrect");
const isIncorrect = document.querySelector("#isIncorrect");
const timeRemaining = document.querySelector("#timeRemaining");

startButton.addEventListener("click", startQuiz);

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

console.log(questions);

let lastQuestionIndex = questions.length - 1;
let currentQuestionIndex = 0;

function renderQuestion() {
    let q = questions[currentQuestionIndex];
    questionElement.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function answerIsCorrect() {
    isCorrect.classList.remove('hide');
};

function answerIsWrong() {
    isIncorrect.classList.remove('hide');
}

function startQuiz() {
    timerSpan.classList.remove('hide');
    mainHeader.classList.add('hide');
    startButton.classList.add('hide');
    var seconds = document.getElementById("timeRemaining").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("timeRemaining").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown)
        };
    }, 1000);
    renderQuestion();
    questionContainer.classList.remove('hide');
}

var score = 0;

function checkAnswer(answer) {
    if (questions[currentQuestionIndex].correct == answer) {
        score++
        answerIsCorrect();
        console.log(score);
    } else {
        answerIsWrong();
    }
    if (currentQuestionIndex < lastQuestionIndex){
        currentQuestionIndex++;
        renderQuestion();
    } else {
        scoreRender();
    }

    nextButton.classList.remove('hide');
}