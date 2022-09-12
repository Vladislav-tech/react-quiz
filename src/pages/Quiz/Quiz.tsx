import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Game, Loader, Result } from '../../components';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';

interface QuizStep {
  title: string,
  variants: string[],
  correct: number,
}

interface QuizData {
  quiz: {
    title: string,
    quizzes: QuizStep[]
  }
  id: number
}



function Quiz() {
  const params = useParams();
  const id = Number(params.id)

  const [currentQuiz, setCurrentQuiz] = useState<QuizData>();
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = currentQuiz?.quiz?.quizzes[step];

  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const { data } = await axios.get(`https://631de940cc652771a48dbafd.mockapi.io/quizzes?id=${id}`);

      if (!data[0]) {
        setError('An error occurred while loading data. Check if the link is correct');
      }

      setCurrentQuiz(data[0]);
      setIsLoading(false);
    }

    fetchData();
  }, [id]);

  const onClickVariant = (index: number) => {
    setStep(step + 1);
  }

  const quizLength = currentQuiz?.quiz?.quizzes?.length ?? 0;


  const render = () => {
    if (error) {
      return <p className="mt-5 h2">{error}</p>;
    }

    if (!currentQuiz) {
      return <Loader/>
    }

    return (
      <>
        <h1 className="text-center mt-5">{currentQuiz?.quiz?.title ?? ''}</h1>
        <ContentWrapper classList="mt-5">
          {currentQuiz?.quiz?.quizzes?.length === step ? <Result id={id} correct={correct} quizLength={quizLength}/> : (
            <Game
              step={step}
              question={question}
              onClickVariant={onClickVariant}
              correct={correct}
              setCorrect={setCorrect}
              quizLength={currentQuiz?.quiz?.quizzes?.length ?? 0}
            />
          )}
        </ContentWrapper>
      </>
    )
  }
  return (
    <main className="container">
      {render()}
    </main>

  )
}

export default Quiz
