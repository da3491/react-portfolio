import React from "react";
import { useTheme } from "./ThemeContext";
import "../styles/Hero.css";

const Hero = () => {
  const theme = useTheme();
  console.log("in hero theme", theme.image);
  return (
    <div id="hero" className="d-flex justify-content-center">
      <img
        src={`"${theme.image}"`}
        alt="view of a mountain"
        style={{ width: "100px", height: "50px" }}
      />
      <div>
        <h1 style={{ color: theme.color }}>Drew Annese</h1>
        <div className="row text-center">
          <div>
            <a className="px-1 text-black" href="https://github.com/da3491">
              <i
                className="fa-solid fa-file-magnifying-glass"
                style={{ color: theme.color }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
