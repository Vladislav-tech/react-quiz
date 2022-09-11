import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";

import { Home, Quiz, Result, NotFoundPage } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>      
      </div>

    </BrowserRouter>
  );
}

export default App;