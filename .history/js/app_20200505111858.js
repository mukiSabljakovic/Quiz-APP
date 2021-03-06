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

const listeners = _ => {
    nextButtonEL.addEventListener("click", function() {
        console.log("clicked next");
    })

    restartButtonEl.addEventListener("click", function() {
        console.log("restart clicked");
    })
}

const setValue = (elem, value) => {
    elem.innerHTML = value;
}

const renderQuestion = _ => {
    const question = quiz.getCurrentQuestion().question;
    setValue(quizQuestionEl, question);
}

renderQuestion();

const renderChoicesElements = _ => {
    let markup = "";
    const currentChoices = quiz.getCurrentQuestion().choices;
    currentChoices.forEach((elem, index) => {
        markup += `
            <li class="jabquiz__choice">
            <input type="radio" name="choice" id="choice${index}" class="jabquiz__input">
            <label for="choice${index}" class="jabquiz__label">
                <i></i>
               <span>${elem}</span>
            </label>
        </li>
        `
    });
    setValue(choicesEl, markup);
}

const renderTracker = _ => {
    const index = quiz.currentIndex;
    setValue(trackerEl, `${index+1} of ${quiz.questions.length}`);
}

const getPercentage = (num1, num2) => {
    return Math.round((num1/num2) * 100);
}

const launch = (width, maxPercent) => {
    let loadingBar = setInterval(function() {
        if (width > maxPercent) {
            clearInterval(loadingBar);

            } else {
                width++;
                progressInnerEl.style.width = width + "%";
        }
    }, 3)
}


const renderProgress = _ => {
    // 1. width
    const currentWidth = getPercentage(quiz.currentIndex, quiz.questions.length);
    // 2. launch(0, width)
    launch(0, currentWidth);
}


const renderAll = _ => {

    if (quiz.hasEnded()) {
        // renderEndScreen
    } else {
        // 1. render the question
        renderQuestion();
        // 2. render the choices elements
        renderChoicesElements();
        // 3. render Tracker
        renderTracker();
        // 4. render Progress
        renderProgress();
    }
}

return {
    renderAll: renderAll,
    listeners: listeners
}
})();

App.renderAll();