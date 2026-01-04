import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-wrapper">

        {/* Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            alt="Photographer"
          />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I’m a professional photographer passionate about capturing
            real emotions, candid moments, and timeless memories.
            With a keen eye for detail and creativity, I ensure every
            frame tells a story.
          </p>

          <p>
            From weddings and portraits to outdoor and nature photography,
            my goal is to deliver images that you’ll cherish forever.
          </p>

          {/* Highlights */}
          <div className="about-stats">
            <div>
              <h3> 5+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3> 300+</h3>
              <span>Photo Shoots</span>
            </div>
            <div>
              <h3> 200+</h3>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
