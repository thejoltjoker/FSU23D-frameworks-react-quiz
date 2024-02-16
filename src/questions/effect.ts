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
    "Vad är syftet med den andra parameter som skickas till `useEffect`?",
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

  new Question("Vad händer om den andra parametern i `useEffect` är tom?", [
    new CorrectAnswer(
      "`useEffect` kommer att köras endast en gång efter första renderingen.",
    ),
    new IncorrectAnswer(
      "`useEffect` kommer att köras vid varje renderingscykel.",
    ),
    new IncorrectAnswer("Det kommer att generera ett kompileringsfel."),
  ]),

  new Question(
    "Kan du använda flera `useEffect`-anrop i samma funktionella komponent?",
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
  new Question("När körs `useEffect` i en funktionell komponent?", [
    new IncorrectAnswer("Endast när komponenten monteras."),
    new CorrectAnswer("Efter varje rendercykel."),
    new IncorrectAnswer("Endast när komponenten avmonteras."),
  ]),

  new Question("Vad är syftet med returfunktionen i `useEffect`?", [
    new IncorrectAnswer("Definiera propertier för komponenten."),
    new CorrectAnswer(
      "Utföra städning eller avbryta pågående processer när komponenten avmonteras.",
    ),
    new IncorrectAnswer("Starta en ny rendercykel."),
  ]),

  new Question(
    "Hur inkluderar du en beroende-array i `useEffect` för att kontrollera när effekten ska köras?",
    [
      new CorrectAnswer(
        "Genom att ange beroenden som en array som det andra argumentet till `useEffect`.",
      ),
      new IncorrectAnswer("Genom att använda `if`-sats inuti `useEffect`."),
      new IncorrectAnswer("Beroenden är inte nödvändiga i `useEffect`."),
    ],
  ),

  new Question(
    "Hur hanterar du en asynkron funktion inom `useEffect` i React med TypeScript?",
    [
      new IncorrectAnswer(
        "Använda `async/await` är inte möjligt i `useEffect`.",
      ),
      new CorrectAnswer(
        "Använda en inre funktion som är deklarerad som `async` och anropa den inuti `useEffect`.",
      ),
      new IncorrectAnswer("Använda `Promise.then()` direkt i `useEffect`."),
    ],
  ),
  new Question(
    "Vilket problem kan uppstå om du glömmer att inkludera beroenden i `useEffect`?",
    [
      new IncorrectAnswer(
        "Inget problem, det påverkar inte komponentens beteende.",
      ),
      new CorrectAnswer(
        "Risk för minnesläckor och oönskad upprepning av effekter.",
      ),
      new IncorrectAnswer("Det kommer att orsaka ett kraschfel vid körning."),
    ],
  ),

  new Question(
    "Hur kan du hantera ett rentningsbehov (cleanup) när komponenten avmonteras med `useEffect`?",
    [
      new CorrectAnswer("Använda en return-funktion inuti `useEffect`."),
      new IncorrectAnswer("Använda `cleanup`-metoden från React."),
      new IncorrectAnswer("Det kräver ingen särskild hantering för städning."),
    ],
  ),

  new Question(
    "Kan du använda flera `useEffect`-block i samma funktionella komponent?",
    [
      new CorrectAnswer(
        "Ja, du kan ha flera `useEffect`-block för olika syften.",
      ),
      new IncorrectAnswer("Nej, det leder till konflikter och fel."),
      new IncorrectAnswer(
        "Ja, men det kräver extra hantering för att undvika konflikter.",
      ),
    ],
  ),

  new Question(
    "Hur fångar du och hanterar du fel inom `useEffect` i React med TypeScript?",
    [
      new CorrectAnswer("Använda en try-catch-block inuti `useEffect`."),
      new IncorrectAnswer("Låt felen kasta och hanteras av React automatiskt."),
      new IncorrectAnswer(
        "Det är inte möjligt att fånga fel inom `useEffect`.",
      ),
    ],
  ),

  new Question(
    "Vad är fördelen med att använda TypeScript tillsammans med `useEffect`?",
    [
      new IncorrectAnswer("Det gör koden längre och svårare att läsa."),
      new CorrectAnswer(
        "Det ger statisk typning och förhindrar många typer av fel.",
      ),
      new IncorrectAnswer("Det introducerar kompatibilitetsproblem med React."),
    ],
  ),

  new Question(
    "Visa hur du använder en `useEffect`-hook för att hantera sidoeffekter i en funktionell komponent med TypeScript.",
    [
      new CorrectAnswer(
        "useEffect(() => { console.log('Component mounted'); return () => { console.log('Component will unmount'); } }, []);",
      ),
      new IncorrectAnswer(
        "useEffect(() => { console.log('Component updated'); }, [props.value]);",
      ),
      new IncorrectAnswer(
        "useEffect(() => { console.log('Component mounted'); }, []);",
      ),
    ],
  ),
];
