import { useEffect, useState } from "react";
import { Question } from "./models/Question";
import _ from "lodash";
import { questions } from "./questions";
import { Answer } from "./models/Answer";

function App() {
  const [countdown, setCountdown] = useState<number>(0);
  const [question, setQuestion] = useState<Question>();
  const [category, setCategory] = useState<string>("");

  const setRandomQuestion = (questionCategory: string = "") => {
    if (questionCategory === "") {
      questionCategory =
        _.keys(questions)[_.random(0, Object.keys(questions).length - 1)];
      setCategory(questionCategory);
    }

    const categoryQuestions = _.get(questions, questionCategory);

    setQuestion(categoryQuestions[_.random(0, categoryQuestions.length - 1)]);
  };

  const handleResponse = (
    event: React.MouseEvent<HTMLLIElement>,
    answer: Answer,
  ) => {
    event.currentTarget.classList.remove("bg-base-200");

    if (answer.isCorrect) {
      setCountdown(5);
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
      <div className="mx-auto max-w-screen-md rounded-xl bg-base-100 p-4">
        <div className="flex justify-between">
          <div className="uppercase tracking-wider opacity-50">{category}</div>
          {countdown >= 0 ? (
            <p>
              Nästa fråga om <b>{countdown}</b> sek
            </p>
          ) : null}
        </div>
        <div className="py-4">{question?.text}</div>
        <ul className="flex flex-col gap-4">
          {question?.answers.map((answer) => (
            <li
              key={`${_.kebabCase(answer.text)}-${_.random(0, 2048)}`}
              onClick={(e) => {
                if (countdown <= 0) handleResponse(e, answer);
              }}
              className="cursor-pointer rounded-lg bg-base-200 p-4"
            >
              {answer.text}
              {answer.isCorrect ? "✅" : "❌"}
            </li>
          ))}
        </ul>
        {!question && (
          <button
            className="btn btn-primary"
            onClick={() => setRandomQuestion()}
          >
            Starta Quiz
          </button>
        )}
      </div>
    </>
  );
}

export default App;
