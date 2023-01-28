import "./App.css";
import styled from "styled-components";

// Components
import { ThemeProvider } from "./components/ThemeContext";
import ImageLoader from "./components/ImageLoader";
import Navigation from "./components/Navigation";
import ThemeSelector from "./components/ThemeSelector";
import ContentDisplay from "./components/ContentDisplay";
import ContactLinks from "./components/ContactLinks";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;

  display: flex;
  place-content: center;
  align-items: center;
`;

const Grid = styled.div`
  position: relative;
  width: 95%;
  height: 95%;
  max-width: 1600px;

  display: grid;
  grid-template-columns: repeat(8, 1fr);

  border-left: 1px solid white;

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

const Nav = styled.div`
  grid-column: 8/9;
  grid-row: 1/2;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.div`
  position: relative;
  grid-column: 1/8;
  grid-row: 1/2;
  height: auto;

  // display: flex;
  // justify-content: flex-start;
  // align-items: center;

  // display: grid;
  // place-content: center;
`;

const Header = styled.h1`
  position: relative;
  font-size: 3.4rem;
  font-weight: 600;
  text-align: left;
  padding: 3em 0 0 2em;
  // z-index: 100;
  color: white;

  @media (max-width: 600px) {
    font-size: 2rem;
    padding: 0 0 0 1em;
  } ;
`;

function App() {
  return (
    <ThemeProvider>
      <Container>
        <ImageLoader />
        <Grid>
          <Nav>
            <Navigation />
            <ContactLinks />
          </Nav>
          <Main>
            <ContentDisplay>
              <Header>Hi, I'm Drew</Header>
            </ContentDisplay>
          </Main>
          <ThemeSelector />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
