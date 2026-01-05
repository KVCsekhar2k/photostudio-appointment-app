import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">

        {/* Studio Info */}
        <div className="footer-section">
          <h3>CK-Photography</h3>
          <p>
            Professional photography services capturing timeless moments
            with creativity and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a ><Link to="/" className="footer-links-section">Home</Link></a></li>
            <li><a ><Link to="/services" className="footer-links-section">Services</Link></a></li>
            <li><a ><Link to="/book" className="footer-links-section">Book Appointment</Link></a></li>
            <li><a ><Link to="/contact" className="footer-links-section">Contact</Link></a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><i className="fa-solid fa-phone"></i> +91 9603146486</p>
          <p><i className="fa-solid fa-location-dot"></i>Yerraguntla,Kadapa,AP 516309</p>
          <p><i className="fa-solid fa-envelope"></i> venkatasekharkvcs@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} CK-Photography. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
