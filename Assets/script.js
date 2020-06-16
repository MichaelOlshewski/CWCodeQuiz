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
    }
]
console.log(questions)