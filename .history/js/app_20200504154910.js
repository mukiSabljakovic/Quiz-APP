import Question from "./Question.js";
import Quiz from "./Quiz.js";



const App = (function() {
    const counter = 0;

    const incrementCounter = () => {
        counter++;
    }

    const getCounter = () => {
        return counter;
    }

    const setCounter = (newNum) => {
        counter = newNum;
    }
})