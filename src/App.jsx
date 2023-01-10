import './Styles/App.scss';
import './Styles/index.scss';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Background from './Components/Background/Background.jsx';
import { useState } from 'react';

function App() {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <div className="App">
      <Navbar menuopen={menuopen} setmenuopen={setmenuopen} />
      <div className="sections">
        <Home />
        <Background />
      </div>
    </div>
  );
}

export default App;
