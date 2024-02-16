import { CorrectAnswer, IncorrectAnswer } from "../models/Answer";
import { Question } from "../models/Question";

export const componentQuestions: Question[] = [
  new Question("Vad är en React-komponent i en webbapplikation?", [
    new CorrectAnswer(
      "En återanvändbar och självständig del av användargränssnittet.",
    ),
    new IncorrectAnswer("Enbart en HTML-tag i koden."),
    new IncorrectAnswer("En enhet i webbläsaren som hanterar navigering."),
  ]),

  new Question(
    "Vad är skillnaden mellan en funktionell komponent och en klasskomponent i React?",
    [
      new IncorrectAnswer(
        "Funktionella komponenter används bara för enkel rendering.",
      ),
      new CorrectAnswer(
        "Funktionella komponenter är enklare och använder funktionssyntax, medan klasskomponenter använder klass-syntax.",
      ),
      new IncorrectAnswer("Det finns ingen faktisk skillnad, de är utbytbara."),
    ],
  ),

  new Question("Hur skapar du en komponent i React med TypeScript?", [
    new IncorrectAnswer("Använda `createComponent`-funktionen."),
    new CorrectAnswer(
      "Definiera en funktion eller klass och använda TypeScript-typer.",
    ),
    new IncorrectAnswer("Använda HTML-taggar och CSS-stilar i en separat fil."),
  ]),

  new Question("Vad är props i en React-komponent?", [
    new CorrectAnswer(
      "Data som skickas från en förälderkomponent till en underliggande komponent.",
    ),
    new IncorrectAnswer(
      "Intern data som används för att spåra komponentens eget tillstånd.",
    ),
    new IncorrectAnswer(
      "En funktion som används för att uppdatera tillståndet i en komponent.",
    ),
  ]),

  new Question(
    "Hur överför du data från en förälderkomponent till en underliggande komponent i React?",
    [
      new CorrectAnswer("Genom att använda props."),
      new IncorrectAnswer(
        "Endast genom att använda tillståndet i förälderkomponenten.",
      ),
      new IncorrectAnswer("Använda en global variabel för att dela data."),
    ],
  ),

  new Question("Vad är tillstånd (state) i en React-komponent?", [
    new IncorrectAnswer(
      "Enbart interna variabler som används för att spåra komponentens eget tillstånd.",
    ),
    new CorrectAnswer(
      "Data som komponenten håller och kan ändras under dess livscykel.",
    ),
    new IncorrectAnswer("En statisk representation av komponentens struktur."),
  ]),

  new Question(
    "Vad är fördelen med att använda TypeScript i React-komponenter?",
    [
      new CorrectAnswer(
        "Statisk typning ger ökad kodintegritet och upptäcker fel vid kompilering.",
      ),
      new IncorrectAnswer(
        "Det är enbart för personlig preferens och har ingen faktisk nytta.",
      ),
      new IncorrectAnswer(
        "TypScript ger bättre prestanda jämfört med vanlig JavaScript.",
      ),
    ],
  ),

  new Question(
    "Hur använder du `useState`-hooken i en funktionell komponent?",
    [
      new CorrectAnswer(
        "Genom att deklarera en state-variabel och dess updateringsfunktion med `useState`-kallet.",
      ),
      new IncorrectAnswer(
        "Det är inte möjligt att använda `useState` i funktionella komponenter.",
      ),
      new IncorrectAnswer(
        "Genom att använda en `useState`-komponent istället för en funktionell komponent.",
      ),
    ],
  ),

  new Question(
    "Hur skapar du en grundläggande funktionell komponent i React med TypeScript?",
    [
      new CorrectAnswer(
        "const MyComponent: React.FC<PropsType> = ({ prop1, prop2 }) => { return <div>{prop1} - {prop2}</div> };",
      ),
      new IncorrectAnswer(
        "function MyComponent(props: PropsType): JSX.Element { return <div>{props.prop1} - {props.prop2}</div>; }",
      ),
      new IncorrectAnswer(
        "class MyComponent extends React.Component<PropsType> { render() { return <div>{this.props.prop1} - {this.props.prop2}</div>; }}",
      ),
    ],
  ),

  new Question(
    "Ge ett exempel på hur du skickar en funktion som en prop till en underliggande komponent med TypeScript.",
    [
      new CorrectAnswer(
        "<MyComponent callbackProp={() => console.log('Callback invoked')} />",
      ),
      new IncorrectAnswer(
        "<MyComponent callbackProp={console.log('Callback invoked')} />",
      ),
      new IncorrectAnswer(
        "<MyComponent callbackProp={function() { console.log('Callback invoked'); }} />",
      ),
    ],
  ),

  new Question(
    "Hur skapar du en prop i en funktionell komponent med TypeScript och definierar dess typ?",
    [
      new CorrectAnswer(
        "const MyComponent: = ({ myProp }) => { return <div>{myProp}</div>; };",
      ),
      new IncorrectAnswer(
        "const MyComponent = ({ myProp: string }) => { return <div>{myProp}</div>; };",
      ),
      new IncorrectAnswer(
        "const MyComponent = ({ myProp }) => { return <div>{myProp}</div>; };",
      ),
    ],
  ),
];
