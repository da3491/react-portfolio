import React from "react";
import { useTheme } from "./ThemeContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.div`
  position: absolute;
  top: -2em;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  width: 100px;
  height: 30px;

  :hover {
    color: white;
    background: linear-gradient(
      transparent,
      transparent,
      ${(props) => props.themecolor.accent1}
    );
  }
`;

const Navigation = () => {
  const theme = useTheme();

  return (
    <StyledNav>
      <StyledNavLink to="/" themecolor={theme.colors}>
        <div className="icon">home</div>
      </StyledNavLink>
      <StyledNavLink to="/about" themecolor={theme.colors}>
        <div className="icon">about</div>
      </StyledNavLink>
      <StyledNavLink to="/work" themecolor={theme.colors}>
        <div className="icon">work</div>
      </StyledNavLink>
      <StyledNavLink to="/skills" themecolor={theme.colors}>
        <div className="icon">skills</div>
      </StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
