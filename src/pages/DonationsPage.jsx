import React from "react";
import "../styles/DonationsPage.css";

const DonationsPage = () => {
  return (
    <main className="donations-page">
      <section className="donations-hero">
        <h1>Podržite naš rad 💙</h1>
        <p>
          Vaša podrška pomaže nam u edukaciji, povezivanju zajednice
          i promicanju sigurnijeg života bez glutena.
        </p>
      </section>

      <section className="donation-card">
        <h2>Podaci za uplatu</h2>

        <div className="payment-info">
          <div className="payment-row">
            <span>Naziv primatelja</span>
            <strong>Splitsko-dalmatinsko društvo za celijakiju</strong>
          </div>
          
          <div className="payment-row">
            <span>OIB</span>
            <strong>42781739565</strong>
          </div>

          <div className="payment-row">
            <span>Adresa</span>
            <strong>Ul. ban Mladenova 9, Split</strong>
          </div>

          <div className="payment-row">
            <span>IBAN</span>
            <strong>HR2824070001100574935</strong>
          </div>

          

          <div className="payment-row">
            <span>Poziv na broj</span>
            <strong>00 2026</strong>
          </div>

          <div className="payment-row">
            <span>Opis plaćanja</span>
            <strong>Donacija za rad udruge</strong>
          </div>

          <div className="payment-row">
            <span>Model</span>
            <strong>HR00</strong>
          </div>
        </div>
      </section>

      <section className="donation-message">
        <h2>Hvala vam na podršci ✨</h2>
        <p>
          Svaka donacija, bez obzira na iznos, doprinosi radu udruge
          i pomaže osobama koje žive s celijakijom.
        </p>
      </section>
    </main>
  );
};

export default DonationsPage;