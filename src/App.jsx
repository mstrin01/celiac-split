import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
      </main>

      <Footer />
    </div>
  );
}

export default App;