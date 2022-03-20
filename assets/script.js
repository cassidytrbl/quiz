var begin = document.getElementById('beginButton')
var timerEl =document.querySelector('.timer')
var quizArea =document.getElementById('quizArea')
var questionEl = document.getElementById ('question')
var answerEl1 = document.getElementById ('answer1')
var answerEl2 = document.getElementById ('answer2')
var answerEl3 = document.getElementById ('answer3')
var next = document.getElementById ('nextQuestion')
var inncorrectAnswer = document.querySelector('.timer')
var secondsLeft = 120
var questionNumber = 0
var correctAnswers = 0
timerEl.textContent = secondsLeft;

function startQuiz () {
    buildQuiz();
    setTime ();
    begin.style.display = "none";
}

function buildQuiz(){
    quizArea.style.display = "block"
    questionEl.textContent = myQuestions[questionNumber].question
    answerEl1.textContent = myQuestions[questionNumber].answers.a
    answerEl2.textContent = myQuestions[questionNumber].answers.b
    answerEl3.textContent = myQuestions[questionNumber].answers.c
    correctAnswers = correctAnswers + 1
    
}

function nextQuestion(){
    questionEl.textContent = myQuestions[questionNumber].question
    answerEl1.textContent = myQuestions[questionNumber].answers.a
    answerEl2.textContent = myQuestions[questionNumber].answers.b
    answerEl3.textContent = myQuestions[questionNumber].answers.c
    correctAnswers = correctAnswers + 1
}

function showResults () {

}

// display the  next question
function setTime() {
    var timerInterval = setInterval (function() {
        secondsLeft = secondsLeft - 1;
        timerEl.textContent = secondsLeft + " Seconds until Time is Up!";
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // When the timer runs out end the quiz
            // sendMessage();
        }
    }, 1000);
}

const myQuestions = [
    {
        question: "What are the Little Twin Stars names?",
        answers: {
            a: "Nana and Hachi",
            b: "Kiki and Lala",
            c: "Blue and Pink"
        },
        correctAnswer: "b"
    },
    {
        question: "What animal is Cinnamroll?",
        answers: {
            a: "Puppy",
            b: "Bunny",
            c: "Beaver"
        },
        correctAnswer: "a"
    },
    {
        question: "What is Hello Kitty's boyfriend's name?",
        answers: {
            a: "Richard",
            b: "Jordan",
            c: "Daniel"
        },
        correctAnswer: "c"
    },
    {
        question: "Who are rivals?",
        answers: {
            a: "My Melody and Kuromi",
            b: "Hello Kitty and Charmy Kitty",
            c: "Shirousa and Kirousa"
        },
        correctAnswer: "a"
    },
    {
        question: "Fill in the blank, 'Gudetama is a _ egg'",
        answers: {
            a: "hard-boiled",
            b: "lazy",
            c: "squishy"
        },
        correctAnswer: "b"
    },
]
    begin.addEventListener('click', startQuiz);
    // add  eventlisteners to the answers that  checks if a  corrent answer was cliked on and   then  move the the next  question: questionNumber = questionNumber + 1
    nextQuestion.addEventListener("click", () => {
        questionText.innerHTML=questions[qi].question;
        displayOptions();
    });

    correctAnswers.addEventListener('click', nextQuestion);