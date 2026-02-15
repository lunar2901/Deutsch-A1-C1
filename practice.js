import verbsA1 from "../verbs/verbs-db-a1.js";
import verbsA2 from "../verbs/verbs-db-a2.js";
import verbsB1 from "../verbs/verbs-db-b1.js";
import verbsB2 from "../verbs/verbs-db-b2.js";
import verbsC1 from "../verbs/verbs-db-c1.js";

const verbsDB = { a1: verbsA1, a2: verbsA2, b1: verbsB1, b2: verbsB2, c1: verbsC1 };

const levelSelect = document.getElementById("practice-level");
const exerciseBox = document.getElementById("exercise-box");
const answerInput = document.getElementById("answer-input");
const feedback = document.getElementById("feedback");
const newExerciseBtn = document.getElementById("new-exercise");
const checkAnswerBtn = document.getElementById("check-answer");

let currentExercise = null;

function randomVerb(level) {
    const verbs = verbsDB[level];
    return verbs[Math.floor(Math.random() * verbs.length)];
}

function generateExercise() {
    const verb = randomVerb(levelSelect.value);
    currentExercise = verb;

    // Randomly pick either base, past, participle, or preposition question
    const type = ["base", "past", "participle", "preposition"][Math.floor(Math.random() * 4)];

    let questionText = "";
    let correctAnswer = "";

    switch(type) {
        case "base":
            questionText = `What is the base form of: ${verb.participle}?`;
            correctAnswer = verb.base;
            break;
        case "past":
            questionText = `What is the past form of: ${verb.base}?`;
            correctAnswer = verb.past;
            break;
        case "participle":
            questionText = `What is the participle form of: ${verb.base}?`;
            correctAnswer = verb.participle;
            break;
        case "preposition":
            if(verb.prepositions.length > 0){
                questionText = `Which preposition(s) can be used with: ${verb.base}?`;
                correctAnswer = verb.prepositions.join(", ");
            } else {
                questionText = `No preposition question available for: ${verb.base}. Try another.`;
                correctAnswer = "";
            }
            break;
    }

    exerciseBox.innerHTML = `<p>${questionText}</p>`;
    answerInput.value = "";
    feedback.innerText = "";
    return correctAnswer;
}

let correctAnswer = generateExercise();

newExerciseBtn.addEventListener("click", () => {
    correctAnswer = generateExercise();
});

checkAnswerBtn.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if(correctAnswer.toLowerCase() === userAnswer){
        feedback.innerText = "✅ Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `❌ Wrong. Correct answer: ${correctAnswer}`;
        feedback.style.color = "red";
    }
});
