import React from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";
import { FaFileAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const StyledIconGroup = styled.div`
  color: ${(props) => props.themecolor};

  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 2.6rem;
  margin-bottom: 1em;
`;
const StyledLinks = styled.a`
  color: inherit;
  line-height: 1.1;

  &:hover {
    color: white;
  }
`;

const ContactLinks = () => {
  const theme = useTheme();

  return (
    <StyledIconGroup themecolor={theme.colors.accent1}>
      <StyledLinks href="/resume.com">
        <FaFileAlt />
      </StyledLinks>
      <StyledLinks href="https://github.com/da3491">
        <FaGithubSquare />
      </StyledLinks>
      <StyledLinks href="https://linkedin.com/da3491">
        <FaLinkedin />
      </StyledLinks>
    </StyledIconGroup>
  );
};

export default ContactLinks;
