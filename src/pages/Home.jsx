import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Dobrodošli na stranicu!
      </h1>
    </div>
  );
};

export default Home;