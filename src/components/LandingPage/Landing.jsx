import React from "react";

import Contact_Info from "./Contact_Info";
import About from "./About";
import Timeline from "./Timeline";
import TechStack from "./TechStack";
import Portfolio from "../Portfolio";

export default function Landing() {
  return (
    <div>
      <div id="home" className="landing-wrapper">
        <div className="landing-page">
          <h1 className="landing-title">Brandon Redmond</h1>

          <div className="landing-subtitle-wrapper">
            <h2 className="landing-subtitle ">Software Developer.</h2>
            <h2 className="landing-subtitle ">Language Enthusiast.</h2>
            <h2 className="landing-subtitle ">Dog Lover.</h2>
          </div>
        </div>
      </div>
      <div id="about" className="about-wrapper">
        <TechStack />
        <Portfolio />
        <About />
        <Timeline />
      </div>

      <Contact_Info />
    </div>
  );
}
