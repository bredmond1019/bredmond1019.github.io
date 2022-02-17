import React from "react";

function Projects({ project }) {
  return (
    <div className="project-container">
      <div className="project-image-wrapper">
        <img src={project.image} alt="" className="project-image" />
      </div>
      <div className="project-info-wrapper">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-info">{project.description}</p>
        <a href={project.link} className="project-link">
          Check it out on Github
        </a>
      </div>
    </div>
  );
}

export default Projects;
