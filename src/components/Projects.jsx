import React from "react";

function Projects({ project }) {
  return (
    <div className="project-container">
      <div className="project-image-wrapper">
        <a href={project.github} className="image-link" target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt="" className="project-image" />
        </a>
      </div>
      <div className="project-info-wrapper">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-info">{project.description}</p>
        <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
          Check it out on Github
        </a>
      </div>
    </div>
  );
}

export default Projects;
