// Fragen-Arrays initialisieren
let analysis_questions = [
   {
    "question": "Gegeben ist die Funktion f mit f(x) = x² · sin(x) (x ∈ ℝ). Eine Gleichung ihrer ersten Ableitungsfunktion f' lautet:",
    "answers": {
        "A": "f'(x) = 2·x·sin(x) + x²·cos(x) (x ∈ ℝ)",
        "B": "f'(x) = 2·x·sin(x) - x²·cos(x) (x ∈ ℝ)",
        "C": "f'(x) = 2·x·cos(x) (x ∈ ℝ)",
        "D": "f'(x) = -2·x·cos(x) (x ∈ ℝ)",
        "E": "f'(x) = 1/3·x³·sin(x) - x²·cos(x) (x ∈ ℝ)"
    },
    "correct": "A",
    "solution": "Die Ableitung f'(x) wird mit der Produktregel gebildet: (u·v)' = u'·v + u·v'. Setze u = x² und v = sin(x). Dann ist u' = 2x und v' = cos(x). Damit ergibt sich f'(x) = 2x·sin(x) + x²·cos(x)."
},
    // Grenzwert
    {
        "question": "Bestimme den Grenzwert lim(x → ∞) (3x² - 2x + 1) / (x² + 5).",
        "answers": {
            "A": "3",
            "B": "0",
            "C": "∞",
            "D": "5",
            "E": "1"
        },
        "correct": "A",
        "solution": "Die höchsten Potenzen von Zähler und Nenner sind beide x². Der Koeffizient ist 3/1 = 3."
    },
    {
        "question": "Welchen Grenzwert besitzt die Funktion f(x) = (e^x - 1) / x für x → 0?",
        "answers": {
            "A": "1",
            "B": "0",
            "C": "∞",
            "D": "e",
            "E": "2"
        },
        "correct": "A",
        "solution": "Durch Anwendung der Regel von L'Hospital ergibt sich lim(x → 0) (e^x - 1) / x = e^0 / 1 = 1."
    },

    // Wurzelfunktionenschar
    {
        "question": "Gegeben ist die Funktionenschar f_k(x) = √(x² + k). Welche Aussage trifft für k > 0 zu?",
        "answers": {
            "A": "Alle Funktionen haben dieselbe Nullstelle.",
            "B": "Die Funktionen sind für alle x definiert.",
            "C": "Die Funktionen haben keine Nullstelle.",
            "D": "Die Ableitungen sind identisch.",
            "E": "Die Graphen aller Funktionen verlaufen durch den Ursprung."
        },
        "correct": "C",
        "solution": "Da x² + k für k > 0 nie Null wird, besitzt keine Funktion dieser Schar eine Nullstelle."
    },
    {
        "question": "Für f_k(x) = √(x + k) berechne die Ableitung.",
        "answers": {
            "A": "f'(x) = 1 / (2√(x + k))",
            "B": "f'(x) = 2√(x + k)",
            "C": "f'(x) = 1 / √(x + k)",
            "D": "f'(x) = k / (2√(x + k))",
            "E": "f'(x) = 0"
        },
        "correct": "A",
        "solution": "Die Ableitung von √u ist 1 / (2√u) · u'. Hier ist u = x + k, sodass u' = 1."
    },

    // Exponential- & ganzrationale Funktionen
    {
        "question": "Welche der folgenden Funktionen ist eine Exponentialfunktion?",
        "answers": {
            "A": "f(x) = x^3",
            "B": "f(x) = e^x",
            "C": "f(x) = x^e",
            "D": "f(x) = 3x",
            "E": "f(x) = ln(x)"
        },
        "correct": "B",
        "solution": "Eine Exponentialfunktion hat die Form f(x) = a^x oder f(x) = e^x."
    },
    {
        "question": "Gegeben ist die Funktion f(x) = 2x³ - 5x² + 3. Bestimme die Ableitung f'(x).",
        "answers": {
            "A": "f'(x) = 6x² - 10x",
            "B": "f'(x) = 3x² - 5x + 3",
            "C": "f'(x) = 6x - 10",
            "D": "f'(x) = 6x³ - 10x² + 3",
            "E": "f'(x) = 0"
        },
        "correct": "A",
        "solution": "Die Potenzregel ergibt f'(x) = 6x² - 10x."
    },

    // Extremwertaufgabe & Flächeninhalt
    {
        "question": "Ein Rechteck hat einen festen Umfang von 20. Welche Seitenlängen maximieren die Fläche?",
        "answers": {
            "A": "(5,5)",
            "B": "(4,6)",
            "C": "(2,8)",
            "D": "(3,7)",
            "E": "(1,9)"
        },
        "correct": "A",
        "solution": "Ein Quadrat liefert bei gegebenem Umfang die maximale Fläche. Hier also 5 × 5."
    },
    {
        "question": "Gegeben ist f(x) = x². Bestimme die Fläche zwischen f und der x-Achse im Intervall [0,2].",
        "answers": {
            "A": "8/3",
            "B": "4/3",
            "C": "2",
            "D": "4",
            "E": "1"
        },
        "correct": "A",
        "solution": "Das Integral ∫ x² dx von 0 bis 2 ergibt (1/3)x³ | 0 bis 2 = 8/3."
    },

    // Wendepunkt
    {
        "question": "Gegeben ist die Funktion f(x) = x³ - 3x² + 2x. Bestimme die Wendepunkte.",
        "answers": {
            "A": "(1,0)",
            "B": "(2,0)",
            "C": "(1,1)",
            "D": "(0,0)",
            "E": "(3,2)"
        },
        "correct": "A",
        "solution": "Die Wendepunkte ergeben sich aus f''(x) = 0 und Vorzeichenwechsel von f'''."
    },
    {
        "question": "Welche Bedingung muss für einen Wendepunkt erfüllt sein?",
        "answers": {
            "A": "f''(x) = 0 und Vorzeichenwechsel von f'''(x)",
            "B": "f'(x) = 0",
            "C": "f(x) = 0",
            "D": "f''(x) > 0",
            "E": "f'''(x) = 0"
        },
        "correct": "A",
        "solution": "Ein Wendepunkt tritt auf, wenn die zweite Ableitung Null ist und die dritte Ableitung das Vorzeichen wechselt."
    }, {
        "question": "Bestimme die Ableitung der Funktion f(x) = (x² + 1) · e^x.",
        "answers": {
            "A": "f'(x) = 2x e^x + (x² + 1)e^x",
            "B": "f'(x) = 2x e^x",
            "C": "f'(x) = x² e^x",
            "D": "f'(x) = (x² + 1) e^x",
            "E": "f'(x) = 2x + e^x"
        }
];




let algebra_questions = [
    
];

let stochastik_questions = [
    
];

// Variablen für das Quiz
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

// HTML-Elemente abrufen
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const questionEl = document.getElementById("question");
const answersEl = document.querySelectorAll(".answer");
const timerEl = document.getElementById("time-left");
const finalScoreEl = document.getElementById("final-score");

// Event Listener für die Quiz-Buttons
document.getElementById("analysis-button").addEventListener("click", () => startQuiz(analysis_questions));
document.getElementById("algebra-button").addEventListener("click", () => startQuiz(algebra_questions));
document.getElementById("stochastik-button").addEventListener("click", () => startQuiz(stochastik_questions));
document.getElementById("start-button").addEventListener("click", () => startQuiz("mix"));

// Event-Listener für den "OK"-Button im Lösungspopup
document.getElementById("solution-ok").addEventListener("click", function () {
    document.getElementById("solution-modal").classList.add("hidden");
    nextQuestion();
});

// Startet das Quiz mit der gewählten Kategorie
function startQuiz(category) {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    score = 0;
    currentQuestionIndex = 0;

    if (category === "mix") {
        questions = [...analysis_questions, ...algebra_questions, ...stochastik_questions];
        questions = shuffleArray(questions);
    } else {
        questions = [...category];
    }

    loadQuestion();
    startTimer();
}

// Lädt die aktuelle Frage
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    showCurrentResults();
    const question = questions[currentQuestionIndex];
    questionEl.textContent = question.question;
    answersEl.forEach((button) => {
        const option = button.dataset.option;
        button.textContent = question.answers[option];
        button.onclick = () => checkAnswer(option);
    });
}

// Antwort überprüfen
function checkAnswer(option) {
    const question = questions[currentQuestionIndex];
    const correct = question.correct;
    const solutionModal = document.getElementById("solution-modal");
    const solutionText = document.getElementById("solution-text");

    if (option === correct) {
        score++;
        nextQuestion(); // Direkt zur nächsten Frage
    } else {
        
        clearInterval(timerInterval);
        
        solutionText.innerHTML = "<strong>Falsch!</strong> " + (question.solution || "Keine Lösung verfügbar.");
        solutionModal.classList.remove("hidden"); // Pop-up einblenden
    
	}
}


// Startet den Timer
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

// Lädt die nächste Frage oder zeigt das Endergebnis
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

// Zeigt den aktuellen Punktestand an
function showCurrentResults() {
    finalScoreEl.textContent = `Punkte: ${score}`;
}

// Endergebnis anzeigen
function showResults() {
    quizScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");
    finalScoreEl.textContent = `Endpunktzahl: ${score}`;
}

// Quiz neu starten
document.getElementById("restart-button").addEventListener("click", () => {
    resultsScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

// Mischt ein Array zufällig (für den Mix-Modus)
function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}




