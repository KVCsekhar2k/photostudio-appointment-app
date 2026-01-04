import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import { Link } from "react-router-dom";
import "../styles/servicesPage.css";

const servicesData = [
  {
    title: "Wedding Photography",
    description:
      "Complete wedding coverage including candid shots, rituals, and premium editing to preserve your big day forever.",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
  },
  {
    title: "Pre-Wedding Shoot",
    description:
      "Creative outdoor and studio pre-wedding shoots designed to tell your love story beautifully.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    title: "Portrait Photography",
    description:
      "Professional portraits with perfect lighting, expressions, and background composition.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Event Coverage",
    description:
      "Birthdays, engagements, corporate events, and celebrations captured with attention to detail.",
    image:
      "https://i.pinimg.com/1200x/e1/ad/47/e1ad47f6c5c1e11360eb69ccaa69a8d9.jpg",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      <section className="services-page">
        <div className="services-page-wrapper">

          {/* Page Header */}
          <div className="services-page-header">
            <h1>Our Photography Services</h1>
            <p>
              We offer a wide range of professional photography services
              tailored to capture your most precious moments.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-page-grid">
            {servicesData.map((service, index) => (
              <div className="services-page-card" key={index}>
                <img src={service.image} alt={service.title} />

                <div className="services-page-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                    <Link to="/book" className="services-page-btn">Book Now</Link>
    
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="services-page-cta">
            <h2>Ready to book your shoot?</h2>
            <a><Link to="/book">Book an Appointment</Link></a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
