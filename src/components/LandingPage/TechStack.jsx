import React from "react";

import Python from "./../../images/tech_stack/Python.svg";
import JavaScript from "./../../images/tech_stack/JS.svg";
import Flask from "./../../images/tech_stack/Flask.svg";
import React_Img from "./../../images/tech_stack/React.svg";
import GraphQL from "./../../images/tech_stack/GraphQL.svg";
import PostgreSQL from "./../../images/tech_stack/PostgreSQL.svg";

function TechStack() {
  let techStack = [
    { name: "python", image: Python },
    { name: "flask", image: Flask },
    { name: "graphql", image: GraphQL },
    { name: "react", image: React_Img },
    { name: "javascript", image: JavaScript },
    { name: "postgres", image: PostgreSQL },
  ];

  return (
    <div className="tech-stack">
      <div className="tech-stack-header">
        <h1 className="tech-stack-title">My Tech Stack</h1>

        <h4 className="tech-stack-subtitle">These are the technologies I use most often</h4>
      </div>

      <div className="icon-wrapper">
        {techStack.map((skill, i) => {
          return (
            <div className={`${skill.name} icon-container`} key={i}>
              <div className="icon-title-wrapper">
                <h3 className="icon-title">{skill.name}</h3>
              </div>
              <div className="icon-img-container">
                <img src={skill.image} className={`${skill.name}-img icon-img`} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
