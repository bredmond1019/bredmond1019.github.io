import React from "react";

import Projects from "./Projects";

import Fala from "./../images/Fala.png";
import Climbr from "./../images/Climbr.png";

function Portfolio() {
  let projectsList = [
    {
      title: "Fala",
      description: "A Portuguese Vocab Review Application",
      image: Fala,
      link: "https://brandonredmond.com/Fala/",
      github: "https://github.com/bredmond1019/Fala",
    },
    {
      title: "Climbr",
      description: "A Social Network for Climbr and Outdoor Enthusiasts",
      image: Climbr,
      link: "",
      github: "https://github.com/bredmond1019/Portfolio/tree/main/Climbr",
    },
  ];

  return (
    <div id="portfolio" className="portfolio-container">
      <div className="portfolio-title-wrapper">
        <h1 className="portfolio-title">Portfolio</h1>
      </div>

      {projectsList.map((project, i) => {
        return <Projects project={project} />;
      })}
    </div>
  );
}

export default Portfolio;
