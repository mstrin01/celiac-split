import React from "react";
import "../styles/Hero.css";
import HeroImage from "../assets/images/hero.png";

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
          Povezujemo osobe s celijakijom, njihove obitelji i stručnjake kroz
          edukaciju, događanja i bezglutenski vodič kroz Split i okolinu.
        </p>

        <div className="hero-buttons">
          <a href="/join" className="hero-btn primary">
            Postanite član
          </a>

          <a href="/about" className="hero-btn secondary">
            Saznajte više
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={HeroImage} alt="Bezglutenska hrana" />
      </div>
    </section>
  );
};

export default Hero;