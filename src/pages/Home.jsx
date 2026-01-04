import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/sections/Hero/Hero";
import Services from "../components/sections/Services/Services";
import About from "../components/sections/About/About";
import Footer from "../components/layout/Footer/Footer";



import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />

      <main className="home-content">
        <Hero />
        <About />
        <Services />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
