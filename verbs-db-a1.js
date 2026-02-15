// verbsA1.js

const verbsA1 = [
  {
    base: "gehen",
    past: "ging",
    participle: "gegangen",
    translations: ["to go"],
    derived: ["gehst", "geht", "gehen", "gingen"],
    varieties: [
      {
        variant: "gehen + in",
        prepositions: ["in"],
        explanation: "Use 'in' when going into a place.",
        examples: ["Ich gehe in die Schule."]
      },
      {
        variant: "gehen + nach",
        prepositions: ["nach"],
        explanation: "Use 'nach' when going toward a city, country, or home.",
        examples: ["Er geht nach Hause."]
      },
      {
        variant: "ausgehen",
        prepositions: [],
        explanation: "Separable verb: leaving home to go out socially.",
        examples: ["Wir gehen heute Abend aus."],
        derived: ["gehst aus", "geht aus", "gehen aus", "gingen aus"]
      },
      {
        variant: "zurückgehen",
        prepositions: [],
        explanation: "Separable verb: returning to a previous place.",
        examples: ["Er geht nach dem Einkaufen zurück."],
        derived: ["gehst zurück", "geht zurück", "gehen zurück", "gingen zurück"]
      },
      {
        variant: "mitgehen",
        prepositions: [],
        explanation: "Separable verb: to accompany someone.",
        examples: ["Ich gehe mit dir zum Supermarkt."],
        derived: ["gehst mit", "geht mit", "gehen mit", "gingen mit"]
      }
    ]
  },
  {
    base: "machen",
    past: "machte",
    participle: "gemacht",
    translations: ["to do", "to make"],
    derived: ["machst", "macht", "machen", "machten"],
    varieties: [
      {
        variant: "sich machen + auf",
        prepositions: ["auf"],
        explanation: "Reflexive: to get ready for something.",
        examples: ["Wir machen uns auf den Weg."]
      },
      {
        variant: "machen + zu",
        prepositions: ["zu"],
        explanation: "To close something.",
        examples: ["Ich mache die Tür zu."]
      }
    ]
  },
  {
    base: "sehen",
    past: "sah",
    participle: "gesehen",
    translations: ["to see"],
    derived: ["siehst", "sieht", "sehen", "sahen"],
    varieties: [
      {
        variant: "sehen + an",
        prepositions: ["an"],
        explanation: "To look at something.",
        examples: ["Ich sehe den Film an."]
      },
      {
        variant: "fernsehen",
        prepositions: [],
        explanation: "Separable verb: to watch TV.",
        examples: ["Wir sehen abends fern."],
        derived: ["siehst fern", "sieht fern", "sehen fern", "sahen fern"]
      }
    ]
  },
  {
    base: "wohnen",
    past: "wohnte",
    participle: "gewohnt",
    translations: ["to live", "to reside"],
    derived: ["wohnst", "wohnt", "wohnen", "wohnten"],
    varieties: [
      {
        variant: "wohnen + in",
        prepositions: ["in"],
        explanation: "To reside in a city or country.",
        examples: ["Ich wohne in Berlin."]
      }
    ]
  },
  {
    base: "sich freuen",
    past: "freute sich",
    participle: "gefreut",
    translations: ["to be happy"],
    reflexive: true,
    derived: ["freust dich", "freut sich", "freuen uns", "freuten sich"],
    varieties: [
      {
        variant: "sich freuen auf",
        prepositions: ["auf"],
        explanation: "Looking forward to something in the future.",
        examples: ["Ich freue mich auf das Wochenende."]
      },
      {
        variant: "sich freuen über",
        prepositions: ["über"],
        explanation: "Being happy about something that already happened.",
        examples: ["Sie freut sich über das Geschenk."]
      }
    ]
  },
  {
    base: "essen",
    past: "aß",
    participle: "gegessen",
    translations: ["to eat"],
    derived: ["isst", "isst", "essen", "aßen"],
    varieties: [
      {
        variant: "essen + zu",
        prepositions: ["zu"],
        explanation: "To eat at a specific location (e.g., at home).",
        examples: ["Wir essen zu Hause."]
      }
    ]
  },
  {
    base: "trinken",
    past: "trank",
    participle: "getrunken",
    translations: ["to drink"],
    derived: ["trinkst", "trinkt", "trinken", "tranken"],
    varieties: [
      {
        variant: "trinken + auf",
        prepositions: ["auf"],
        explanation: "To drink a toast to something.",
        examples: ["Wir trinken auf das neue Jahr."]
      }
    ]
  }
];

export default verbsA1;
