import verbsA1 from "./verbs/verbs-db-a1.js";
import verbsA2 from "./verbs/verbs-db-a2.js";
import verbsB1 from "./verbs/verbs-db-b1.js";
import verbsB2 from "./verbs/verbs-db-b2.js";
import verbsC1 from "./verbs/verbs-db-c1.js";

const levelSelect = document.getElementById("level-select");
const searchInput = document.getElementById("search-input");
const verbsContainer = document.getElementById("verbs-container");

const verbsDB = { a1: verbsA1, a2: verbsA2, b1: verbsB1, b2: verbsB2, c1: verbsC1 };

function displayVerbs(verbs) {
    verbsContainer.innerHTML = "";
    verbs.forEach(verb => {
        const card = document.createElement("div");
        card.classList.add("verb-card");

        const variations = verb.variations ? verb.variations.map(v => `<li>${v.base} (${v.translations.join(", ")})</li>`).join("") : "";

        card.innerHTML = `
            <h3>${verb.base}</h3>
            <p>Past: ${verb.past || "-"}</p>
            <p>Participle: ${verb.participle || "-"}</p>
            <p>Translations: ${verb.translations.join(", ")}</p>
            <p>Prepositions: ${verb.prepositions.join(", ") || "-"}</p>
            <p>Derived: ${verb.derived.join(", ") || "-"}</p>
            ${variations ? `<p>Variations:</p><ul>${variations}</ul>` : ""}
            <p>Examples:</p>
            <ul>${verb.examples.map(e => `<li>${e}</li>`).join("")}</ul>
        `;
        verbsContainer.appendChild(card);
    });
}

function filterVerbs(level, query) {
    const verbs = verbsDB[level];
    return verbs.filter(v => v.base.toLowerCase().includes(query.toLowerCase()));
}

levelSelect.addEventListener("change", () => displayVerbs(verbsDB[levelSelect.value]));
searchInput.addEventListener("input", () => displayVerbs(filterVerbs(levelSelect.value, searchInput.value)));

// initial display
displayVerbs(verbsDB.a1);
