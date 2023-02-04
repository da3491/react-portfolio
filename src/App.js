import "./App.css";
import styled from "styled-components";

// Components
import { ThemeProvider } from "./components/ThemeContext";
import ImageLoader from "./components/ImageLoader";
import ThemeSelector from "./components/ThemeSelector";
import ContactLinks from "./components/ContactLinks";
import Home from "./components/Home";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredContent = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  max-width: 1400px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider>
      <Container>
        <ImageLoader />
        <CenteredContent className="glass">
          <ContactLinks />
          <Home />
          <ThemeSelector />
        </CenteredContent>
      </Container>
    </ThemeProvider>
  );
}

export default App;
