import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="contact-wrapper">

          {/* Header */}
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>
              Reach out for bookings, collaborations, or any photography-related queries.
            </p>
          </div>

          {/* Social + Details */}
          <div className="contact-grid">

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-item">
                <h2 className="contactIcons"><i className="fa-solid fa-circle-user"></i></h2>
                <span>Chinna Babu</span>
              </div>
              <div className="info-item">
                <h2 className="contactIcons"><i className="fa-solid fa-phone"></i></h2>
                <span>+91 9603146486</span>
              </div>
              <div className="info-item">
                <h2 className="contactIcons"><i className="fa-solid fa-envelope"></i></h2>
                <span>contact@lenscraftstudio.com</span>
              </div>
              <div className="info-item">
                <h2 className="contactIcons"><i className="fa-solid fa-location-dot"></i></h2>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-icons">
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <span className="icons-card"><i className="fa-brands fa-whatsapp"></i></span>
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Instagram">
                <span className="icons-card"><i className="fa-brands fa-instagram"></i></span>
              </a>
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Facebook">
                <span className="icons-card"><i className="fa-brands fa-facebook"></i></span>
              </a>
              <a href="mailto:contact@lenscraftstudio.com" aria-label="Gmail">
                <span className="icons-card"><i className="fa-solid fa-envelope"></i></span>
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
