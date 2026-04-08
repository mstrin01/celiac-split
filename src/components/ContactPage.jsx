import React from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  return (
    <main className="contact-page">
      <div className="contact-grid">
        <div className="contact-info">
          <h1>Kontaktirajte nas</h1>
          <p>
            Imate pitanja o celijakiji, članstvu ili nečemu drugom?
            Tu smo za vas — javite nam se na bilo koji od ovih načina.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div className="contact-item-text">
                <span>E-mail</span>
                <a href="mailto:info@celijakija-split.hr">
                  info@celijakija-split.hr
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div className="contact-item-text">
                <span>Telefon</span>
                <a href="tel:+38521234567">+385 21 234 567</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-text">
                <span>Adresa</span>
                <a href="#">21000 Split, Hrvatska</a>
              </div>
            </div>
          </div>

          <div className="social-row">
            <a
              href="https://www.facebook.com/splitglutenfree/?locale=hr_HR"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/celiacsplit/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Pošaljite upit</h2>
          <p>Odgovaramo unutar 1–2 radna dana.</p>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Vaše ime i prezime" />
            </div>

            <div className="form-group">
              <input type="email" placeholder="E-mail adresa" />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Vaša poruka..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Pošaljite poruku
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;