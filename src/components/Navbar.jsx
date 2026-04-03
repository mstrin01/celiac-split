import React from "react";
import Logo from "../assets/images/logo.png"; 
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="/" className="logo">
        <img src={Logo} alt="Logo" className="logo-icon" />
        <div className="logo-text">
          <span>Splitsko-dalmatinsko</span>
          <span>društvo za celijakiju</span>
        </div>
      </a>
      <ul className="nav-links">
        <li><a href="/" className="active">Početna</a></li>
        <li><a href="/about">O nama</a></li>
        <li><a href="/guide">Bezglutenski vodič</a></li>
        <li><a href="/events">Događanja</a></li>
        <li><a href="/contact">Kontakt</a></li>
      </ul>
      <a href="/join" className="btn-nav">Postanite član</a>
    </nav>
  );
};

export default Navbar;