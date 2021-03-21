import React from "react";
import { projectsData } from "../services/projectsData";
import { useState, useEffect } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import "./project.css";

const Project = ({ match, history }) => {
  let project = projectsData.find(({ id }) => id === match.params.id);
  const [offset, setOffset] = useState(0);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

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
    <React.Fragment>
      <article className="project-case-study" role="project case study">
        <div className="sticky">{project.title}</div>
        <div className="objective">
          <h2 className="objective-title">Objective</h2>
          <p>{project.objective}</p>
          <button
            onClick={() => openInNewTab(`${project.url}`)}
            className="project-url"
            aria-label="project link"
          >
            Visit web site
          </button>
        </div>
        <button
          className="back-btn"
          aria-label="back button"
          onClick={() => history.push("/projects")}
        >
          <TiArrowBackOutline
            style={{ color: "#fff", fontSize: "2vw", fontWeight: "normal" }}
          />
        </button>
      </article>
      <img
        src={project.image}
        className="project-img"
        alt={project.title}
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />

      <div className="presentation">
        <img src={project.tablet} className="tablet"></img>
        <img src={project.mobile} className="mobile"></img>
      </div>
      <div className="presentation-mobile">
        <img src={project.mobileInner} className="mobile-inner"></img>
        <img src={project.mobileMore} className="mobile-more"></img>
      </div>
    </React.Fragment>
  );
};

export default Project;
