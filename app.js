import verbsA1 from "./verbs/verbs-db-a1.js";
import verbsA2 from "./verbs/verbs-db-a2.js";
import verbsB1 from "./verbs/verbs-db-b1.js";
import verbsB2 from "./verbs/verbs-db-b2.js";
import verbsC1 from "./verbs/verbs-db-c1.js";

const levelSelect = document.getElementById("level-select");
const searchInput = document.getElementById("search-input");
const verbsContainer = document.getElementById("verbs-container");

const verbsDB = {
  a1: verbsA1,
  a2: verbsA2,
  b1: verbsB1,
  b2: verbsB2,
  c1: verbsC1
};

function displayVerbs(verbs) {
  verbsContainer.innerHTML = "";
  verbs.forEach(verb => {
    const card = document.createElement("div");
    card.classList.add("verb-card");
    
    let variationsHTML = "";
    if (verb.varieties) {
      variationsHTML = "<h4>Variants:</h4><ul>";
      verb.varieties.forEach(variant => {
        variationsHTML += `<li><strong>${variant.variant}</strong>: ${variant.prepositions?.join(", ") || "-"}<br>${variant.examples?.join("<br>") || ""}</li>`;
      });
      variationsHTML += "</ul>";
    }
    
    card.innerHTML = `
      <h3>${verb.base}</h3>
      <p><strong>Past:</strong> ${verb.past || "-"}</p>
      <p><strong>Participle:</strong> ${verb.participle || "-"}</p>
      <p><strong>Translations:</strong> ${verb.translations.join(", ")}</p>
      <p><strong>Derived:</strong> ${verb.derived?.join(", ") || "-"}</p>
      ${variationsHTML}
      <p><strong>Examples:</strong></p>
      <ul>${(verb.examples || []).map(ex => `<li>${ex}</li>`).join("")}</ul>
    `;
    verbsContainer.appendChild(card);
  });
}

function filterVerbs(level, query) {
  const verbs = verbsDB[level];
  return verbs.filter(v => 
    v.base.toLowerCase().includes(query.toLowerCase()) ||
    v.translations.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );
}

// Level button clicks
document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const level = btn.dataset.level;
    levelSelect.value = level;
    displayVerbs(verbsDB[level]);
  });
});

// Search functionality
searchInput.addEventListener('input', () => {
  const level = levelSelect.value;
  const query = searchInput.value;
  displayVerbs(filterVerbs(level, query));
});

// Initial load
if (verbsDB.a1) displayVerbs(verbsDB.a1);
