import React from "react";
import "../styles/Hero.css";
import HeroImage from "../assets/images/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          Splitsko-dalmatinsko društvo za celijakiju
        </span>

        <h1>
          Podrška, edukacija i zajednica za osobe s celijakijom
        </h1>

        <p>
          Niste sami - tu smo za vas.
        </p>

        <div className="hero-buttons">
          <Link to="/join" className="hero-btn primary">
            Postanite član
          </Link>

          <Link to="/contact" className="hero-btn secondary">
            Povežimo se
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img src={HeroImage} alt="Bezglutenska hrana" />
      </div>
    </section>
  );
};

export default Hero;