import Question from "./Question.js";
import Quiz from "./Quiz.js";



const App = (function() {
    const counter = 0;

    const doubleCounter = () => {
        counter *= 2;
    }

    const incrementCounter = () => {
        counter++;
    }

    const getCounter = () => {
        return counter;
    }

    const setCounter = (newNum) => {
        counter = newNum;
    }

    // public methods
    return {
        get: getCounter,
        set: setCounter,
    }
})();

console.log(App.get());
App.set(2);
console.log(App.get());