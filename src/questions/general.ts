import { CorrectAnswer, IncorrectAnswer } from "../models/Answer";
import { Question } from "../models/Question";

export const generalQuestions: Question[] = [
  new Question("Vad är React och varför används det i webbutveckling?", [
    new IncorrectAnswer("Det är en back-end ramverk."),
    new CorrectAnswer(
      "Det är ett JavaScript-bibliotek för att bygga användargränssnitt.",
    ),
    new IncorrectAnswer("Det är en databashanterare."),
  ]),

  new Question(
    "Vad är skillnaden mellan en klasskomponent och en funktionell komponent i React?",
    [
      new IncorrectAnswer("Det finns ingen skillnad."),
      new CorrectAnswer(
        "En klasskomponent använder en klassdeklaration, medan en funktionell komponent är en ren JavaScript-funktion.",
      ),
      new IncorrectAnswer(
        "Funktionella komponenter används bara för att hantera sidoeffekter.",
      ),
    ],
  ),

  new Question("Vad är JSX i React?", [
    new IncorrectAnswer("Ett JavaScript-baserat översättningslager."),
    new CorrectAnswer(
      "Ett syntaxtillägg till JavaScript som låter dig skriva HTML-liknande koder i JavaScript-filer.",
    ),
    new IncorrectAnswer("Ett pakethanteringsverktyg för React-projekt."),
  ]),

  new Question("Vad är en React-komponent?", [
    new CorrectAnswer(
      "En självständig och återanvändbar del av användargränssnittet.",
    ),
    new IncorrectAnswer("En del av React-router."),
    new IncorrectAnswer("En del av Redux-statshanteraren."),
  ]),

  new Question("Vad är en prop i React?", [
    new CorrectAnswer(
      "Ett sätt att skicka data från en förälderkomponent till en underordnad komponent.",
    ),
    new IncorrectAnswer("En förkortning för 'property' i JavaScript-objekt."),
    new IncorrectAnswer("En global variabel i React-komponenter."),
  ]),

  new Question("Vad är skillnaden mellan state och props i React?", [
    new CorrectAnswer(
      "Props används för att skicka data från en överordnad komponent till en underordnad komponent, medan state används för att hantera interna tillstånd i en komponent.",
    ),
    new IncorrectAnswer(
      "State används alltid för att skicka data mellan komponenter.",
    ),
    new IncorrectAnswer(
      "Props och state är synonymer och kan användas omväxlande.",
    ),
  ]),

  new Question(
    "Ge ett exempel på hur du använder en `map`-funktion för att rendera flera komponenter baserat på en array i React med TypeScript.",
    [
      new CorrectAnswer(
        "<ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>",
      ),
      new IncorrectAnswer(
        "<ul>{items.forEach((item, index) => <li key={index}>{item}</li>)}</ul>",
      ),
      new IncorrectAnswer("<ul>{items.map(item => <li>{item}</li>)}</ul>"),
    ],
  ),

  new Question(
    "Hur hanterar du formulärhändelser, som inmatningsändringar, i en funktionell komponent med TypeScript?",
    [
      new CorrectAnswer(
        "const MyForm = () => { const [inputValue, setInputValue] = useState<string>(''); const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { setInputValue(event.target.value); }; return <input type='text' value={inputValue} onChange={handleInputChange} />; };",
      ),
      new IncorrectAnswer(
        "const MyForm = () => { const [inputValue, setInputValue] = useState<string>(''); const handleInputChange = (value: string) => { setInputValue(value); }; return <input type='text' value={inputValue} onChange={handleInputChange} />; };",
      ),
      new IncorrectAnswer(
        "const MyForm = () => { const [inputValue, setInputValue] = useState<string>(''); return <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />; };",
      ),
    ],
  ),

  new Question(
    "Hur använder du en `NavLink` för att skapa en navigeringslänk i React med TypeScript?",
    [
      new CorrectAnswer(
        "<NavLink to='/dashboard' activeClassName='active'>Dashboard</NavLink>",
      ),
      new IncorrectAnswer("<Link to='/dashboard'>Dashboard</Link>"),
      new IncorrectAnswer("<a href='/dashboard'>Dashboard</a>"),
    ],
  ),

  new Question(
    "Visa hur du använder `useHistory`-hook för att navigera programmatoriskt i React med TypeScript.",
    [
      new CorrectAnswer(
        "const history = useHistory(); const handleClick = () => { history.push('/dashboard'); };",
      ),
      new IncorrectAnswer(
        "const history = useNavigate(); const handleClick = () => { history('/dashboard'); };",
      ),
      new IncorrectAnswer(
        "const history = useHistory(); const handleClick = () => { navigate('/dashboard'); };",
      ),
    ],
  ),

  new Question(
    "Hur inkluderar du ett externt stylesheet i en React-komponent?",
    [
      new CorrectAnswer("import './styles.css';"),
      new IncorrectAnswer("const styles = require('./styles.css');"),
      new IncorrectAnswer(
        "<link rel='stylesheet' type='text/css' href='./styles.css' />",
      ),
    ],
  ),
];
