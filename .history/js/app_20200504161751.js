import Question from "./Question.js";
import Quiz from "./Quiz.js";


const App = (() => {
 // cache the DOM
 const quizEl = document.querySelector(".jabquiz");
 const quizQuestionEl = document.querySelector(".jabquiz__question");
 const trackerEl = document.querySelector(".jabquiz__tracker");
 const taglineEl = document.querySelector(".jabquiz__tagline");
 const choicesEl = document.querySelector(".jabquiz__choices");
 const progressInnerEl = document.querySelector(".progress__inner");
 const nextButtonEL = document.querySelector(".next");
 const restartButtonEl = document.querySelector(".restart");

 const q1 = new Question(
     "First President of US?",
     ["Barrack", "Osama", "George", "Monkey"],
     2
 )

 const q2 = new Question(
    "First President of US?",
    ["Barrack", "Osama", "George", "Monkey"],
    2
)

const q3 = new Question(
    "First President of US?",
    ["Barrack", "Osama", "George", "Monkey"],
    2
)

const q4 = new Question(
    "First President of US?",
    ["Barrack", "Osama", "George", "Monkey"],
    2
)

const q5 = new Question(
    "First President of US?",
    ["Barrack", "Osama", "George", "Monkey"],
    2
)


})();