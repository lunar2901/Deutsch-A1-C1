// verbsB1.js

const verbsB1 = [
  {
    base: "entscheiden",
    past: "entschied",
    participle: "entschieden",
    translations: ["to decide"],
    derived: ["entscheidest", "entscheidet", "entscheiden", "entschieden"],
    varieties: [
      {
        variant: "entscheiden + über",
        prepositions: ["über"],
        explanation: "To decide about something.",
        examples: ["Wir müssen über das neue Projekt entscheiden."]
      }
    ]
  },
  {
    base: "vergessen",
    past: "vergaß",
    participle: "vergessen",
    translations: ["to forget"],
    derived: ["vergisst", "vergisst", "vergessen", "vergaßen"],
    varieties: [
      {
        variant: "vergessen + +Akk",
        prepositions: [],
        explanation: "To forget something.",
        examples: ["Ich habe meine Hausaufgaben vergessen."]
      },
      {
        variant: "vergessen + zu + Infinitiv",
        prepositions: [],
        explanation: "To forget to do something.",
        examples: ["Ich habe vergessen, die Tür zu schließen."]
      }
    ]
  },
  {
    base: "interessieren",
    past: "interessierte",
    participle: "interessiert",
    translations: ["to interest"],
    reflexive: true,
    derived: ["interessierst dich", "interessiert sich", "interessieren uns", "interessierten sich"],
    varieties: [
      {
        variant: "sich interessieren für",
        prepositions: ["für"],
        explanation: "To be interested in something.",
        examples: ["Ich interessiere mich für Geschichte."]
      }
    ]
  },
  {
    base: "teilnehmen",
    past: "nahm teil",
    participle: "teilgenommen",
    translations: ["to participate", "to take part"],
    derived: ["nimmst teil", "nimmt teil", "nehmen teil", "nahmen teil"],
    varieties: [
      {
        variant: "teilnehmen + an",
        prepositions: ["an"],
        explanation: "To participate in something.",
        examples: ["Wir nehmen an der Konferenz teil."]
      }
    ]
  },
  {
    base: "abhängen",
    past: "hing ab",
    participle: "abgehangen",
    translations: ["to depend", "to hang out"],
    derived: ["hängst ab", "hängt ab", "hängen ab", "hingen ab"],
    varieties: [
      {
        variant: "abhängen + von",
        prepositions: ["von"],
        explanation: "To depend on something.",
        examples: ["Es hängt vom Wetter ab, ob wir gehen."]
      }
    ]
  },
  {
    base: "sich beschweren",
    past: "beschwerte sich",
    participle: "beschwert",
    translations: ["to complain"],
    reflexive: true,
    derived: ["beschwerst dich", "beschwert sich", "beschweren uns", "beschwerten sich"],
    varieties: [
      {
        variant: "sich beschweren + über",
        prepositions: ["über"],
        explanation: "To complain about something.",
        examples: ["Er beschwert sich über das Essen."]
      },
      {
        variant: "sich beschweren + bei",
        prepositions: ["bei"],
        explanation: "To complain to someone.",
        examples: ["Sie beschwert sich beim Chef."]
      }
    ]
  },
  {
    base: "sich erinnern",
    past: "erinnerte sich",
    participle: "erinnert",
    translations: ["to remember", "to recall"],
    reflexive: true,
    derived: ["erinnerst dich", "erinnert sich", "erinnern uns", "erinnerten sich"],
    varieties: [
      {
        variant: "sich erinnern + an",
        prepositions: ["an"],
        explanation: "To remember something.",
        examples: ["Ich erinnere mich an meinen ersten Schultag."]
      }
    ]
  },
  {
    base: "unterhalten",
    past: "unterhielt",
    participle: "unterhalten",
    translations: ["to entertain", "to converse"],
    derived: ["unterhältst", "unterhält", "unterhalten", "unterhielten"],
    varieties: [
      {
        variant: "sich unterhalten + über",
        reflexive: true,
        prepositions: ["über"],
        explanation: "To have a conversation about something.",
        examples: ["Wir unterhalten uns über das Wetter."]
      },
      {
        variant: "sich unterhalten + mit",
        reflexive: true,
        prepositions: ["mit"],
        explanation: "To talk with someone.",
        examples: ["Ich unterhalte mich mit meiner Kollegin."]
      }
    ]
  },
  {
    base: "vergleichen",
    past: "verglich",
    participle: "verglichen",
    translations: ["to compare"],
    derived: ["vergleichst", "vergleicht", "vergleichen", "verglichen"],
    varieties: [
      {
        variant: "vergleichen + mit",
        prepositions: ["mit"],
        explanation: "To compare something with something else.",
        examples: ["Man sollte die Preise mit anderen Geschäften vergleichen."]
      }
    ]
  },
  {
    base: "vorbereiten",
    past: "bereitete vor",
    participle: "vorbereitet",
    translations: ["to prepare"],
    derived: ["bereitest vor", "bereitet vor", "bereiten vor", "bereiteten vor"],
    varieties: [
      {
        variant: "sich vorbereiten + auf",
        reflexive: true,
        prepositions: ["auf"],
        explanation: "To prepare oneself for something.",
        examples: ["Ich bereite mich auf die Prüfung vor."]
      }
    ]
  }
];

export default verbsB1;
