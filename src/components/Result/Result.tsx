import { PieChart } from 'react-minimal-pie-chart';
import { Button } from '../ui';
import './Result.scss';

interface ResultProps {
  correct: number,
  quizLength: number,
  id: number,
  time: number,
  pass: number
}

function Result({ correct, quizLength, id, time, pass }: ResultProps) {

  const percentage: number = Math.round(correct / quizLength * 100);

  const isPassed: boolean = correct >= pass;

  const infoMessage = () => {
    console.log(percentage)
    if (!isPassed) {
      return (
        <>
          <p>You need at least {pass} right answers!</p>
          <p>How about take a rest, recap some themes and repeat the quiz? 🙂</p>
        </>
      );
    }

    if (percentage >= 80 && percentage < 100) {
      return (
      <>
        <p>Wow! You did the good job!</p>
        <p>Was it easy?</p>
      </>)
    }

    if (percentage === 100) {
      return (
        <>
          <p>Wow! That's awesome!</p>
          <p>Your resultat is perfect! 👍</p>
        </>
      )
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <h2>Results {correct}/{quizLength}</h2>
        <div className="mt-3 h6">
          {infoMessage()}
        </div>
      </div>
      <div className="col-12 col-md-6">
        {isPassed ? <h2>Congrulations!</h2> : <h2>You failed</h2>}


        <div className="chart">
          <PieChart
            data={[{ value: percentage, color: '#F5F5F5' }]}
            totalValue={100}
            lineWidth={20}
            label={({ dataEntry }) => dataEntry.value}
            labelStyle={{
              fontSize: '25px',
              fontFamily: 'sans-serif',
              fill: '#F5F5F5',
            }}
            labelPosition={0}
            animate
          />
        </div>

        <Button classList="mt-4 lg">
          <a href={`/quizzes/${id}`}>Repeat</a>
        </Button>

      </div>
    </div>
  )
}

export default Result;