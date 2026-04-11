import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeHighlights.css";

const HomeHighlights = () => {
  return (
    <section className="home-highlights">
      

      <div className="highlights-grid">
        <div className="highlight-card">
          <div className="highlight-icon">🍽️</div>
          <h3>Bezglutenski vodič</h3>
          <p>
            Otkrijte restorane i pekare s
            bezglutenskom ponudom u Splitu.
          </p>
          <Link to="/guide" className="highlight-btn">
            Otvori vodič
          </Link>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">💙</div>
          <h3>Podržite naš rad</h3>
          <p>
            Vaša donacija pomaže edukaciji, podršci i
            povezivanju zajednice osoba s celijakijom.
          </p>
          <Link to="/donations" className="highlight-btn">
            Doniraj
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;