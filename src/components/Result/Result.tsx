import { Link } from 'react-router-dom';
import { Button } from '../ui'; 

interface ResultProps {
  correct: number,
  quizLength: number,
  id: number
}

function Result({ correct, quizLength, id }: ResultProps) {
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <h2>Results {correct}/{quizLength}</h2>
      </div>
      <div className="col-12 col-md-6">
        <h2>Congrulations!</h2>
        <Button>
          <a href={`/quizzes/${id}`}>Repeat</a>
        </Button>
      </div>
    </div>
  )
}

export default Result;