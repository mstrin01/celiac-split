import React from "react";
import "../styles/AboutPreview.css";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="about-preview-content">
        <h2 className="section-title">Tko smo? </h2>

        <p className="intro-text">
          Udruga koja okuplja osobe s celijakijom i njihove obitelji
          na području Splita i okolice.
        </p>

        <p className="about-description">
          Naš cilj je promicanje svijesti, podrške i edukacije osoba
          oboljelih od celijakije i srodnih kroničnih autoimunih
          bolesti probavnog sustava.
        </p>

        <Link to="/contact" className="about-preview-btn">
          Povežimo se
        </Link>
        

      </div>
    </section>
  );
};

export default AboutPreview;