var questionArea = document.getElementsByClassName('questions')[0],
  answerArea = document.getElementsByClassName('answers')[0],
  checker = document.getElementsByClassName('checker')[0],
  current = 0,

  allQuestions = {
    'What does API stand for?': ['apple, banana, indigo', 'Abstract Performance Intervals', 'Application Programming Interface', 2],

    'What does DOM stand for?': ['Document Object Model', 'Dominatrix', 'Short for Document', 0],

    'Which is a root element?': ['<body>', '<html>', '"href"', 1]
  };
;
var count = 0;
var countEl = document.querySelector("#count");
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");



function setScore() {
    countEl.textContent = count;
}


function loadQuestion(curr) {
    var question = Object.keys(allQuestions)[curr];

    questionArea.innerHTML = '';
    questionArea.innerHTML = question;
}

function loadAnswers(curr) {
    var answers = allQuestions[Object.keys(allQuestions)[curr]];

    answerArea.innerHTML = '';

    for (var i = 0; i < answers.length - 1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);

        createDiv.appendChild(text); 
    }
}

start.ad