// Quiz Variables
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

// Load Questions from JSON
const questions = [
    {
        "question": "Berechne den Wert des Integrals ∫[0,2] (3x² - 2x + 1) dx.",
        "answers": {
            "A": "6",
            "B": "5",
            "C": "4",
            "D": "3"
        },
        "correct": "A"
    },
    {
        "question": "Bestimme den Grenzwert von f(x) = (x² - 4) / (x - 2) für x → 2.",
        "answers": {
            "A": "4",
            "B": "2",
            "C": "0",
            "D": "Unbestimmt"
        },
        "correct": "A"
    },
    {
        "question": "Wie lautet die allgemeine Lösung der Differentialgleichung y' = 3x²?",
        "answers": {
            "A": "y = x³ + C",
            "B": "y = 3x³ + C",
            "C": "y = x² + C",
            "D": "y = x³"
        },
        "correct": "A"
    },
    {
        "question": "Berechne das Volumen des Körpers, der durch die Drehung der Funktion f(x) = x² von x=0 bis x=2 um die x-Achse entsteht.",
        "answers": {
            "A": "π*8/5",
            "B": "π*4/3",
            "C": "π*2/3",
            "D": "π*16/3"
        },
        "correct": "B"
    },
    {
        "question": "In einer Umfrage gaben 70% der Befragten an, den neuen Film gesehen zu haben. Wie groß ist die Wahrscheinlichkeit, dass von 4 zufällig ausgewählten Befragten genau 2 den Film gesehen haben?",
        "answers": {
            "A": "0,5",
            "B": "0,4",
            "C": "0,3",
            "D": "0,6"
        },
        "correct": "B"
    },
    {
        "question": "Wie lautet die Gleichung der Tangente an die Funktion f(x) = x³ - 3x an der Stelle x = 1?",
        "answers": {
            "A": "y = 2x - 1",
            "B": "y = 3x - 1",
            "C": "y = 3x - 2",
            "D": "y = 2x + 1"
        },
        "correct": "A"
    },
    {
        "question": "Berechne das Flächenintegral ∫∫_D (x² + y²) dA, wobei D das Quadrat [0,1] x [0,1] ist.",
        "answers": {
            "A": "2/3",
            "B": "1/2",
            "C": "1/3",
            "D": "1"
        },
        "correct": "A"
    }
];


// HTML Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const questionEl = document.getElementById("question");
const answersEl = document.querySelectorAll(".answer");
const timerEl = document.getElementById("time-left");
const finalScoreEl = document.getElementById("final-score");

// Start Quiz
document.getElementById("start-button").addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    score = 0;
    currentQuestionIndex = 0;
    loadQuestion();
    startTimer();
}

// Load a Question
function loadQuestion() {
    showCurrentResults();
    const question = questions[currentQuestionIndex];
    questionEl.textContent = question.question;
    answersEl.forEach((button) => {
        const option = button.dataset.option;
        button.textContent = question.answers[option];
        button.onclick = () => checkAnswer(option);
    });
}

// Check Answer
function checkAnswer(option) {
    const correct = questions[currentQuestionIndex].correct;
    if (option === correct) {
        score++;
    } else {
        score--;
    }
    nextQuestion();
}

// Timer
function startTimer() {
    let timeLeft = 60;
    timerEl.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

// Next Question
function nextQuestion() {
    clearInterval(timerInterval);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
	  
        loadQuestion();
        startTimer();
    } else {
        showResults();
    }
}
// Show current Results
function showCurrentResults() {
    finalScoreEl.textContent = score;
}

// Show final Results
function showResults() {
    quizScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");
    finalScoreEl.textContent = score;
}

// Restart Quiz
document.getElementById("restart-button").addEventListener("click", () => {
    resultsScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});
