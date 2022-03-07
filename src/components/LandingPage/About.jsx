import React from "react";
import Brandon from "./../../images/Brandon3.jpg";

function About() {
  return (
    <div id="about" className="about-section">
      <h1 className="about-title">About Me</h1>
      <div className="about-content-wrapper">
        <div className="about-image-container">
          <img src={Brandon} className="about-img" alt="" />
        </div>
        <div className="about-info-wrapper">
          <p className="about-info-text">
            Hello, my name is Brandon Redmond and welcome to my blog! I am a Full Stack Software
            Developer based out of New York City.
          </p>
          <p className="about-info-text">
            I am a web developer with a passion for learning and teaching. I have a Master's Degree
            in Mathematics and I taught high school Computer Science and Mathematics in NYC for
            about 6 years. Near the end of 2020, I decided to make a change and persue a career as a
            Full Stack Web Developer.
          </p>

          <p className="about-info-text">
            When I'm not coding or developing web apps, you can find me somewhere outdoors with my
            pup. I'll most likely be out rock climbing with some friends or at the park playing ball
            with Bella. I also love to learn languages. Tanti anni fa, ho imparato da solo a parlare
            italiano. Além disso, mais recentemente, aprendi a falar português! I make good use of
            these languages by making sure I get to travel and meet new people from all different
            cultures. And lastly, if I'm not out doing one of the above, I'm probably at home
            playing my PS5 or reading a good science fiction book.
          </p>
          <p className="about-info-text about-info-outro">
            Feel free to connect with me on social media or send me an email!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

{
  /* <p className="about-info-text">
            I first started learning how to code while I was getting my Master's degree in
            Mathematics. Seeing the way the world was rapidly evolving, I knew that coding was going
            to be a crucial skill to have. After learning the basics and having completed my
            master's, I decided to speak with my principal and create a Computer Science Department
            in our school and become the full-time Computer Science Teacher. I taught students the
            fundamentals of development using Python, PyGame, and Python Turtle. Eventually I taught
            kids how to build basic web apps using HTML, CSS, and Flask.
          </p> 

<p className="about-info-text">
Teaching was an amazing job and I'm so happy to have spent as much time as I did
teaching kids -- I'll never forget it. But deep down, I knew that I wasn't going to be
in the classroom forever. I've learned a lot of valuable skills as a classroom teacher
that I am excited to carry with me into my career as a software developer.
</p> */
}
