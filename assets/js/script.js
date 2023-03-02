var questionArea = document.getElementsByClassName('questions')[0],
  answerArea = document.getElementsByClassName('answers')[0],
  checker = document.getElementsByClassName('checker')[0],
  current = 0,

  // An object that holds all the questions + possible answers.
  // In the array --> last digit gives the right answer position
  allQuestions = {
    'What does API stand for?': ['apple, banana, indigo', 'Abstract Performance Intervals', 'Application Programming Interface', 2],

    'What does DOM stand for?': ['Document Object Model', 'Dominatrix', 'Short for Document', 0],

    'Which is a root element?': ['<body>', '<html>', '"href"', 1]
  };

function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable

  var question = Object.keys(allQuestions)[curr];

  questionArea.innerHTML = '';
  questionArea.innerHTML = question;
}

function loadAnswers(curr) {
  // This function loads all the possible answers of the given question

  var answers = allQuestions[Object.keys(allQuestions)[curr]];

  answerArea.innerHTML = '';

  for (var i = 0; i < answers.length - 1; i += 1) {
    var createDiv = document.createElement('div'),
      text = document.createTextNode(answers[i]);

    createDiv.appendChild(text);
    createDiv.addEventListener("click", checkAnswer(i, answers));


    answerArea.appendChild(createDiv);
  }
}

function checkAnswer(i, arr) {
  // This is the function that will run, when clicked on one of the answers
  // Check if givenAnswer is sams as the correct one
  // After this, check if it's the last question:
  // If it is: empty the answerArea and let them know it's done.

  return function () {
    var givenAnswer = i,
      correctAnswer = arr[arr.length - 1];

    if (givenAnswer === correctAnswer) {
      
      addChecker(true);
    } else {
      addChecker(false);
    }

    if (current < Object.keys(allQuestions).length - 1) {
      current += 1;

      loadQuestion(current);
      loadAnswers(current);
    } else {
      questionArea.innerHTML = "That's all! How'd you do?";
      answerArea.innerHTML = '';
    }

  };
}

function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false

  var createDiv = document.createElement('div'),
    txt = document.createTextNode(current + 1);

  createDiv.appendChild(txt);

  if (bool) {



    createDiv.className += 'correct';
    checker.appendChild(createDiv);
  } else {
    createDiv.className += 'false';
    checker.appendChild(createDiv);
  }
}


// Start the quiz right away
loadQuestion(current);
loadAnswers(current);