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
        },
        "correct": "A",
        "solution": "Produktregel: (u·v)' = u'·v + u·v'. Hier ist u = x² + 1, v = e^x."
    },
    {
        "question": "Berechne die Ableitung von f(x) = sin(x²).",
        "answers": {
            "A": "f'(x) = cos(x²) · 2x",
            "B": "f'(x) = 2sin(x)",
            "C": "f'(x) = cos(x²)",
            "D": "f'(x) = x² cos(x²)",
            "E": "f'(x) = sin(2x)"
        },
        "correct": "A",
        "solution": "Kettenregel: Ableitung von sin(u) ist cos(u) · u'. Hier ist u = x², also u' = 2x."
    },

    // Gebrochenrationale Funktionen, Logarithmus, Winkel
    {
        "question": "Bestimme die Ableitung von f(x) = ln(x² + 1).",
        "answers": {
            "A": "f'(x) = 2x / (x² + 1)",
            "B": "f'(x) = 1 / (x² + 1)",
            "C": "f'(x) = ln(2x)",
            "D": "f'(x) = 2x ln(x² + 1)",
            "E": "f'(x) = x / (x² + 1)"
        },
        "correct": "A",
        "solution": "Kettenregel: Ableitung von ln(u) ist u'/u mit u = x² + 1, also u' = 2x."
    },
    {
        "question": "Für welchen Wert von x gilt tan(x) = 1?",
        "answers": {
            "A": "x = π/4",
            "B": "x = π/6",
            "C": "x = π/2",
            "D": "x = π/3",
            "E": "x = 0"
        },
        "correct": "A",
        "solution": "tan(π/4) = sin(π/4) / cos(π/4) = 1."
    },

    // Integral, bestimmtes
    {
        "question": "Berechne das bestimmte Integral ∫₀² (2x + 1) dx.",
        "answers": {
            "A": "6",
            "B": "4",
            "C": "8",
            "D": "3",
            "E": "10"
        },
        "correct": "A",
        "solution": "Das Integral von 2x + 1 ist x² + x. Evaluierung: (2² + 2) - (0² + 0) = 4 + 2 = 6."
    },
    {
        "question": "Welcher Wert ergibt sich für ∫₁³ 3x² dx?",
        "answers": {
            "A": "26",
            "B": "27",
            "C": "28",
            "D": "30",
            "E": "24"
        },
        "correct": "B",
        "solution": "Das Integral von 3x² ist x³. Evaluierung: (3³) - (1³) = 27 - 1 = 27."
    },

    // Monotonie, Normale, Nullstelle
    {
        "question": "Welche Ableitung bestimmt das Monotonieverhalten einer Funktion?",
        "answers": {
            "A": "f'",
            "B": "f''",
            "C": "f'''",
            "D": "∫f",
            "E": "lim f"
        },
        "correct": "A",
        "solution": "Die erste Ableitung zeigt, wo eine Funktion steigt oder fällt."
    },
    {
        "question": "Welche Gleichung beschreibt die Normale der Funktion f(x) = x² an x = 1?",
        "answers": {
            "A": "y = -2x + 3",
            "B": "y = 2x + 1",
            "C": "y = -x + 2",
            "D": "y = -x + 1",
            "E": "y = 2x - 1"
        },
        "correct": "A",
        "solution": "Normale: m = -1/f'(1). Hier f'(x) = 2x, also f'(1) = 2. Normale: m = -1/2 → y = -2x + 3."
    },

    // Polstelle, Schnittpunkte mit den Koordinatenachsen, Stammfunktion
    {
        "question": "Welcher Wert von x führt zu einer Polstelle der Funktion f(x) = 1 / (x - 2)?",
        "answers": {
            "A": "x = 2",
            "B": "x = 0",
            "C": "x = 1",
            "D": "x = -1",
            "E": "x = 3"
        },
        "correct": "A",
        "solution": "Eine Polstelle tritt auf, wenn der Nenner Null wird. Hier ist das bei x - 2 = 0 der Fall."
    },
    {
        "question": "Welche der folgenden Funktionen ist eine Stammfunktion von f(x) = 3x²?",
        "answers": {
            "A": "F(x) = x³",
            "B": "F(x) = 3x³",
            "C": "F(x) = x³ + C",
            "D": "F(x) = x²",
            "E": "F(x) = 3x"
        },
        "correct": "C",
        "solution": "Die Stammfunktion von x^n ist (1/(n+1))x^(n+1) + C. Hier also (1/3)3x³ + C = x³ + C."
    },

    // Stetigkeit, Symmetrie, Tangente
    {
        "question": "Welche der folgenden Funktionen ist nicht stetig?",
        "answers": {
            "A": "f(x) = 1 / (x - 2)",
            "B": "f(x) = x²",
            "C": "f(x) = e^x",
            "D": "f(x) = ln(x)",
            "E": "f(x) = sin(x)"
        },
        "correct": "A",
        "solution": "f(x) = 1 / (x - 2) hat eine Polstelle bei x = 2 und ist dort nicht stetig."
    },
    {
        "question": "Welche der folgenden Funktionen ist achsensymmetrisch zur y-Achse?",
        "answers": {
            "A": "f(x) = x²",
            "B": "f(x) = x³",
            "C": "f(x) = x",
            "D": "f(x) = sin(x)",
            "E": "f(x) = tan(x)"
        },
        "correct": "A",
        "solution": "Eine Funktion ist achsensymmetrisch, wenn f(-x) = f(x). Das trifft auf x² zu."
    },
    {
        "question": "Welche Bedingung erfüllt die Tangente an eine Funktion f(x) im Punkt (a, f(a))?",
        "answers": {
            "A": "Sie hat die Steigung f'(a).",
            "B": "Sie verläuft immer durch die y-Achse.",
            "C": "Sie hat immer eine Steigung von 1.",
            "D": "Sie ist parallel zur x-Achse.",
            "E": "Sie hat keine Steigung."
        },
        "correct": "A",
        "solution": "Die Tangente an f(x) im Punkt x = a hat die Steigung f'(a)."
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




