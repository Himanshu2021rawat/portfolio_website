import React from "react";
import "./Portfolio.css";
import IMG1 from "../../Assets/img12.jpg";
import IMG2 from "../../Assets/img12.jpg";
import IMG3 from "../../Assets/img12.jpg";
import IMG4 from "../../Assets/img12.jpg";
import IMG5 from "../../Assets/img12.jpg";
import IMG6 from "../../Assets/img12.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Text manipulation App",
    github: "https://github.com/Himanshu2021rawat/H.R-Textmanipulations",
    demo: "https://github.com/Himanshu2021rawat/H.R-Textmanipulations",
  },

  {
    id: 2,
    image: IMG2,
    title: "Chat-App",
    github: "https://github.com/Himanshu2021rawat/Chat-App",
    demo: "https://github.com/Himanshu2021rawat/Chat-App",
  },

  {
    id: 3,
    image: IMG3,
    title: "Encryption and decryption of Message python-tkinter ",
    github: "https://github.com/Himanshu2021rawat/Encryption-decryption-Using-Python-tkinter.py",
    demo: "https://github.com/Himanshu2021rawat/Encryption-decryption-Using-Python-tkinter.py",
  },

  {
    id: 4,
    image: IMG4,
    title: "Animals image Generator",
    github: "https://github.com/Himanshu2021rawat/Random-Fox-Dog-Image-generator",
    demo: "https://github.com/Himanshu2021rawat/Random-Fox-Dog-Image-generator",
  },

  {
    id: 5,
    image: IMG5,
    title: "Comming Soon...",
    github: "https://github.com",
    demo: "https://github.com",
  },

  {
    id: 6,
    image: IMG6,
    title: "Comming Soon...",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
      {/*  map() creates a new array from calling a function for every array element.

      map() calls a function once for each element in an array.
      
      map() does not execute the function for empty elements.
      
  map() does not change the original array.*/}

      {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
