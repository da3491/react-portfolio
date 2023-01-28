import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { BiDotsHorizontal } from "react-icons/bi";
import styled from "styled-components";

const StyledNav = styled.div`
  width: 100%;
`;

const StyledNavButton = styled.button`
  position: relative;
  background: transparent;
  border: none;
  width: 100%;
  height: 50px;
  z-index: 5;

  & > .icon {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    transform: scale(3.3, 3);
  }

  // @media (max-width: 768px) {
  //   & > .icon {
  //     left: 0;
  //     // transform: translateX(-80%);
  //   }
  }
`;

const StyledDropdown = styled.div`
  display: ${(props) => (props.toggleVisible ? "flex" : "none")};
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  background: transparent;

  &:after {
    content: "";
    background: black;
    opacity: 0.3;
  }
`;

const StyledNavLink = styled.a`
  color: white;
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;

  &:hover {
    border-bottom: 2px solid white inset;
    background: linear-gradient(90deg, black, white);
  }
`;

const Navigation = () => {
  const [toggleVisible, setToggleVisible] = useState(false);
  const theme = useTheme();

  return (
    <StyledNav>
      <StyledNavButton
        onClick={() => {
          console.log("menu button clicked");
          setToggleVisible(!toggleVisible);
        }}
        themeColor={theme.colors.accent1}
      >
        <BiDotsHorizontal className="icon" />
      </StyledNavButton>
      <StyledDropdown toggleVisible={toggleVisible}>
        <StyledNavLink>
          <div className="icon">me</div>
        </StyledNavLink>
        <StyledNavLink>
          <div className="icon">work</div>
        </StyledNavLink>
        <StyledNavLink>
          <div className="icon">skills</div>
        </StyledNavLink>
      </StyledDropdown>
    </StyledNav>
  );
};

export default Navigation;
