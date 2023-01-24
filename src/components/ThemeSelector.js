import React from "react";
import { useThemeUpdate } from "./ThemeContext";
import themes from "../utils/themes";
import styled from "styled-components";

const StyledThemeSelector = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: end;
  justify-content: center;
  gap: 2rem;
`;

const StyledButton = styled.button`
  display: inline-block;
  background-color: #999;
  border: none;
  width: 50px;
  height: 3px;

  &:hover,
  &:active {
    background-color: white;
    height: 4px;
  }
`;

const ThemeSelector = () => {
  const changeTheme = useThemeUpdate();

  return (
    <StyledThemeSelector id="theme_Buttons">
      {Object.keys(themes).map((theme) => (
        <StyledButton
          key={theme}
          onClick={() => {
            changeTheme(theme);
          }}
          value={theme}
          className="theme-button"
        ></StyledButton>
      ))}
    </StyledThemeSelector>
  );

  //   <div
  //   id="theme_Buttons"
  //   className="position-absolute bottom-0 start-50 translate-middle mb-4 d-flex gap-3"
  // >
  //   {Object.keys(themes).map((theme) => (
  //     <button
  //       key={theme}
  //       onClick={() => {
  //         changeTheme(theme);
  //       }}
  //       value={theme}
  //       className="theme-button"
  //     ></button>
  //   ))}
  // </div>
};

export default ThemeSelector;
