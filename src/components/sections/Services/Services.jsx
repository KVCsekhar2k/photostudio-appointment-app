import { Link } from "react-router-dom";
import "./services.css";

const pricingData = [
  {
    title: "Wedding Photography",
    price: "₹45,000",
    duration: "Full Day",
    features: [
      "Candid & Traditional Coverage",
      "300+ Edited Photos",
      "Premium Album Included",
      "Drone Shots (Optional)",
    ],
  },
  {
    title: "Pre-Wedding Shoot",
    price: "₹15,000",
    duration: "4 Hours",
    features: [
      "Outdoor / Studio Shoot",
      "100+ Edited Photos",
      "Creative Poses",
      "Location Assistance",
    ],
  },
  {
    title: "Portrait Photography",
    price: "₹5,000",
    duration: "1–2 Hours",
    features: [
      "Professional Lighting",
      "10–15 Edited Photos",
      "Studio Setup",
      "Instant Preview",
    ],
  },
  {
    title: "Event Coverage",
    price: "₹10,000",
    duration: "Half Day",
    features: [
      "Birthday / Engagement / Events",
      "Candid Moments",
      "Quick Delivery",
      "High-Quality Editing",
    ],
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-wrapper">

        <div className="services-header">
          <h2>Pricing Plans</h2>
          <p>
            Choose a photography package that best fits your
            occasion and budget.
          </p>
        </div>

        <div className="services-grid">
          {pricingData.map((plan, index) => (
            <div className="service-card pricing-card" key={index}>

              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <p className="duration">{plan.duration}</p>

              <ul className="features">
                {plan.features.map((feature, i) => (
                  <li key={i}> {feature}</li>
                ))}
              </ul>

              <a href="/book" >
                <Link to="/book" className="price-btn">Book Now</Link>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
