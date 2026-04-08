import React from "react";
import "../styles/AboutPreview.css";

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

        <a href="/contact" className="about-preview-btn">
          Povežimo se
        </a>
        

      </div>
    </section>
  );
};

export default AboutPreview;