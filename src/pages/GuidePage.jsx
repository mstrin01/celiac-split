import React, { useState } from "react";
import "../styles/GuidePage.css";

const categories = {
  restaurants: {
    title: "Restorani",
    emoji: "🍽️",
    query: "gluten free restaurants Split"
  },
  bakeries: {
    title: "Pekare",
    emoji: "🥐",
    query: "gluten free bakery Split"
  },
 
};

const GuidePage = () => {
  const [selected, setSelected] = useState("restaurants");

  const current = categories[selected];

  return (
    <main className="guide-page">
      <section className="guide-hero">
        <h1>Bezglutenski vodič
        </h1>
        <p>
          Pronađite restorane i pekare s ponudom
          bez glutena u Splitu.*
        </p>
      </section>

      <section className="guide-categories">
        {Object.entries(categories).map(([key, item]) => (
          <button
            key={key}
            className={`guide-card ${selected === key ? "active" : ""}`}
            onClick={() => setSelected(key)}
          >
            <span>{item.emoji}</span>
            <h3>{item.title}</h3>
          </button>
        ))}
      </section>
      

      <section className="guide-map">
        <iframe
          title={current.title}
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            current.query
          )}&z=13&output=embed`}
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "20px" }}
          loading="lazy"
        ></iframe>
        <p> *Uvijek pitajte osoblje o mogućoj kontaminaciji. </p>
      </section>
    </main>
  );
};

export default GuidePage;