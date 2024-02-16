import { CorrectAnswer, IncorrectAnswer } from "../models/Answer";
import { Question } from "../models/Question";

export const useStateQuestions: Question[] = [
  new Question(
    "Hur deklareras och används `useState` i en funktionell komponent med TypeScript?",
    [
      new CorrectAnswer("const [state, setState] = useState(initialState);"),
      new IncorrectAnswer("const state = useState(initialState);"),
      new IncorrectAnswer("const [state] = useState(initialState);"),
    ],
  ),

  new Question(
    "Vad är syftet med den första värdet som `useState` returnerar?",
    [
      new IncorrectAnswer("Det är det aktuella tillståndet."),
      new CorrectAnswer(
        "Det är det aktuella tillståndet, och den andra är en funktion för att uppdatera tillståndet.",
      ),
      new IncorrectAnswer("Det är initialtillståndet."),
    ],
  ),

  new Question(
    "Kan du använda flera `useState`-anrop i samma funktionella komponent?",
    [
      new CorrectAnswer(
        "Ja, du kan använda flera `useState`-anrop för att hantera olika tillstånd.",
      ),
      new IncorrectAnswer(
        "Nej, du kan bara ha ett `useState`-anrop per komponent.",
      ),
      new IncorrectAnswer("Ja, men det rekommenderas inte."),
    ],
  ),

  new Question(
    "Vad händer om du kallar `useState` med `null` som initialtillstånd?",
    [
      new IncorrectAnswer("Det genererar ett kompileringsfel."),
      new CorrectAnswer("Det skapar ett initialtillstånd av typen `null`."),
      new IncorrectAnswer("Det kommer att ge en varningsvarning i konsolen."),
    ],
  ),

  new Question(
    "Kan du använda `useState` med komplexa datatyper som objekt och arrayer?",
    [
      new CorrectAnswer(
        "Ja, du kan använda `useState` med objekt och arrayer.",
      ),
      new IncorrectAnswer(
        "Nej, `useState` stöder endast enkla datatyper som nummer och strängar.",
      ),
      new IncorrectAnswer("Ja, men det kommer att leda till prestandaproblem."),
    ],
  ),
  new Question("Vad är huvudsyftet med `useState` i React med TypeScript?", [
    new IncorrectAnswer("Hantera effekter i funktionella komponenter."),
    new CorrectAnswer(
      "Hantera och uppdatera tillstånd i funktionella komponenter.",
    ),
    new IncorrectAnswer("Spara globala variabler för hela applikationen."),
  ]),

  new Question(
    "Vilken funktion används för att deklarera en ny tillståndsvariabel med `useState`?",
    [
      new IncorrectAnswer("const state = useVariable();"),
      new CorrectAnswer("const [state, setState] = useState(initialState);"),
      new IncorrectAnswer("const state = createState();"),
    ],
  ),

  new Question(
    "Vad är det andra elementet i den destrukturerade arrayen som `useState` returnerar?",
    [
      new IncorrectAnswer("Den ursprungliga tillståndsvärdet."),
      new CorrectAnswer("En funktion för att uppdatera tillståndet."),
      new IncorrectAnswer(
        "En boolean som indikerar om tillståndet har ändrats.",
      ),
    ],
  ),

  new Question(
    "Kan du använda flera `useState`-anrop för olika tillstånd i samma funktionella komponent?",
    [
      new CorrectAnswer("Ja, du kan använda flera `useState`-anrop."),
      new IncorrectAnswer(
        "Nej, du kan bara ha ett `useState`-anrop per komponent.",
      ),
      new IncorrectAnswer(
        "Ja, men det rekommenderas inte för att undvika konflikter.",
      ),
    ],
  ),

  new Question(
    "Vad händer om du försöker använda `useState` utanför en funktionell komponent?",
    [
      new IncorrectAnswer("Det genererar ett kompileringsfel."),
      new CorrectAnswer("Det är inte tillåtet och genererar en runtime-fel."),
      new IncorrectAnswer(
        "Det kommer inte att påverka applikationens beteende.",
      ),
    ],
  ),

  new Question(
    "Vilket problem kan uppstå om du använder det tidigare värdet i ett `useState`-anrop?",
    [
      new IncorrectAnswer("Inget problem, det är en vanlig användning."),
      new CorrectAnswer(
        "Det kan leda till felaktig uppdatering av tillståndet eftersom `setState` är asynkront.",
      ),
      new IncorrectAnswer("Det resulterar i en oändlig loop av rendercykler."),
    ],
  ),

  new Question(
    "Vad händer om du anropar flera `setState`-anrop i en och samma rendercykel?",
    [
      new CorrectAnswer(
        "React kommer att gruppera och batcha uppdateringarna för att undvika onödiga rendercykler.",
      ),
      new IncorrectAnswer("Det kommer att orsaka ett kraschfel."),
      new IncorrectAnswer("Bara det sista anropet kommer att tillämpas."),
    ],
  ),

  new Question("Kan du använda objekt som tillstånd i `useState`?", [
    new CorrectAnswer(
      "Ja, `useState` stöder både primitiva värden och objekt.",
    ),
    new IncorrectAnswer(
      "Nej, `useState` kan endast användas för primitiva värden.",
    ),
    new IncorrectAnswer(
      "Objekt kan bara användas med `useReducer`, inte `useState`.",
    ),
  ]),

  new Question(
    "Vilken typ av värden kan initialState-parameter i `useState` ha?",
    [
      new CorrectAnswer(
        "Vilken JavaScript-typ som helst, inklusive primitiva värden och objekt.",
      ),
      new IncorrectAnswer(
        "Endast primitiva värden som nummer, strängar och booleans.",
      ),
      new IncorrectAnswer("Bara null eller undefined är tillåtna."),
    ],
  ),

  new Question(
    "Vad är den primära skillnaden mellan `useState` och `useReducer` i React med TypeScript?",
    [
      new IncorrectAnswer(
        "Det finns ingen skillnad, de kan användas utbytbart.",
      ),
      new CorrectAnswer(
        "`useReducer` är mer lämpad för komplexa tillstånd och logik.",
      ),
      new IncorrectAnswer(
        "`useReducer` är endast för klasskomponenter, inte funktionella komponenter.",
      ),
    ],
  ),
  new Question(
    "Hur använder du `useState` i en funktionell komponent med TypeScript?",
    [
      new CorrectAnswer("const [count, setCount] = useState<number>(0);"),
      new IncorrectAnswer("const count = useState<number>(0);"),
      new IncorrectAnswer("const [count, setCount] = useState(0);"),
    ],
  ),
];
