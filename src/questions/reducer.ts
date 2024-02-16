import { CorrectAnswer, IncorrectAnswer } from "../models/Answer";
import { Question } from "../models/Question";

export const useReducerQuestions: Question[] = [
  new Question("Vad är huvudsyftet med `useReducer` i React med TypeScript?", [
    new IncorrectAnswer("Hantera tillstånd i funktionella komponenter."),
    new CorrectAnswer(
      "Hantera komplexa tillstånd och åtgärder i funktionella komponenter.",
    ),
    new IncorrectAnswer("Skapa globala tillstånd för hela applikationen."),
  ]),

  new Question("Vad är huvudskillnaden mellan `useState` och `useReducer`?", [
    new CorrectAnswer(
      "`useReducer` är mer lämplig för hantering av komplexa tillstånd och åtgärder.",
    ),
    new IncorrectAnswer("`useReducer` är endast avsett för klasskomponenter."),
    new IncorrectAnswer(
      "`useState` används alltid för att hantera sidoeffekter.",
    ),
  ]),

  new Question("Vad är den första värdet som `useReducer` returnerar?", [
    new CorrectAnswer("Det aktuella tillståndet och en dispatch-funktion."),
    new IncorrectAnswer("Endast det aktuella tillståndet."),
    new IncorrectAnswer(
      "En objektstruktur med information om reducerfunktionen.",
    ),
  ]),

  new Question(
    "Vad är syftet med `dispatch`-funktionen som returneras av `useReducer`?",
    [
      new IncorrectAnswer(
        "Den används för att deklarera nya reducerfunktioner.",
      ),
      new CorrectAnswer(
        "Den används för att skicka åtgärder till reducerfunktionen för att uppdatera tillståndet.",
      ),
      new IncorrectAnswer(
        "Den används för att utföra sidoeffekter i komponenten.",
      ),
    ],
  ),

  new Question(
    "Vilken typ av åtgärd förväntar sig reducerfunktionen som den första parameter?",
    [
      new CorrectAnswer(
        "En objekttyp med en egenskap 'type' som anger typen av åtgärd.",
      ),
      new IncorrectAnswer("En sträng som innehåller namnet på åtgärden."),
      new IncorrectAnswer(
        "En funktion som specificerar ändringarna i tillståndet.",
      ),
    ],
  ),

  new Question(
    "Kan du använda `useReducer` tillsammans med `useEffect` i samma funktionella komponent?",
    [
      new CorrectAnswer(
        "Ja, du kan använda både `useReducer` och `useEffect` i samma komponent.",
      ),
      new IncorrectAnswer(
        "Nej, de är inkompatibla och bör undvikas i samma komponent.",
      ),
      new IncorrectAnswer(
        "Ja, men det leder ofta till oväntat beteende och bör undvikas.",
      ),
    ],
  ),
];
