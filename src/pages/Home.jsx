import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Dobrodošli na stranicu!
      </h1>
      <Footer />
    </div>
    
  );
};

export default Home;