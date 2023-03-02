const startButton = document.querySelector(".start-button")

//this is for the quiz section

const viewScores = document.querySelector(".highscores");
const submitInitials = document.querySelector(".submit-initials");
const userInitials = document.querySelector('#initials');

const questionBank = new Map([
    [
        1,
        ["question", "What does API stand for?"],
        [1, "Apple Banana Indigo"],
        [2, "Abstract Performance Interval"],
        [3, "Application Programming Interface"],
        ["answer", 3],
        [true, "Correct!"]
        [false, "Wrong! Try Again!"],
    ]

    [
    2,
    ["question", "What does DOM stand for?"],
    [1, "Document Object Model"],
    [2, "Dominatrix"],
    [3, "Short for Document"],
    ["answer", 1],
    [true, "Correct!"]
    [false, "Wrong! Try Again!"],
    ]

    [
    3,
    ["question", "Which is a root element?"],
    [1, "<body>"],
    [2, "<html>"],
    [3, "'href'"],
    ["answer", 2],
    [true, "Correct!"]
    [false, "Wrong! Try Again!"],
    ]
]

let currentQuestion = 1;

const timer = {
    timeRemaining: 60,
    interval: undefined,

    // This method starts the timer for the first time when it's called after the 'start button' is clicked.
    start(time) {
        this.timeRemaining = time;
        const timerInterval = setInterval(() => {
            this.interval = timerInterval;
            this.timeRemaining--;
            timerEl.textContent = this.timeRemaining;
            if (this.timeRemaining < 1) {
                this.stopTimer();
                finishQuiz();
            }
        }, 1000);
    },

    // This method allows the timer to be decreased and is called if the user answers a question incorrectly.
    decreasetime() {
        this.timeRemaining -= 10;
    },

    // This method stops the timer and is called if the time remaining falls to/below zero, or all questions have been answered.
    stopTimer() {
        clearInterval(this.interval);
    },
};







// Event listeners!! //
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", loadQuestion);
startButton.addEventListener("click", loadAnswers);