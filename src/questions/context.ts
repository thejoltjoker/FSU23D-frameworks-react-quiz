import { CorrectAnswer, IncorrectAnswer } from "../models/Answer";
import { Question } from "../models/Question";

export const useContextQuestions: Question[] = [
  new Question("Vad är huvudsyftet med `useContext` i React med TypeScript?", [
    new IncorrectAnswer("Hantera tillstånd i funktionella komponenter."),
    new CorrectAnswer(
      "Få tillgång till och använda värden från React Context i funktionella komponenter.",
    ),
    new IncorrectAnswer("Hantera globala tillstånd för hela applikationen."),
  ]),

  new Question(
    "Vilken funktion används för att använda en React Context i en funktionell komponent med TypeScript?",
    [
      new IncorrectAnswer("useState"),
      new CorrectAnswer("useContext"),
      new IncorrectAnswer("useEffect"),
    ],
  ),

  new Question("Hur skapar du en instans av en React Context?", [
    new IncorrectAnswer("const context = createContext();"),
    new CorrectAnswer("const context = createContext<ContextType>();"),
    new IncorrectAnswer("const context = createContext(null);"),
  ]),

  new Question(
    "Hur konsumerar du värden från en React Context med `useContext`?",
    [
      new CorrectAnswer("const contextValue = useContext(MyContext);"),
      new IncorrectAnswer("const contextValue = useMyContext();"),
      new IncorrectAnswer("const contextValue = MyContext();"),
    ],
  ),

  new Question(
    "Kan du använda flera olika React Contexts i samma funktionella komponent med TypeScript?",
    [
      new CorrectAnswer(
        "Ja, du kan använda flera `useContext`-anrop för olika React Contexts.",
      ),
      new IncorrectAnswer(
        "Nej, du kan bara använda en React Context per komponent.",
      ),
      new IncorrectAnswer("Ja, men det kräver extra konfiguration."),
    ],
  ),

  new Question(
    "Vad händer om du försöker använda `useContext` utanför en React Context-provider?",
    [
      new IncorrectAnswer(
        "Det kommer inte att påverka applikationens beteende.",
      ),
      new CorrectAnswer(
        "Det kommer att returnera värdet som är angivet som standardvärde i createContext.",
      ),
      new IncorrectAnswer("Det genererar ett kompileringsfel."),
    ],
  ),

  new Question(
    "Vad är fördelen med att använda `useContext` jämfört med att skicka props genom komponentträdet?",
    [
      new IncorrectAnswer(
        "Ingen skillnad, det är bara en annan metod för att skicka värden genom komponenterna.",
      ),
      new CorrectAnswer(
        "`useContext` eliminerar behovet av att skicka props genom varje mellanliggande komponent.",
      ),
      new IncorrectAnswer(
        "`useContext` är endast användbart när du hanterar globalt tillstånd.",
      ),
    ],
  ),

  new Question(
    "Kan du använda `useContext` utanför en funktionell komponent?",
    [
      new IncorrectAnswer(
        "Ja, det fungerar på samma sätt i både funktionella och klasskomponenter.",
      ),
      new CorrectAnswer(
        "Nej, `useContext` är avsett att användas inuti funktionella komponenter.",
      ),
      new IncorrectAnswer(
        "Bara om du använder React Hooks i hela applikationen.",
      ),
    ],
  ),

  new Question(
    "Hur skickar du värden till en `useContext`-provider i React med TypeScript?",
    [
      new IncorrectAnswer("Genom att använda `setContextValue`-funktionen."),
      new CorrectAnswer(
        "Genom att tillhandahålla värden som värdeattributet på provider-komponenten.",
      ),
      new IncorrectAnswer(
        "Det är inte möjligt att skicka värden till en `useContext`-provider.",
      ),
    ],
  ),

  new Question(
    "Kan du använda flera `useContext`-hook-anrop i samma funktionella komponent?",
    [
      new CorrectAnswer(
        "Ja, du kan använda flera `useContext`-anrop för olika React Contexts.",
      ),
      new IncorrectAnswer("Nej, det leder till konflikter och fel."),
      new IncorrectAnswer(
        "Ja, men det kräver extra hantering för att undvika konflikter.",
      ),
    ],
  ),

  new Question(
    "Kan du använda `useContext` för att dela tillstånd mellan olika komponentträd?",
    [
      new IncorrectAnswer("Ja, det är standardbeteendet för `useContext`."),
      new CorrectAnswer(
        "Nej, `useContext` delar tillstånd endast inom det aktuella komponentträdet.",
      ),
      new IncorrectAnswer(
        "Bara om du använder Redux tillsammans med `useContext`.",
      ),
    ],
  ),

  new Question(
    "Vad händer om du använder en icke-existerande `Context` i `useContext`-kallet?",
    [
      new IncorrectAnswer("Det genererar ett kraschfel vid körning."),
      new CorrectAnswer(
        "Det returnerar standardvärdet som angivits i createContext.",
      ),
      new IncorrectAnswer("Det kommer inte att påverka komponentens beteende."),
    ],
  ),

  new Question(
    "Hur får du tillgång till det aktuella värdet i en React Context med `useContext`?",
    [
      new CorrectAnswer(
        "Genom att använda det returnerade värdet från `useContext`-kallet.",
      ),
      new IncorrectAnswer(
        "Anropa en `getValue`-funktion på det returnerade värdet.",
      ),
      new IncorrectAnswer(
        "Det aktuella värdet finns direkt i `useContext`-hookens argument.",
      ),
    ],
  ),

  new Question(
    "Vad är det rekommenderade sättet att strukturera dina React Contexts för användning med `useContext`?",
    [
      new CorrectAnswer(
        "Organisera dem hierarkiskt för att återspegla komponentstrukturen.",
      ),
      new IncorrectAnswer(
        "Placera alla Contexts i en global fil för enkel åtkomst.",
      ),
      new IncorrectAnswer("Skapa en enda stor Context för hela applikationen."),
    ],
  ),

  new Question(
    "Hur skapar du en kontext och en provider i React med TypeScript?",
    [
      new CorrectAnswer(
        "const MyContext = createContext<ContextType>(); const MyProvider: React.FC = ({ children }) => { const value: ContextType = /* some value */; return <MyContext.Provider value={value}>{children}</MyContext.Provider>; };",
      ),
      new IncorrectAnswer(
        "const MyContext = createReactContext<ContextType>(); const MyProvider: React.Component = ({ children }) => { const value: ContextType = /* some value */; return <MyContext.Provider value={value}>{children}</MyContext.Provider>; };",
      ),
      new IncorrectAnswer(
        "const MyContext = createContext(); const MyProvider: React.FC = ({ children }) => { const value = /* some value */; return <MyContext.Provider value={value}>{children}</MyContext.Provider>; };",
      ),
    ],
  ),
];
