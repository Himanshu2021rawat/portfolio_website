import React from "react";
import "./About.css";
import Me from "../../Assets/my7.jpg";
import { RiAwardLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { RiProjectorLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="img1" src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardLine className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>1+ Worldwide</small>
            </article>

            <article className="about__card">
              <RiProjectorLine className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
           Hello! My name is Himanshu Rawat and this is my portfolio as you can see.
           Here You can see my achivements,skills and even visit to  other projects 
           via GitHub and if there is any query ,suggestion or aprasel  you want to give or ask me 
           you can contact me from the contact section or from my socials i have given.-----

          "The Best Preperation for the good work tommorow is to do good work today" 
           
           

          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
