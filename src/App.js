import "./App.css";

// Components
import { ThemeProvider } from "./components/ThemeContext";
import Hero from "./components/Hero.js";
// import NavMenu from "./components/NavMenu";
import ContentDisplay from "./components/ContentDisplay";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  return (
    <div id="app">
      <ThemeProvider>
        <Hero>
          {/* <ContentDisplay /> */}
          <ThemeSelector />
        </Hero>
      </ThemeProvider>
    </div>
  );
}

export default App;
