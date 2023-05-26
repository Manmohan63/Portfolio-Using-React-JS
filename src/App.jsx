import './Styles/App.scss';
import './Styles/index.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Background from './Components/Background/Background.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Contact from './Components/Contact/Contact.jsx';
import { useState } from 'react';

function App() {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <div className="App">
      <Navbar menuopen={menuopen} setmenuopen={setmenuopen} />
      <div className="sections">
        <Home />
        <Background />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
