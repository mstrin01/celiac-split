import React from "react";
import Logo from "../assets/images/logo.png"; 
import { Link } from "react-router-dom";
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
        <Link to="/">Početna</Link>
        <li><a href="/about">O nama</a></li>
        <li><a href="/guide">Bezglutenski vodič</a></li>
        <li><a href="/events">Događanja</a></li>
        <Link to="/contact">Kontakt</Link>
        <li><a href="/join" className="btn-nav">Postanite član</a></li>
      </ul>
      
    </nav>
  );
};

export default Navbar;