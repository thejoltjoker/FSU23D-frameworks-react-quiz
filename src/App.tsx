import _ from "lodash";
import { useEffect, useState } from "react";
import IntroText from "./components/IntroText";
import { Answer } from "./models/Answer";
import { Question } from "./models/Question";
import { questions } from "./questions";

function App() {
  const [countdown, setCountdown] = useState<number>(-1);
  const [question, setQuestion] = useState<Question>();
  const [category, setCategory] = useState<string>("");

  const setRandomQuestion = (questionCategory: string = "") => {
    if (questionCategory === "") {
      questionCategory =
        _.keys(questions)[_.random(0, Object.keys(questions).length - 1)];
      setCategory(questionCategory);
    }

    const categoryQuestions = _.get(questions, questionCategory);
    const chosenQuestion =
      categoryQuestions[_.random(0, categoryQuestions.length - 1)];
    setQuestion({
      ...chosenQuestion,
      answers: _.shuffle(chosenQuestion.answers),
    });
  };

  const handleResponse = (
    event: React.MouseEvent<HTMLLIElement>,
    answer: Answer,
  ) => {
    event.currentTarget.classList.remove("bg-base-200");

    if (answer.isCorrect) {
      setCountdown(3);
      event.currentTarget.classList.add("bg-primary");
      console.log(question?.text, "✅", answer.text);
    } else {
      event.currentTarget.classList.add("bg-secondary");
      console.log(question?.text, "❌", answer.text);
    }
  };

  useEffect(() => {
    console.log("countdown");
    if (countdown === 0) {
      setRandomQuestion();
      return;
    }
    let interval: number;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <>
      <div className="flex h-full items-center justify-center px-4">
        <div className="w-full max-w-screen-md rounded-xl bg-base-100 p-4 shadow">
          {question && (
            <>
              <div className="flex justify-between opacity-50">
                <div className="uppercase tracking-wider">{category}</div>
                {countdown > 0 ? (
                  <p>
                    Nästa fråga om <b>{countdown}</b> sek
                  </p>
                ) : null}
              </div>
              <div className="py-4">{question?.text}</div>
              <ul className="flex flex-col gap-4 py-4">
                {question?.answers.map((answer) => (
                  <li
                    key={answer.text}
                    onClick={(e) => {
                      if (countdown <= 0) handleResponse(e, answer);
                    }}
                    className="cursor-pointer rounded-lg border border-neutral/10 bg-base-200 p-4"
                  >
                    {answer.text}
                  </li>
                ))}
              </ul>
            </>
          )}

          {!question && (
            <>
              <IntroText />
            </>
          )}
          <div className="flex h-16 items-center justify-center">
            {!question && (
              <button
                className="btn btn-primary"
                onClick={() => setRandomQuestion()}
              >
                Starta Quiz
              </button>
            )}
            {countdown > 0 ? (
              <button
                className="btn border border-neutral/10"
                onClick={() => {
                  setCountdown(0);
                  setRandomQuestion();
                }}
              >
                Nästa fråga
                <span className="flex size-6 items-center justify-center rounded-full bg-neutral/20">
                  {countdown}
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
