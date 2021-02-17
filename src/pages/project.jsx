import React from "react";
import { projectsData } from "../services/projectsData";
import { useState, useEffect } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import "./project.css";

const Project = ({ match, history }) => {
  let project = projectsData.find(({ id }) => id === match.params.id);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page">
      <article className="project-case-study">
        <div className="sticky">{project.title}</div>
        <div className="project-name">
          <img
            src={project.image}
            className="project-img"
            alt={project.title}
            style={{
              transform: `translateY(${offset * 0.5}px)`,
            }}
          />
        </div>
        <div className="objective">
          <h2 className="objective-title">Objective</h2>
          <p>{project.objective}</p>
          <a href={project.url} className="project-url">
            Visit web site
          </a>
        </div>
        <button className="back-btn" onClick={() => history.push("/projects")}>
          <TiArrowBackOutline
            style={{ color: "#fff", fontSize: "2vw", fontWeight: "normal" }}
          />
        </button>
      </article>

      <section className="presentation">
        <img src={project.tablet} className="tablet"></img>
        <img src={project.mobile} className="mobile"></img>
      </section>
      <section className="presentation-mobile">
        <img src={project.mobileInner} className="mobile-inner"></img>
        <img src={project.mobileMore} className="mobile-more"></img>
      </section>
    </div>
  );
};

export default Project;
