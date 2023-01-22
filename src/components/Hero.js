import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <div id="hero" className="d-flex justify-content-center">
      <div>
        <h1 className="text-black">Drew Annese</h1>
        <div className="row text-center">
          <div>
            <a className="px-1 text-black" href="https://github.com/da3491">
              <i className="fa-solid fa-file-magnifying-glass"></i>
            </a>
            <a className="px-1 text-black" href="https://github.com/da3491">
              <i className="fa-brands fa-github-square fs-5"></i>
            </a>
            <a className="px-1 text-black" href="linkedin.com/da3491">
              <i className="fa-brands fa-linkedin fs-5"></i>
            </a>
          </div>
          <div className="custom-shape-divider-top-1663186537"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
