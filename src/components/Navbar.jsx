import React from "react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logoLink}>
        <img src={Logo} alt="Logo" style={styles.logo} />
        <span style={{ color: "#084F6E", fontWeight: 600 }}>Celiac Split</span>
      </a>
      <ul style={styles.navLinks}>
        <li><a href="#" style={styles.link}>Početna</a></li>
        <li><a href="#about" style={styles.link}>O nama</a></li>
        <li><a href="#guide" style={styles.link}>Vodič</a></li>
        <li><a href="#contact" style={styles.link}>Kontakt</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    backgroundColor: "#E8E0FB",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  },
  logo: {
    width: "50px",
    height: "50px",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  },
  link: {
    textDecoration: "none",
    color: "#11062C",
    fontWeight: 500,
  },
};

export default Navbar;