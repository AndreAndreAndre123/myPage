import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Works from "./components/Works"
import Contact from "./components/Contact"

import "./styles/global.css"

function App() {
  return (
    <div className="App">

      <div className="sections">
      <Navbar/>
      <Intro/>
      <Works/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
