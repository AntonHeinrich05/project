let analysis_questions = [];
let algebra_questions = [];
let stochastik_questions = [];
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

// HTML Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const questionEl = document.getElementById("question");
const answersEl = document.querySelectorAll(".answer");
const timerEl = document.getElementById("time-left");
const finalScoreEl = document.getElementById("final-score");

// JSON-Daten laden
function loadQuestions() {
    fetch('data/analysis.json')
        .then(response => response.json())
        .then(data => analysis_questions = data)
        .catch(error => console.error("Fehler beim Laden von Analysis:", error));

    fetch('data/algebra.json')
        .then(response => response.json())
        .then(data => algebra_questions = data)
        .catch(error => console.error("Fehler beim Laden von Algebra:", error));

    fetch('data/stochastik.json')
        .then(response => response.json())
        .then(data => stochastik_questions = data)
        .catch(error => console.error("Fehler beim Laden von Stochastik:", error));
}

// Event Listener für die Quiz-Buttons
document.getElementById("analysis-button").addEventListener("click", () => startQuiz(analysis_questions));
document.getElementById("algebra-button").addEventListener("click", () => startQuiz(algebra_questions));
document.getElementById("stochastik-button").addEventListener("click", () => startQuiz(stochastik_questions));
document.getElementById("start-button").addEventListener("click", () => startQuiz("mix"));

// Start Quiz
function startQuiz(category) {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    score = 0;
    currentQuestionIndex = 0;

    if (category === "mix") {
        questions = [...analysis_questions, ...algebra_questions, ...stochastik_questions];
        questions = shuffleArray(questions);
    } else {
        questions = category;
    }

    loadQuestion();
    startTimer();
}

// Frage laden
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

// Antwort prüfen
function checkAnswer(option) {
    const correct = questions[currentQuestionIndex].correct;
    if (option === correct) {
        score++;
    } else {
        score--;
    }
    nextQuestion();
}

// Timer starten
function startTimer() {
    let timeLeft = 120;
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

// Nächste Frage
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

// Aktuellen Punktestand anzeigen
function showCurrentResults() {
    finalScoreEl.textContent = score;
}

// Endergebnis anzeigen
function showResults() {
    quizScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");
    finalScoreEl.textContent = score;
}

// Quiz neu starten
document.getElementById("restart-button").addEventListener("click", () => {
    resultsScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

// Hilfsfunktion zum Mischen eines Arrays (für den Mix-Modus)
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Fragen beim Laden der Seite aus JSON-Dateien laden
loadQuestions();
