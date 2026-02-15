// verbsB2.js

const verbsB2 = [
  {
    base: "aufwachen",
    past: "wachte auf",
    participle: "aufgewacht",
    translations: ["to wake up"],
    derived: ["wachst auf", "wacht auf", "wachen auf", "wachten auf"],
    varieties: [
      {
        variant: "aufwachen + aus",
        prepositions: ["aus"],
        explanation: "To wake up from something (sleep, dream).",
        examples: ["Ich wache jeden Morgen aus einem schönen Traum auf."]
      }
    ]
  },
  {
    base: "einladen",
    past: "lud ein",
    participle: "eingeladen",
    translations: ["to invite"],
    derived: ["lädst ein", "lädt ein", "laden ein", "luden ein"],
    varieties: [
      {
        variant: "einladen + zu",
        prepositions: ["zu"],
        explanation: "To invite someone to an event or place.",
        examples: ["Wir laden unsere Freunde zum Abendessen ein."]
      }
    ]
  },
  {
    base: "nachdenken",
    past: "dachte nach",
    participle: "nachgedacht",
    translations: ["to think about", "to reflect"],
    derived: ["denkst nach", "denkt nach", "denken nach", "dachten nach"],
    varieties: [
      {
        variant: "nachdenken + über",
        prepositions: ["über"],
        explanation: "To reflect or think about a topic.",
        examples: ["Er denkt über seine Zukunft nach."]
      }
    ]
  },
  {
    base: "sich vorbereiten",
    past: "bereitete sich vor",
    participle: "vorbereitet",
    translations: ["to prepare oneself"],
    reflexive: true,
    derived: ["bereitest dich vor", "bereitet sich vor", "bereiten uns vor", "bereiteten sich vor"],
    varieties: [
      {
        variant: "sich vorbereiten + auf",
        prepositions: ["auf"],
        explanation: "To prepare oneself for something.",
        examples: ["Wir bereiten uns auf die Prüfung vor."]
      }
    ]
  },
  {
    base: "zurückkommen",
    past: "kam zurück",
    participle: "zurückgekommen",
    translations: ["to come back", "to return"],
    derived: ["kommst zurück", "kommt zurück", "kommen zurück", "kamen zurück"],
    varieties: [
      {
        variant: "zurückkommen + von",
        prepositions: ["von"],
        explanation: "To come back from somewhere.",
        examples: ["Sie kommt gerade von der Arbeit zurück."]
      }
    ]
  },
  {
    base: "sich beschäftigen",
    past: "beschäftigte sich",
    participle: "beschäftigt",
    translations: ["to occupy oneself", "to deal with"],
    reflexive: true,
    derived: ["beschäftigst dich", "beschäftigt sich", "beschäftigen uns", "beschäftigten sich"],
    varieties: [
      {
        variant: "sich beschäftigen + mit",
        prepositions: ["mit"],
        explanation: "To occupy oneself with something.",
        examples: ["Ich beschäftige mich mit einem neuen Projekt."]
      }
    ]
  },
  {
    base: "überlegen",
    past: "überlegte",
    participle: "überlegt",
    translations: ["to consider", "to think about"],
    derived: ["überlegst", "überlegt", "überlegen", "überlegten"],
    varieties: [
      {
        variant: "sich überlegen + +Akk",
        reflexive: true,
        prepositions: [],
        explanation: "To think something over carefully.",
        examples: ["Ich überlege mir die Antwort."]
      }
    ]
  },
  {
    base: "sich entschuldigen",
    past: "entschuldigte sich",
    participle: "entschuldigt",
    translations: ["to apologize"],
    reflexive: true,
    derived: ["entschuldigst dich", "entschuldigt sich", "entschuldigen uns", "entschuldigten sich"],
    varieties: [
      {
        variant: "sich entschuldigen + bei",
        prepositions: ["bei"],
        explanation: "To apologize to someone.",
        examples: ["Er entschuldigt sich bei seinem Lehrer."]
      },
      {
        variant: "sich entschuldigen + für",
        prepositions: ["für"],
        explanation: "To apologize for something.",
        examples: ["Sie entschuldigt sich für die Verspätung."]
      }
    ]
  },
  {
    base: "sich erinnern",
    past: "erinnerte sich",
    participle: "erinnert",
    translations: ["to remember"],
    reflexive: true,
    derived: ["erinnerst dich", "erinnert sich", "erinnern uns", "erinnerten sich"],
    varieties: [
      {
        variant: "sich erinnern + an",
        prepositions: ["an"],
        explanation: "To recall or remember something.",
        examples: ["Ich erinnere mich an meinen ersten Schultag."]
      }
    ]
  }
];

export default verbsB2;
