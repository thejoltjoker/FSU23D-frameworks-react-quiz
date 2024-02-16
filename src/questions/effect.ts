import { CorrectAnswer, IncorrectAnswer } from "../models/Answer";
import { Question } from "../models/Question";

export const useEffectQuestions: Question[] = [
  new Question("Vad är huvudsyftet med `useEffect` i React med TypeScript?", [
    new IncorrectAnswer("Hantera tillstånd i funktionella komponenter."),
    new CorrectAnswer("Utföra sidoeffekter i funktionella komponenter."),
    new IncorrectAnswer("Skapa globala tillstånd för hela applikationen."),
  ]),

  new Question(
    "När körs `useEffect`-funktionen för första gången i en komponent?",
    [
      new IncorrectAnswer(
        "Den körs alltid omedelbart när komponenten renderas.",
      ),
      new CorrectAnswer(
        "Den körs efter att den första renderingen har slutförts.",
      ),
      new IncorrectAnswer(
        "Den körs bara om den är expliicit anropad i komponenten.",
      ),
    ],
  ),

  new Question(
    "Vilken funktion har `useEffect`-hooken för att utföra rensning av sidoeffekter?",
    [
      new IncorrectAnswer("cleanupEffect"),
      new CorrectAnswer("return-funktionen från useEffect"),
      new IncorrectAnswer("clearEffect"),
    ],
  ),

  new Question(
    "Vad är syftet med den andra parameter som skickas till `useEffect` i TypeScript?",
    [
      new CorrectAnswer(
        "Den innehåller en array av värden som useEffect ska bevaka för förändringar.",
      ),
      new IncorrectAnswer("Den anger antalet gånger useEffect ska köras."),
      new IncorrectAnswer(
        "Den används för att specificera vilken typ av sidoeffekt som ska utföras.",
      ),
    ],
  ),

  new Question(
    "Vad händer om den andra parametern i `useEffect` är tom i TypeScript?",
    [
      new CorrectAnswer(
        "`useEffect` kommer att köras endast en gång efter första renderingen.",
      ),
      new IncorrectAnswer(
        "`useEffect` kommer att köras vid varje renderingscykel.",
      ),
      new IncorrectAnswer("Det kommer att generera ett kompileringsfel."),
    ],
  ),

  new Question(
    "Kan du använda flera `useEffect`-anrop i samma funktionella komponent i TypeScript?",
    [
      new CorrectAnswer(
        "Ja, du kan använda flera `useEffect`-anrop för att hantera olika sidoeffekter.",
      ),
      new IncorrectAnswer(
        "Nej, du kan bara ha ett `useEffect`-anrop per komponent.",
      ),
      new IncorrectAnswer("Ja, men det rekommenderas inte."),
    ],
  ),
];
