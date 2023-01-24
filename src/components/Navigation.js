import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  display: inline-block;

  .dots {
    display: flex;
    gap: 0.3em;
  }

  .dot {
    width: 7px;
    height: 7px;
    background: white;
    border-radius: 50px;
    color: white;
  }
`;

function Navigation() {
  return (
    <StyledNav>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </StyledNav>
  );
}

export default Navigation;
