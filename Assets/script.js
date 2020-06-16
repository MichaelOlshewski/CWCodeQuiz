const startButton = document.querySelector("#startButton")

const questions = [
    {
        question: 'How do you write a single line comment?',
        answers: [
            {text: '/*', correct: false },
            {text: '<!-- -->', correct: false },
            {text: '//', correct: true },
            {text: '/-', correct: false }
        ]
    },
    {
        question: 'How do you write a multi line comment?',
        answers: [
            {text: '/*', correct: true },
            {text: '<!-- -->', correct: false },
            {text: '//', correct: false },
            {text: '/-', correct: false }
        ]
    },
    {
        question: 'What answer shows strict type checking',
        answers: [
            {text: '!=', correct: false },
            {text: '===', correct: true },
            {text: '=', correct: false },
            {text: '+=', correct: false }
        ]
    },
    {
        question: 'True or False: Functions can only be written with arguments passed in?',
        answers: [
            {text: 'False', correct: true },
            {text: 'True', correct: false }
        ]
    }
];

console.log(questions);

// questionElement.textContent = JSON.stringify(questions[0].question);

function startQuiz() {

}

function nextQuestion() {

}

function chooseAnswer() {

}