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

  new Question("Vad är huvudsyftet med `useReducer` i React med TypeScript?", [
    new IncorrectAnswer("Hantera tillstånd i funktionella komponenter."),
    new CorrectAnswer(
      "Hantera komplexa tillstånd och logik i funktionella komponenter.",
    ),
    new IncorrectAnswer("Ersätta `useState` för alla scenarier."),
  ]),

  new Question(
    "Hur skapar du en reducer-funktion för att använda med `useReducer`?",
    [
      new IncorrectAnswer(
        "Det krävs ingen reducer-funktion, bara en initialiseringsfunktion.",
      ),
      new CorrectAnswer(
        "Skapa en funktion som tar två argument: aktuellt tillstånd och en åtgärd.",
      ),
      new IncorrectAnswer(
        "Använda inbyggda reducer-funktioner som `createReducer`.",
      ),
    ],
  ),

  new Question(
    "Vilken information innehåller `dispatch`-funktionen som skapas med `useReducer`?",
    [
      new IncorrectAnswer("Endast det aktuella tillståndet."),
      new CorrectAnswer("En åtgärd som används för att uppdatera tillståndet."),
      new IncorrectAnswer(
        "Alla tidigare åtgärder som har skickats till reducer-funktionen.",
      ),
    ],
  ),

  new Question(
    "Vad är fördelen med att använda `useReducer` över `useState` i vissa situationer?",
    [
      new CorrectAnswer(
        "`useReducer` är fördelaktigt när du har komplex logik som kräver flera steg för att uppdatera tillståndet.",
      ),
      new IncorrectAnswer("Det är ingen fördel, de är utbytbara."),
      new IncorrectAnswer(
        "`useReducer` är alltid mindre prestandaoptimerat än `useState`.",
      ),
    ],
  ),

  new Question(
    "Hur skickar du åtgärder till reducer-funktionen när du använder `useReducer`?",
    [
      new CorrectAnswer(
        "Genom att anropa `dispatch` med en åtgärd som argument.",
      ),
      new IncorrectAnswer(
        "Använda en funktion som heter `sendAction` istället för `dispatch`.",
      ),
      new IncorrectAnswer(
        "Åtgärder skickas automatiskt till reducer-funktionen när de uppstår.",
      ),
    ],
  ),

  new Question(
    "Kan du använda flera `useReducer`-anrop i samma funktionella komponent?",
    [
      new CorrectAnswer(
        "Ja, du kan använda flera `useReducer`-anrop för olika tillstånd.",
      ),
      new IncorrectAnswer("Nej, det leder till konflikter och fel."),
      new IncorrectAnswer(
        "Ja, men det kräver extra hantering för att undvika konflikter.",
      ),
    ],
  ),

  new Question(
    "Vilka är de två huvudparametrarna som skickas till reducer-funktionen i `useReducer`?",
    [
      new IncorrectAnswer("Enbart nästa tillstånd."),
      new CorrectAnswer("Aktuellt tillstånd och åtgärd."),
      new IncorrectAnswer("Endast åtgärden som orsakade tillståndsändringen."),
    ],
  ),

  new Question(
    "Kan du använda `useReducer` utan att deklarera en reducer-funktion direkt i `useReducer`-anropet?",
    [
      new IncorrectAnswer(
        "Nej, reducer-funktionen måste alltid deklareras vid användning av `useReducer`.",
      ),
      new CorrectAnswer(
        "Ja, genom att definiera reducer-funktionen separat och sedan använda den i `useReducer`.",
      ),
      new IncorrectAnswer(
        "Bara om du också använder `useState` i samma komponent.",
      ),
    ],
  ),

  new Question(
    "Hur returnerar reducer-funktionen det nya tillståndet efter att ha behandlat en åtgärd?",
    [
      new CorrectAnswer(
        "Genom att returnera det nya tillståndet från reducer-funktionen.",
      ),
      new IncorrectAnswer("Genom att ändra det aktuella tillståndet direkt."),
      new IncorrectAnswer(
        "Åtgärder i `useReducer` hanterar inte tillståndsändringar.",
      ),
    ],
  ),

  new Question(
    "Kan du använda `useReducer` tillsammans med `useContext` för att hantera globalt tillstånd?",
    [
      new CorrectAnswer(
        "Ja, kombinera `useReducer` för lokal tillståndshantering och `useContext` för global tillgång.",
      ),
      new IncorrectAnswer(
        "Nej, `useReducer` är endast för lokal tillståndshantering.",
      ),
      new IncorrectAnswer(
        "Bara om du använder Redux för global tillståndshantering.",
      ),
    ],
  ),
];
