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
];
