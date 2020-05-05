
export default function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0;
}

Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentIndex];
}


Quiz.prototype.nextIndex = function() {
    this.currentIndex++;
}

Quiz.prototype.hasEnded = function() {
    return this.currentIndex === this.questions.length;
}