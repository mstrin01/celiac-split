import React from "react";
import "../styles/AboutPreview.css";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="about-preview-content">
        <h2 className="preview-heading">Rad udruge</h2>

        <div className="preview-cards">
          <div className="preview-card">
            <span>🤝</span>
            <h3>Povezujemo</h3>
            <p>
              Okupljamo osobe s celijakijom, njihove obitelji i sve
              koji žele sigurniji život bez glutena.
            </p>
          </div>

          <div className="preview-card">
            <span>📚</span>
            <h3>Educiramo</h3>
            <p>
              Dijelimo provjerene informacije, iskustva i savjete
              za svakodnevni život bez glutena.
            </p>
          </div>

          <div className="preview-card">
            <span>📍</span>
            <h3>Preporučujemo</h3>
            <p>
              Predlažemo mjesta s bezglutenskom ponudom
              u Splitu.
            </p>
          </div>
        </div>

        <Link to="/about" className="about-preview-btn">
          Saznajte više
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;