import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../Assets/my2.jpg";

import HeaderSocial from "./HeaderSocial";

const Header = (title) => {
  return (
    <header>
      <div className="container header__container">

<i className="quote">“A beautiful smile is the best universal welcome. It can make the day a good day easily.”.</i>

        <h5>Hello I 'am</h5>
        <h1>{title.title}</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />
        <HeaderSocial />
        <div className="me">
          <img className="img" src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
