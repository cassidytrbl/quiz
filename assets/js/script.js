var begin = document.getElementById("beginButton");
var timerEl = document.querySelector(".timer");
var quizArea = document.getElementById("quizArea");
var questionEl = document.getElementById("question");
var answerEl1 = document.getElementById("answer1");
var answerEl2 = document.getElementById("answer2");
var answerEl3 = document.getElementById("answer3");
var secondsLeft = 90;
var questionNumber = 0;
var correctAnswers = 0;
var intials = document.getElementById("textarea");
timerEl.textContent = secondsLeft;

// new
var results = document.getElementById("results");
var finalScore = document.getElementById("finalScore");
var endOfQuizMessage = document.getElementById("endOfQuizMessage");
var highScoresEl = document.getElementById("highScoreButton");
var lastAnswer = "";
var timerInterval = "";

function startQuiz() {
  buildQuiz();
  setTime();
  begin.style.display = "none";
}

function buildQuiz() {
  // Show the questions starting with the first one
  quizArea.style.display = "block";
  questionEl.textContent = myQuestions[questionNumber].question;
  answerEl1.textContent = myQuestions[questionNumber].answers.a;
  answerEl2.textContent = myQuestions[questionNumber].answers.b;
  answerEl3.textContent = myQuestions[questionNumber].answers.c;
  // remove correct answer + 1
}

function showResults() {
  // display results and hide quiz
  quizArea.style.display = "none";
  results.style.display = "block";
  finalScore.textContent =
    "Your final score is " + correctAnswers + " out of " + myQuestions.length;
}

// display the  next question
function setTime() {
  // remove var and declare variable on the top
  timerInterval = setInterval(function () {
    secondsLeft = secondsLeft - 1;
    timerEl.textContent = secondsLeft + " Seconds until Time is Up!";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);

      // call function for timeout
      endQuizOnTimeout();
    }
  }, 1000);
}

const myQuestions = [
  {
    question: "What are the Little Twin Stars names?",
    answers: {
      a: "Nana and Hachi",
      b: "Kiki and Lala",
      c: "Blue and Pink",
    },
    correctAnswer: "b",
  },
  {
    question: "What animal is Cinnamroll?",
    answers: {
      a: "Puppy",
      b: "Bunny",
      c: "Beaver",
    },
    correctAnswer: "a",
  },
  {
    question: "What is Hello Kitty's boyfriend's name?",
    answers: {
      a: "Richard",
      b: "Jordan",
      c: "Daniel",
    },
    correctAnswer: "c",
  },
  {
    question: "Who are rivals?",
    answers: {
      a: "My Melody and Kuromi",
      b: "Hello Kitty and Charmy Kitty",
      c: "Shirousa and Kirousa",
    },
    correctAnswer: "a",
  },
  {
    question: "Fill in the blank, 'Gudetama is a _ egg'",
    answers: {
      a: "hard-boiled",
      b: "lazy",
      c: "squishy",
    },
    correctAnswer: "b",
  },
];

var scores = [];

function clearScreen() {
  var screen = document.getElementById("containerTwo");
  screen.className += " hidden";
}

function displayScores() {
  var container = document.getElementById("containerThree");
  console.log(scores);

  clearScreen();

  if (scores === null) {
  } else if (scores.length >= 5) {
    for (let i = 0; i < 5; i++) {
      var text =
        i +
        1 +
        ". " +
        scores[i].userNameInput +
        " - " +
        scores[i].correctAnswers;
      var scoreEl = document.createElement("h3");
      scoreEl.innerHTML = text;
      scoreEl.classList.add("highScore");
      container.appendChild(scoreEl);
    }
  } else if (scores.length == 0) {
  } else {
    for (let i = 1; i < scores.length + 1; i++) {
      var text =
        i + ". " + scores[i].userNameInput + " - " + scores[i].correctAnswers;
      var scoreEl = document.createElement("h3");
      scoreEl.innerHTML = text;
      scoreEl.classList.add("highScore");
      container.appendChild(scoreEl);
    }
  }
}

begin.addEventListener("click", startQuiz);
highScoresEl.addEventListener("click", displayScores);

// new functions and listeners

function submitOnEnter(event) {
  if (event.which === 13) {
    event.target.form.dispatchEvent(new Event("submit", { cancelable: true }));
    event.preventDefault();
  }
}

document.getElementById("usermsg").addEventListener("keypress", submitOnEnter);

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  var userNameInput = document.getElementById("usermsg").value;
  scores.push({ userNameInput, correctAnswers });
  console.log(scores);
});

function evaluateAnswer() {
  if (lastAnswer === myQuestions[questionNumber].correctAnswer) {
    correctAnswers = correctAnswers + 1;
  } else {
    secondsLeft -= 10;
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  timerEl.textContent = "Your time: " + secondsLeft + " Seconds left.";
  showResults();
  scores.push(correctAnswers);
  console.log(scores[0]);
}

function endQuizOnTimeout() {
  endOfQuizMessage.textContent =
    "You ran out of time! " +
    (questionNumber + 1) +
    " out of " +
    myQuestions.length +
    " answered.";
  showResults();
}

function nextQuestion() {
  questionNumber += 1;
  if (questionNumber >= myQuestions.length) {
    endQuiz();
  } else {
    buildQuiz();
  }
}

answerEl1.addEventListener("click", function () {
  lastAnswer = "a";
  evaluateAnswer();
  nextQuestion();
});
answerEl2.addEventListener("click", function () {
  lastAnswer = "b";
  evaluateAnswer();
  nextQuestion();
});
answerEl3.addEventListener("click", function () {
  lastAnswer = "c";
  evaluateAnswer();
  nextQuestion();
});
