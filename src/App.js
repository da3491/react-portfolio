import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

// Components
import { ThemeProvider } from "./components/ThemeContext";
import ImageLoader from "./components/ImageLoader";
import Navigation from "./components/Navigation";
import ThemeSelector from "./components/ThemeSelector";
import ContactLinks from "./components/ContactLinks";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredContent = styled.div`
  position: relative;
  width: 90%;
  height: 85%;
  max-width: 1600px;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1000px) {
    width: 80%;
  }
`;

function App() {
  return (
    <ThemeProvider>
      <Container>
        <ImageLoader />
        <CenteredContent>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
          </Routes>
          <ContactLinks />
          <ThemeSelector />
        </CenteredContent>
      </Container>
    </ThemeProvider>
  );
}

export default App;
