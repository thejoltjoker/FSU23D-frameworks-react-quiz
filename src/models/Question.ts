import { Answer } from "./Answer";

export class Question {
  constructor(
    public text: string,
    public answers: Answer[],
  ) {}
}
