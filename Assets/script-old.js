const startButton = document.querySelector("#start-btn");
const questionContainer = document.querySelector("#questionContainer");
const mainHeader = document.querySelector("#mainHeader");
const timerSpan = document.querySelector("#timerSpan");
const nextButton = document.querySelector("#next-btn");
const questionElement = document.querySelector("#question");
const answerBtns = document.querySelector("#answerBtns");

startButton.addEventListener("click", startQuiz);

const questions = [
    {
        question: 'How do you write a single line comment?',
        answers: [
            { text: '/*', correct: false },
            { text: '<!-- -->', correct: false },
            { text: '//', correct: true },
            { text: '/-', correct: false }
        ]
    },
    {
        question: 'How do you write a multi line comment?',
        answers: [
            { text: '/*', correct: true },
            { text: '<!-- -->', correct: false },
            { text: '//', correct: false },
            { text: '/-', correct: false }
        ]
    },
    {
        question: 'What answer shows strict type checking',
        answers: [
            { text: '!=', correct: false },
            { text: '===', correct: true },
            { text: '=', correct: false },
            { text: '+=', correct: false }
        ]
    },
    {
        question: 'True or False: Functions can only be written with arguments passed in?',
        answers: [
            { text: 'False', correct: true },
            { text: 'True', correct: false }
        ]
    }
];

let randomQuestions, currentQuestion;

console.log(questions);

// questionElement.textContent = JSON.stringify(questions[0].question);

function startQuiz() {
    mainHeader.classList.add('hide');
    startButton.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionContainer.classList.remove('hide');
    timerSpan.classList.remove('hide');
    nextButton.classList.remove('hide');
    nextQuestion();
}

function nextQuestion() {
    resetState();
    showQuestion(randomQuestions[currentQuestion]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add("btn")
        button.classList.add("answerBtn")
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', chooseAnswer);
        answerBtns.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function chooseAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerBtns.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}