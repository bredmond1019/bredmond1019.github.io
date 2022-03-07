import React from "react";

import Contact_Info from "./Contact_Info";

import profile_pic from "./../../images/contact_info/profile_pic.png";

function Connect() {
  return (
    <div id="connect" className="contact-info-wrapper">
      <div className="side-bar-nav">
        <Contact_Info />
      </div>
      <div className="contact-title-wrapper">
        <h2 className="contact-title">Get In Touch</h2>
        <h5 className="contact-title-subtext">
          Take a look at my git hub Or Find me on Social Media
        </h5>
        <h5 className="contact-title-subtext"></h5>
      </div>
      <div className="profile-pic-wrapper">
        <img src={profile_pic} alt="" className="profile-pic" />
      </div>
      <Contact_Info />
    </div>
  );
}

export default Connect;
