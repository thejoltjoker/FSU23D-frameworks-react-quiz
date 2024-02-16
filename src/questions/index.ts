import { componentQuestions } from "./component";
import { useContextQuestions } from "./context";
import { useEffectQuestions } from "./effect";
import { generalQuestions } from "./general";
import { useReducerQuestions } from "./reducer";
import { useStateQuestions } from "./state";

export const questions = {
  context: useContextQuestions,
  effect: useEffectQuestions,
  general: generalQuestions,
  reducer: useReducerQuestions,
  state: useStateQuestions,
  component: componentQuestions,
  // Lägg gärna till fler kategorier om det behövs.
  // Skapa en matchande .ts fil i src/questions.
  // Exempel: src/questions/state.ts för frågor relaterade till state.
};
