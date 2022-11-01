import './app.css';

import { Nav } from "./components/nav/Nav";
import { Footer } from "./components/footer/Footer";
import {About} from "./components/about/About"
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <div className="principal-container">
          <About/>
          <Skills/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
