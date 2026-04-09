import React from "react";
import "../styles/AboutPage.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <main className="about-page">
      
      <section className="about-hero">
        
        <h1>Tu smo za vas  — zajedno je lakše 💙</h1>
        <p>
          Splitsko-dalmatinsko društvo za celijakiju djeluje s ciljem
          povezivanja, edukacije i stvaranja sigurne zajednice
          za sve osobe koje žive bez glutena.
        </p>
      </section>

      
      <section className="about-cards">
        <div className="about-card">
          <span>🤝</span>
          <h3>Povezujemo ljude</h3>
          <p>
            Okupljamo osobe s celijakijom, njihove obitelji i sve
            koji žele sigurniji život bez glutena.
          </p>
        </div>

        <div className="about-card">
          <span>📚</span>
          <h3>Educiramo</h3>
          <p>
            Dijelimo provjerene informacije, iskustva i savjete
            za svakodnevni život bez glutena.
          </p>
        </div>

        <div className="about-card">
          <span>📍</span>
          <h3>Sigurna mjesta</h3>
          <p>
            Preporučujemo restorane, pekare i trgovine
            u Splitu i okolici.
          </p>
        </div>
      </section>

      
      <section className="about-story">
        <h2>Jer znamo kako je.</h2>
        <blockquote>
          Pitanja u restoranu. Nepovjerenje.
          <br />
          “Ma nema ti tu glutena...” 😅
        </blockquote>
        <p>
          Zato smo stvorili mjesto gdje dijelimo iskustva,
          učimo jedni od drugih i pokazujemo da uz zajednicu
          život bez glutena može biti sigurniji i ljepši.
        </p>
      </section>

      
      <section className="about-checklist">
        <h2>Članstvo u udruzi donosi...</h2>
        <ul>
          <li>✔ iskustva i savjete drugih članova</li>
          <li>✔ preporuke sigurnih mjesta u Splitu</li>
          <li>✔ edukativne sadržaje i novosti</li>
          <li>✔ podršku zajednice</li>
          <li>✔ događanja i druženja</li>
        </ul>
      </section>

      
      <section className="about-cta">
        <h2>
          Ako si iz Splita ili okolice i živiš bez glutena —
          na pravom si mjestu 💙
        </h2>
        <Link to="/contact" className="about-cta-btn">
          Povežimo se
        </Link>
      </section>
    </main>
  );
};

export default AboutPage;