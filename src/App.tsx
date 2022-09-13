import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";

import { Pages } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container pt-5">
        <Pages/>    
      </div>

    </BrowserRouter>
  );
}

export default App;