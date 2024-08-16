const quizData = [
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Computer Style Sheets",
        correct: "b",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "class",
        b: "style",
        c: "font",
        d: "styles",
        correct: "b",
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "body:color=black;",
        b: "{body;color:black;}",
        c: "body {color: black;}",
        d: "body: color=black;",
        correct: "c",
    },
    {
        question: "How do you insert a comment in a CSS file?",
        a: "// this is a comment",
        b: "/* this is a comment */",
        c: "// this is a comment //",
        d: "' this is a comment",
        correct: "b",
    },
    {
        question: "Which property is used to change the background color?",
        a: "color",
        b: "background-color",
        c: "bgcolor",
        d: "background",
        correct: "b",
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        a: "h1 {background-color:#FFFFFF;}",
        b: "all.h1 {background-color:#FFFFFF;}",
        c: "h1.all {background-color:#FFFFFF;}",
        d: "h1.all-background {color:#FFFFFF;}",
        correct: "a",
    },
    {
        question: "Which CSS property controls the text size?",
        a: "font-style",
        b: "text-size",
        c: "font-size",
        d: "text-style",
        correct: "c",
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        a: "text-transform:uppercase",
        b: "text-transform:capitalize",
        c: "text-transform:lowercase",
        d: "transform:capitalize",
        correct: "b",
    },
    {
        question: "Which property is used to change the font of an element?",
        a: "font-style",
        b: "font-weight",
        c: "font-family",
        d: "font-size",
        correct: "c",
    },
    {
        question: "How do you select an element with id 'demo'?",
        a: "#demo",
        b: ".demo",
        c: "demo",
        d: "*demo",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
