export class Answer {
  constructor(
    public text: string,
    public isCorrect: boolean,
  ) {}
}

export class IncorrectAnswer extends Answer {
  constructor(public text: string) {
    super(text, false);
  }
}

export class CorrectAnswer extends Answer {
  constructor(public text: string) {
    super(text, true);
  }
}
