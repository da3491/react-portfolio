import "./App.css";

// Components
import NavMenu from "./components/NavMenu.js";
import Hero from "./components/Hero.js";
import Work from "./components/Work.js";
import Skills from "./components/Skills.js";
import Background from "./components/Background.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Hero />
      <Work />
      <Skills />
      <Background />
      <Contact />
    </div>
  );
}

export default App;
