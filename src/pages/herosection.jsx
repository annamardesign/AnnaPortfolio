import React from "react";
import Email from "../components/email.jsx";
import Animation from "../components/animation.js";
import { Link } from "react-router-dom";
import Pdf from "../CV/Resume.pdf";
import "./herosection.css";

const Herosection = () => {
  return (
    <div className="grid-wrapper">
      <div className="frontend" role="animation">
        <Animation className="animation" />
      </div>
      <article className="article" role="about me introduction">
        <div className="about-me">
          <p class-name="intro-line">
            {" "}
            Hi, I'm Anna Marinova and this is my Portfolio as
            Front-End-Developer.{" "}
          </p>
          <p class-name="intro-line">
            {" "}
            Coding interactive layouts, animations and building web apps with{" "}
            <span style={{ color: "#ff3e55" }}>
              HTML5, CSS3, JavaScript, React
            </span>{" "}
            has become my passion.
          </p>
          <p class-name="intro-line">
            {" "}
            I love to draw digitally and make mosaics on the side.{" "}
          </p>
        </div>
        <ul className="links-wrapper">
          <li className="cv">
            <Link
              to={Pdf}
              aria-label="resume link"
              style={{ fontSize: "1.2rem" }}
              target="_blank"
              download
            >
              Download CV
            </Link>
          </li>
          <li className="email">
            <Email aria-label="copy my email" />
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Herosection;
