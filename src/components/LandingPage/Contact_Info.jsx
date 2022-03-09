import React from "react";

import github from "./../../images/contact_info/github.svg";
import linkedin from "./../../images/contact_info/linkedin.svg";
import insta from "./../../images/contact_info/insta.svg";
import email from "./../../images/contact_info/email.svg";

function Contact_Info() {
  const contact_info = [
    { link: "https://github.com/bredmond1019", icon: github },
    { link: "https://www.linkedin.com/in/bredmond1019/", icon: linkedin },
    { link: "https://www.instagram.com/urbanlumberjack19/", icon: insta },
    { link: "mailto:bredmond1019@gmail.com", icon: email },
  ];

  return (
    <div className="info-icons">
      {contact_info.map((contact, i) => {
        return (
          <a href={contact.link} key={i}>
            <img src={contact.icon} alt="" className="info-icon" />
          </a>
        );
      })}
    </div>
  );
}

export default Contact_Info;
