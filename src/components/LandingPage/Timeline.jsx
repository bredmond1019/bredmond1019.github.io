import React from "react";

import math1 from "./../../images/time_line/math1.jpg";
import math_masters from "./../../images/time_line/math_masters.jpg";
import classroom from "./../../images/time_line/classroom.jpg";
import uber from "./../../images/time_line/uber.svg";
import software_developer from "./../../images/time_line/software_developer.png";
import math_teacher2 from "./../../images/time_line/math_teacher2.jpg";
import mountain from "./../../images/time_line/mountain2.jpg";
import mfa from "./../../images/time_line/mfa.png";

function Timeline() {
  let timeLineItems = [
    {
      image: math1,
      date: "2006 - 2010",
      title: "Dual Bachelor's Degree: Mathematics & Education",
    },
    {
      image: math_teacher2,
      date: "2011 - 2013",
      title: "High School Mathematics Teacher",
    },
    {
      image: uber,
      date: "2013 - 2014",
      title: "Uber Technologies - Operations: Driver Side",
    },
    {
      image: classroom,
      date: "2014 - 2020",
      title: "High School Computer Science & Mathematics Teacher",
    },
    {
      image: math_masters,
      date: "2015 - 2017",
      title: "Master's Degree in Mathematics",
    },
    {
      image: mfa,
      date: "2017-2020",
      title: "Math For America Master Teacher",
    },
    {
      image: software_developer,
      date: "2020 - Present",
      title: "Software Developer",
    },
  ];

  return (
    <div className="timeline">
      <div className="timeline-header">
        <h1 className="timeline-title">Education and Experience</h1>
        <h3 className="timeline-subtitle">My Professional Story</h3>
      </div>

      <div className="timeline-items-wrapper">
        {timeLineItems.map((item, i) => {
          return (
            <div className="timeline-item-wrapper">
              <div className="timeline-image-container">
                <img src={item.image} alt="" className="timeline-image" />
              </div>

              <div className="tile ">
                <div className="tile-body">
                  <div className="tile-grow">
                    <h1 className="tile-title">{item.date}</h1>
                    <p className="tile-detail">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="final-image-wrapper">
          <div className="image-container">
            <img src={mountain} alt="" className="timeline-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
