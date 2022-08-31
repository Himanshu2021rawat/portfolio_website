import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../Assets/my2.jpg";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I 'am</h5>
        <h1>Himanshu Rawat</h1>
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
