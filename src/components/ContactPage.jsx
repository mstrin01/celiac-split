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
            <br />
            Tu smo za vas!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div className="contact-item-text">
                <span>E-mail</span>
                <a href="mailto:celiacsplit@gmail.com">
                  celiacsplit@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div className="contact-item-text">
                <span>Telefon</span>
                <a href="tel:+38521395062">+385 21 395 062</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-text">
                <span>Adresa</span>
                <a href="#">
                  Ul. ban Mladenova 9/II, Split
                </a>
              </div>
            </div>
          </div>
        </div>

        
      <div className="social-card">
        <div className="floating-icon icon-1">🌐</div>
        <div className="floating-icon icon-2">🔗</div>
        <div className="floating-icon icon-3">💌</div>

        <h2>Povežimo se!</h2>
        <p>
          Pratite naše novosti, događanja, savjete i preporuke
          za život bez glutena.
        </p>

        <div className="social-links-vertical">
          <a
            href="https://www.facebook.com/splitglutenfree/?locale=hr_HR"
            target="_blank"
            rel="noopener noreferrer"
            className="social-big-btn"
          >
            <span className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.9h-2.33V22C18.34 21.27 22 17.1 22 12.07z" />
              </svg>
            </span>
            Facebook
          </a>

          <a
            href="https://www.instagram.com/celiacsplit/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-big-btn"
          >
            <span className="social-icon">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
            Instagram
          </a>
        </div>
      </div>
      </div>
    </main>
  );
};

export default ContactPage;