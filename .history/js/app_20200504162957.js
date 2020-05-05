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
    "When was JS created?",
    ["June 1995", "May 1995", "July 1885", "Sept 1996"],
    1
)

const q3 = new Question(
    "What does CSS stand for?",
    ["Cusa", "Cisa", "Cascading Style Sheets", "Cosa"],
    2
)

const q4 = new Question(
    "THe full form of HTML is...",
    ["Hypothalamus", "Hisan", "Huca", "Hyper Text Markup Language"],
    3
)

const q5 = new Question(
    "Console.log(typeof []) would return what?",
    ["Barr", "Object", "Null", "Array"],
    1
)

const quiz = new Quiz([q1, q2, q3, q4, q5]);

const setValue = (elem, value) {
    elem.innerHTML = text;
}

const renderQuestion = _ => {
    const question = quiz.getCurrentQuestion().question;
    setValue(quizQuestionWl, question);
    quizQuestionEl.innerHTML = question;
}

renderQuestion();

const renderAll = _ => {

    if (quiz.hasEnded()) {
        // renderEndScreen
    } else {
        // 1. render the question
        // 2. render the choices elements
        // 3. render Tracker
        // 4. render Progress
    }
}
})();