// Start, Next, Return Buttons
const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const returnStart = document.querySelector("#returnStart");
const goToStart = document.querySelector("#goToStart");

// Main Body Content
const mainHeader = document.querySelector("#mainHeader");
const quizContainer = document.querySelector("#quiz");
const questionElement = document.querySelector("#question");
const finalDiv = document.querySelector("#finalDiv");
let finalScore = document.querySelector("#finalScore");
const saveBtn = document.querySelector("#save");
const initialInput = document.querySelector("#initialInput");
const saved = document.querySelector("#saved");
const error = document.querySelector("#error");
const viewHighScores = document.querySelector("#viewHighScores");
const showHighScores = document.querySelector("#showHighScores");
const clearStorage = document.querySelector("#clearStorage");
const highScoreTable = document.querySelector("#highScores");

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
let timeRemaining = document.querySelector("#timeRemaining");
var timerLength = "21" // Seconds + 1 to get XX seconds displayed

// Event Listeners Go Here
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
returnStart.addEventListener("click", returnToStart);
saveBtn.addEventListener("click", saveToLocalStorage);
viewHighScores.addEventListener("click", displayHighScores);
goToStart.addEventListener("click", returnToStart);
clearStorage.addEventListener("click", clearLocalStorage);

// Questions Array
let questions = [
    {
        question: 'How do you write a single line comment in JavaScript?',
        choiceA: '1. //',
        choiceB: '2. !!',
        choiceC: '3. /* */',
        choiceD: '4. /- -/',
        correct: "A"
    },
    {
        question: 'How do you write a multi line comment in JavaScript?',
        choiceA: '1. //',
        choiceB: '2. /--',
        choiceC: '3. /* */',
        choiceD: '4. /- -/',
        correct: 'C'
    },
    {
        question: 'What choice shows strict type checking?',
        choiceA: '1. !=',
        choiceB: '2. ===',
        choiceC: '3. =',
        choiceD: '4. +=',
        correct: 'B'
    }
];

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let score = 0;
let timer;
var seconds;
var table = "";

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
    seconds = timeRemaining.textContent;
    seconds--;
    timeRemaining.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(timer);
        renderScore();
    }
}

function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct == answer) {
        score++
        answerIsCorrect();
    } else {
        answerIsWrong();
        console.log(seconds);
        timeRemaining.textContent = seconds;
        timeRemaining.textContent = timeRemaining.textContent - 10;
    }
    nextButton.classList.remove('hide')
}

function startQuiz() {
    mainHeader.classList.add('hide');
    quizContainer.classList.remove('hide');
    startButton.classList.add('hide');
    timeRemaining.textContent = timerLength;
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
        renderScore();
    }
}

function renderScore() {
    isCorrect.classList.add('hide');
    isIncorrect.classList.add('hide');
    quizContainer.classList.add('hide');
    nextButton.classList.add('hide');
    finalDiv.classList.remove('hide')
    finalScore.innerHTML = score;
}

function returnToStart() {
    isCorrect.classList.add('hide');
    isIncorrect.classList.add('hide');
    quizContainer.classList.add('hide');
    nextButton.classList.add('hide');
    finalDiv.classList.add('hide')
    mainHeader.classList.remove('hide');
    startButton.classList.remove('hide');
    error.classList.add('hide');
    saved.classList.add('hide');
    showHighScores.classList.add('hide');
    viewHighScores.classList.remove('hide');
    timerSpan.classList.add('hide');
    score = 0;
    runningQuestionIndex = 0;
    clearInterval(timer);
    initialInput.value = "";
}

let highScores = [];

function saveToLocalStorage(event) {
    event.preventDefault();
    if (initialInput.value === "") {
        error.classList.remove('hide');
        saved.classList.add('hide');
    } else {
        error.classList.add('hide');
        saved.classList.remove('hide');
        let highScore = {
            name: initialInput.value,
            userScore: score,
        }
        highScores.push(highScore);
        initialInput.value = "";
        localStorage.setItem("HighScoreList", JSON.stringify(highScores));
    }
}

var outputHTML = "";

function displayHighScores(array) {
    isCorrect.classList.add('hide');
    isIncorrect.classList.add('hide');
    quizContainer.classList.add('hide');
    nextButton.classList.add('hide');
    finalDiv.classList.add('hide')
    mainHeader.classList.add('hide');
    startButton.classList.add('hide');
    error.classList.add('hide');
    saved.classList.add('hide');
    viewHighScores.classList.add('hide');
    timerSpan.classList.add('hide');
    showHighScores.classList.remove('hide')
    clearInterval(timer); 
    let getHighScores = JSON.parse(localStorage.getItem("HighScoreList"));
    for (var i = 0; i < getHighScores.length; i++) {
        var openScoreLine = document.createElement("tr");
        var nameTableData = document.createElement("td");
        var scoreTableData = document.createElement("td");
        nameTableData.textContent = getHighScores[i].name;
        scoreTableData.textContent = getHighScores[i].userScore;
        openScoreLine.append(nameTableData);
        openScoreLine.append(scoreTableData);
        highScoreTable.append(openScoreLine);
    }
    console.log(getHighScores)
}

function clearLocalStorage() {
    localStorage.clear();
    isCorrect.classList.add('hide');
    isIncorrect.classList.add('hide');
    quizContainer.classList.add('hide');
    nextButton.classList.add('hide');
    finalDiv.classList.add('hide')
    mainHeader.classList.remove('hide');
    startButton.classList.remove('hide');
    error.classList.add('hide');
    saved.classList.add('hide');
    viewHighScores.classList.remove('hide');
    timerSpan.classList.add('hide');
    showHighScores.classList.add('hide')
}