import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  background: #ccc;
  border-radius: 5px;
  margin-bottom: 2em;
  padding: 0;
  border: 1px solid white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
    padding: 2em 4em;
  }
`;

const Content = styled.div`
  padding: 1em;
`;

const Header = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;
const Paragraph = styled.p`
  @media (min-width: 768px) {
    font-weight: 600;
  }
`;

const About = () => {
  return (
    <Container>
      <Content>
        <Header>About Me</Header>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
          magna eget congue gravida, velit quam feugiat mauris, a tincidunt mi
          libero ac dolor. Sed auctor euismod eros, at dictum orci dictum id.
          Sed euismod, velit vel fringilla malesuada, nisi nisi tincidunt augue,
          id aliquet magna enim id nibh. Sed euismod risus eget magna accumsan,
          ac hendrerit tellus vestibulum.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
          magna eget congue gravida, velit quam feugiat mauris, a tincidunt mi
          libero ac dolor. Sed auctor euismod eros, at dictum orci dictum id.
          Sed euismod, velit vel fringilla malesuada, nisi nisi tincidunt augue,
          id aliquet magna enim id nibh.
        </Paragraph>
      </Content>
    </Container>
  );
};

export default About;
