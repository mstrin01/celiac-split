import React from "react";

const GuideMap = () => {
  return (
    <section className="guide-map">
      <iframe
        title="Mapa bezglutenskih restorana u Splitu"
        src="https://www.google.com/maps?q=Split,Croatia&z=13&output=embed"
        width="100%"
        height="420"
        style={{
          border: "0",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default GuideMap;