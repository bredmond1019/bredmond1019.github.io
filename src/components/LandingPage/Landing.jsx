import React from "react";

import Connect from "./Connect";
import About from "./About";
import Timeline from "./Timeline";
import TechStack from "./TechStack";
import Portfolio from "../Portfolio";
import Skills from "./Skills";

export default function Landing() {
  return (
    <div>
      <div id="home" className="landing-wrapper">
        <div className="landing-page">
          <h1 className="landing-title">Brandon Redmond</h1>

          <div className="landing-subtitle-wrapper">
            <h2 className="landing-subtitle ">Software Developer.</h2>
            <h2 className="landing-subtitle ">Rock Climber.</h2>
            <h2 className="landing-subtitle ">Dog Lover.</h2>
          </div>
        </div>
      </div>
      <div id="about-section" className="about-wrapper">
        <TechStack />
        <Portfolio />
        <About />
        <Timeline />
      </div>

      <Connect />
    </div>
  );
}
