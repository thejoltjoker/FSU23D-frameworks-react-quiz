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
];
