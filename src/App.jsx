import './Styles/App.scss';
import './Styles/index.scss';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Background from './Components/Background/Background.jsx';
import Projects from './Components/Projects/Projects.jsx';
// import Contact from './Components/Contact/Contact.jsx';
// <Contact />
import { useState } from 'react';

function App() {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <div className="App">
      <Navbar menuopen={menuopen} setmenuopen={setmenuopen} />
      <div className="sections">
        <Home />
        <Background />
        <Projects />
      </div>
    </div>
  );
}

export default App;



// const App = () => {
//   return (
//     <div className="App">
//       <Subcomponent>
//       </Subcomponent>
//     </div>
//   )
// }

// export default App
