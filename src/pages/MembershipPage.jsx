import React from "react";
import "../styles/MembershipPage.css";
import clanarina from "../assets/images/clanarina.png";

const MembershipPage = () => {
  return (
    <main className="membership-page">

      {/* HERO */}
      <section className="membership-hero">
        <h1>Postanite član naše udruge 💙</h1>
        <p>
          Dva su jednostavna koraka — ispunite obrazac i uplatite  članarinu.
        </p>
      </section>

      {/* STEPS */}
      <section className="membership-steps">

        {/* STEP 1 */}
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Ispunite prijavu</h3>
          <p>Ispunite Google obrazac s Vašim podacima.</p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEJ9Om7Y7ISeHHQPIzRK7d3S0o5XDeNrlO6BXqQo7EmgEcxQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="step-btn"
          >
            Ispuni obrazac
          </a>
        </div>

        {/* STEP 2 */}
        <div className="step-card payment-card">
          <div className="step-number">2</div>
          <h3>Uplatite članarinu</h3>
          <p>Godišnja članarina iznosi 15 €.</p>

          <div className="payment-layout">

            {/* LEFT - DATA */}
            <div className="payment-info">
              <div className="payment-row">
                <span>Primatelj</span>
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
              <strong>Uplata članarine</strong>
            </div>
            </div>

            

            {/* RIGHT - QR */}
            <div className="qr-box">
              <p className="qr-label">Skenirajte za uplatu</p>

              <img
                src={clanarina}
                alt="QR kod"
                className="qr-image"
              />

              <a href={clanarina} download className="download-btn">
                Preuzmi barkod
              </a>
            </div>

          </div>
        </div>

      </section>

    </main>
  );
};

export default MembershipPage;