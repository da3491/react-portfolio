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
  background-color: transparent;
  border: none;
  border-bottom: 3px solid #ccc;
  width: 50px;
  height: 10px;

  &:hover,
  &:active,
  &:focus {
    border-bottom: 5px solid ${(props) => props.theme};
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
          theme={themes[theme].colors.accent1}
        ></StyledButton>
      ))}
    </StyledThemeSelector>
  );
};

export default ThemeSelector;
