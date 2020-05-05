export default function Question(question, choices, answerKey) {
    this.question = question;
    this.choices = choices;
    this.answerKey = answerKey;

}

const q1 = new Question(
    "What's 1 + 1?",
    [2, 3, 7, 4],
    0
)