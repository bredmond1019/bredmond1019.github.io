import React from "react";

function Skills() {
  const skills = [
    "problem solver",
    "time management",
    "interpersonal relationships",
    "Adaptable in a fast paced environment",
    "excellent communuication",
    "organization",
    "planning",
  ];
  return (
    <div className="skills-container">
      <div className="skills-title-wrapper">
        <h3 className="skills-title">Skills</h3>
      </div>
      <div className="skills-list">
        {skills.map((skill, i) => {
          return (
            <h4 className="skill-item" key={i}>
              {skill}
            </h4>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
