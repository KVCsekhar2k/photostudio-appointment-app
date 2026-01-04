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
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/book">Book Appointment</a></li>
            <li><a href="/contact">Contact</a></li>
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
