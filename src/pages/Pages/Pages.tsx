import { Route, Routes } from 'react-router-dom';
import { Home, NotFoundPage, Quiz, Quizzes, Result, About, Contacts } from '../index';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/quizzes/:id" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>  
  )
}

export default Pages