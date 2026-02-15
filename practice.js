import verbsA1 from "../verbs/verbs-db-a1.js";
import verbsA2 from "../verbs/verbs-db-a2.js";
import verbsB1 from "../verbs/verbs-db-b1.js";
import verbsB2 from "../verbs/verbs-db-b2.js";
import verbsC1 from "../verbs/verbs-db-c1.js";

const verbsDB = {
  a1: verbsA1,
  a2: verbsA2,
  b1: verbsB1,
  b2: verbsB2,
  c1: verbsC1
};

const levelSelect = document.getElementById("practice-level");
const exerciseBox = document.getElementById("exercise-box");
const answerInput = document.getElementById("answer-input");
const feedback = document.getElementById("feedback");
const newExerciseBtn = document.getElementById("new-exercise");
const checkAnswerBtn = document.getElementById("check-answer");

let correctAnswer = "";
let currentVerb = null;

function randomVerb(level) {
  const verbs = verbsDB[level];
  if (!verbs || verbs.length === 0) return null;
  return verbs[Math.floor(Math.random() * verbs.length)];
}

function generateExercise() {
  const level = levelSelect.value;
  currentVerb = randomVerb(level);
  
  if (!currentVerb) {
    exerciseBox.innerHTML = "<p>No verbs available for this level. Try another.</p>";
    return "";
  }

  // Random question type
  const types = ["base", "past", "participle", "preposition"];
  const type = types[Math.floor(Math.random() * types.length)];
  let questionText = "";
  
  switch (type) {
    case "base":
      questionText = `What is the base form of: <strong>${currentVerb.participle}</strong>?`;
      correctAnswer = currentVerb.base;
      break;
    case "past":
      questionText = `Past tense of: <strong>${currentVerb.base}</strong>?`;
      correctAnswer = currentVerb.past;
      break;
    case "participle":
      questionText = `Participle of: <strong>${currentVerb.base}</strong>?`;
      correctAnswer = currentVerb.participle;
      break;
    case "preposition":
      if (currentVerb.prepositions && currentVerb.prepositions.length > 0) {
        questionText = `Prepositions for <strong>${currentVerb.base}</strong>?`;
        correctAnswer = currentVerb.prepositions.join(", ");
      } else if (currentVerb.varieties && currentVerb.varieties.some(v => v.prepositions?.length > 0)) {
        const variant = currentVerb.varieties.find(v => v.prepositions?.length > 0);
        questionText = `Prepositions for <strong>${variant.variant}</strong>?`;
        correctAnswer = variant.prepositions.join(", ");
      } else {
        // Fallback: retry
        return generateExercise();
      }
      break;
  }

  exerciseBox.innerHTML = `<p>${questionText}</p>`;
  answerInput.value = "";
  feedback.innerText = "";
  feedback.style.color = "";
  
  return correctAnswer;
}

// Event listeners
newExerciseBtn.addEventListener("click", () => {
  correctAnswer = generateExercise();
});

checkAnswerBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  if (correctAnswer.toLowerCase() === userAnswer) {
    feedback.innerText = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.innerText = `❌ Wrong. Correct: ${correctAnswer}`;
    feedback.style.color = "red";
  }
});

// Level change auto-generates new exercise
levelSelect.addEventListener("change", () => {
  correctAnswer = generateExercise();
});

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  correctAnswer = generateExercise();
});
