// interface GameProps {
//   question: string | undefined,
//   onClickVariant: () => void,
//   step: number,
//   correct: number,
//   setCorrect: () => void,
// }

import { Button } from "../ui";

function Game({ question, onClickVariant, step, correct, setCorrect, quizLength }: any) {
  const percentage = Math.round(step / quizLength * 100) + '%';

  const onBtnClick = (index: number) => {
    if (index === question.correct) setCorrect(correct + 1);
    onClickVariant(index);
  }

  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <p className="h3">Question {step + 1}/{quizLength}</p>
        <div className="progress mt-3">
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: percentage }}></div>
        </div>
        <h4 className="mt-3">{question.title}</h4>
      </div>

      <div className="col-12 col-md-6 mt-3 mt-md-0">
        <div className="w-md-75 ms-auto d-flex flex-column">
          {question.variants.map((variant: string, index: number) => {
            return <Button onClick={() => onBtnClick(index)} classList="mb-3 lg" key={variant}>{variant}</Button>
          })}
        </div>

      </div>
    </div>

  )
}

export default Game;