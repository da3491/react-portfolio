import "./App.css";

// Components
import { ThemeProvider } from "./components/ThemeContext";
import ThemeSelector from "./components/ThemeSelector";
// import NavMenu from "./components/NavMenu.js";
import Hero from "./components/Hero.js";
import Work from "./components/Work.js";
import Skills from "./components/Skills.js";
import Background from "./components/Background.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeSelector />
        {/* <NavMenu /> */}
        <Hero />
        <Work />
        <Skills />
        <Background />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
