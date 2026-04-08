import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";

const Home = () => {
  return (
    <div className="app">
     

      <main>
        <Hero />
        <AboutPreview />
      </main>

      
    </div>
  );
};

export default Home;