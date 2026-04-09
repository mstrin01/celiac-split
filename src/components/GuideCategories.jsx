import React from "react";

const GuideCategories = () => {
  return (
    <section className="guide-categories">
      <div className="guide-card">
        <span>🍽️</span>
        <h3>Restorani</h3>
        <p>
          Preporučeni restorani s bezglutenskim opcijama.
        </p>
      </div>

      <div className="guide-card">
        <span>🥐</span>
        <h3>Pekare</h3>
        <p>
          Pekare i slastičarnice s ponudom bez glutena.
        </p>
      </div>

      <div className="guide-card">
        <span>🛒</span>
        <h3>Trgovine</h3>
        <p>
          Mjesta gdje možete kupiti bezglutenske proizvode.
        </p>
      </div>
    </section>
  );
};

export default GuideCategories;