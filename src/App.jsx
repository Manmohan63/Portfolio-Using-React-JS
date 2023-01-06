import './index.css';
import './App.css';
import Navbar from './Components/navbar/Navbar.jsx';
import Intro from './Components/intro/Intro.jsx';
import Portfolio from './Components/portfolio/Portfolio.jsx';
import Works from './Components/works/Works.jsx';
import Contact from './Components/contact/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
