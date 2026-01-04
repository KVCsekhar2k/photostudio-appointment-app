import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">

        {/* Image Block */}
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="Photography Studio"
          />
        </div>

        {/* Content Block */}
        <div className="hero-content">
          <h1>Capture Moments That Last Forever</h1>

          <p>
            Premium photography services crafted to preserve your
            weddings, portraits, and special occasions with elegance.
          </p>

          <div className="hero-buttons">
            <a href="/book" className="hero-primary-btn">
              <Link to="/book" className="link-text-button" >Book Appointment</Link>
            </a>
            <a href="tel:+919381040206" className="hero-secondary-btn">
              Call for Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
