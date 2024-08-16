const quizData = [
    {
        question: "Which of the following is the correct extension of the Python file?",
        a: ".python",
        b: ".pl",
        c: ".py",
        d: ".p",
        correct: "c",
    },
    {
        question: "Which keyword is used for function in Python?",
        a: "Function",
        b: "def",
        c: "fun",
        d: "define",
        correct: "b",
    },
    {
        question: "What is the output of print(2**3) in Python?",
        a: "6",
        b: "8",
        c: "9",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What is the maximum possible length of an identifier in Python?",
        a: "31 characters",
        b: "63 characters",
        c: "79 characters",
        d: "None of the above",
        correct: "d",
    },
    {
        question: "Which of the following is used to define a block of code in Python?",
        a: "Curly braces {}",
        b: "Parentheses ()",
        c: "Indentation",
        d: "Quotation marks",
        correct: "c",
    },
    {
        question: "What will be the output of print([1, 2, 3] + [4, 5, 6])?",
        a: "[1, 2, 3, 4, 5, 6]",
        b: "[1, 2, 3][4, 5, 6]",
        c: "[1, 2, 3, 4][5, 6]",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following functions is a built-in function in Python?",
        a: "print()",
        b: "factorial()",
        c: "sqrt()",
        d: "pandas()",
        correct: "a",
    },
    {
        question: "What is the correct syntax for importing a module in Python?",
        a: "import module_name",
        b: "include module_name",
        c: "require module_name",
        d: "using module_name",
        correct: "a",
    },
    {
        question: "Which of the following data types is immutable in Python?",
        a: "List",
        b: "Dictionary",
        c: "Set",
        d: "Tuple",
        correct: "d",
    },
    {
        question: "What does the 'break' keyword do in Python?",
        a: "Terminates the loop",
        b: "Skips the current iteration",
        c: "Terminates the program",
        d: "Restarts the loop",
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
