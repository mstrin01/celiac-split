import React from "react";
import Logo from "../assets/images/logo.png";
import "../styles/Footer.css";

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
        </div>
            <div className="logo-text">
              <span style={{ color: "white" }}>
                Splitsko-dalmatinsko
              </span>
              <span style={{ color: "rgba(255,255,255,0.55)" }}>
                društvo za celijakiju
              </span>
            </div>
          </div>

          <p className="footer-tagline">
            Podrška, edukacija i zajednica za osobe s celijakijom u
            Splitsko-dalmatinskoj županiji.
          </p>
        </div>

        <div className="footer-links">
          <h4>Stranice</h4>
          <ul>
            <li><a href="/">Početna</a></li>
            <li><a href="#about">O nama</a></li>
            <li><a href="#guide">Bezglutenski vodič</a></li>
            <li><a href="#events">Događanja</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
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