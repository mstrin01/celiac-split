import React from "react";
import Logo from "../assets/images/logo.png";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <img
              src={Logo}
              alt="Logo društva"
              className="logo-icon"
            />

            <div className="logo-text">
              <span style={{ color: "white" }}>
                Splitsko-dalmatinsko
              </span>
              <span style={{ color: "white" }}>
                društvo za celijakiju
              </span>
            </div>
          </div>
        </div>

        <div className="footer-links">
          
          <ul>
            <li><Link to="/">Početna</Link></li>
            <li><Link to="/about">O nama</Link></li>
            <li><Link to="/guide">Bezglutenski vodič</Link></li>
            <li><Link to="/donations">Donacije</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </div>

        
        <div className="footer-info">
          <p>
            Ni bokun glutena - ni bokun problema!
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Splitsko-dalmatinsko društvo za celijakiju.
          Sva prava pridržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;