import React from "react";
import { useThemeUpdate } from "./ThemeContext";
import themes from "../utils/themes";

const ThemeSelector = () => {
  const changeTheme = useThemeUpdate();

  return (
    <div>
      <div>
        <div className="selector-container">
          {Object.keys(themes).map((theme) => (
            <button
              key={theme}
              onClick={() => {
                changeTheme(theme);
              }}
              value={theme}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
