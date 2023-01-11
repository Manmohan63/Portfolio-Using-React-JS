import './Styles/App.scss';
import './Styles/index.scss';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Background from './Components/Background/Background.jsx';
import Work from './Components/Work/Work.jsx';
// import Contact from './Components/Contact/Contact.jsx';
import { useState } from 'react';

function App() {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <div className="App">
      <Navbar menuopen={menuopen} setmenuopen={setmenuopen} />
      <div className="sections">
        <Home />
        <Background />
        <Work />

      </div>
    </div>
  );
}

export default App;
