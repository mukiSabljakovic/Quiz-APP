import Question from "./Question.js";
import Quiz from "./Quiz.js";


const q1 = new Question(
    "What's 2 + 2?",
    [2, 3, 4, 5], 
    2
);
const q2 = new Question(
    "How many colors does the rainbow have?",
    [2, 4, 9, 7],
    3
);
const q3 = new Question();


const qArray = [q1, q2, q3, q4, q5];

const myQuiz = new Quiz(qArray);
console.log(myQuiz);
