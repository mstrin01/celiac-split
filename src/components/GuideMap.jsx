import React from "react";
import GuideMap from "../components/GuideMap";
import GuideCategories from "../components/GuideCategories";
import "../styles/GuidePage.css";

const GuidePage = () => {
  return (
    <main className="guide-page">
      <section className="guide-hero">
        <span className="guide-label">Bezglutenski vodič</span>
        <h1>Bezglutenski vodič kroz Split</h1>
        <p>
          Pronađite restorane, pekare i trgovine s ponudom
          bez glutena u Splitu i okolici.
        </p>
      </section>

      <GuideMap />

      <GuideCategories />
    </main>
  );
};

export default GuidePage;