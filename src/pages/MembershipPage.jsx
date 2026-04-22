import React from "react";
import "../styles/MembershipPage.css";
import clanarina from "../assets/images/clanarina.png";

const MembershipPage = () => {
  return (
    <main className="membership-page">

      {/* HERO */}
      <section className="membership-hero">
        <span className="membership-label">Članstvo</span>
        <h1>Postanite član zajednice 💙</h1>
        <p>
          Pridružite nam se u dva jednostavna koraka i podržite rad udruge.
        </p>
      </section>

      {/* STEPS */}
      <section className="membership-steps">

        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Ispunite prijavu</h3>
          <p>
            Ispunite Google obrazac s osnovnim podacima.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEJ9Om7Y7ISeHHQPIzRK7d3S0o5XDeNrlO6BXqQo7EmgEcxQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="step-btn"
          >
            Ispuni obrazac
          </a>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h3>Uplatite članarinu</h3>
          <p>
            Godišnja članarina iznosi 15 € i vrijedi 12 mjeseci.
          </p>
        </div>

      </section>

      {/* PAYMENT */}
      <section className="membership-card">
        <h2>Podaci za uplatu</h2>

        <div className="payment-info">
          <div className="payment-row">
            <span>Naziv primatelja</span>
            <strong>Splitsko-dalmatinsko društvo za celijakiju</strong>
          </div>

          <div className="payment-row">
            <span>IBAN</span>
            <strong>HR2824070001100574935</strong>
          </div>

          <div className="payment-row">
            <span>Model</span>
            <strong>HR00</strong>
          </div>

          <div className="payment-row">
            <span>Poziv na broj</span>
            <strong>OIB platitelja</strong>
          </div>

          <div className="payment-row">
            <span>Opis plaćanja</span>
            <strong>Članarina</strong>
          </div>
        </div>
      </section>

      {/* QR */}
      <section className="qr-code">
        <div className="qr-section">
          <p className="qr-label">...ili skenirajte QR kod za uplatu</p>

          <img
            src={clanarina}
            alt="QR kod za plaćanje članarine"
            className="qr-image"
          />

          <a href={clanarina} download className="download-qr-btn">
            Preuzmi QR kod
          </a>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="member-benefits">
        <h2>Što dobivate kao član?</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <span>🤝</span>
            <p>Povezivanje s osobama koje žive bez glutena</p>
          </div>

          <div className="benefit-card">
            <span>📚</span>
            <p>Provjerene informacije i edukacije</p>
          </div>

          <div className="benefit-card">
            <span>📍</span>
            <p>Preporuke sigurnih mjesta u Splitu</p>
          </div>

          <div className="benefit-card">
            <span>🎉</span>
            <p>Sudjelovanje u događanjima i aktivnostima</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="membership-cta">
        <h2>Pridružite nam se 💙</h2>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfEJ9Om7Y7ISeHHQPIzRK7d3S0o5XDeNrlO6BXqQo7EmgEcxQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Ispuni prijavu
        </a>
      </section>

    </main>
  );
};

export default MembershipPage;