import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

const Confirmation = () => {
  return (
    <>
      <Navbar />

      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>
          🎉 Booking Request Submitted
        </h1>

        <p style={{ fontSize: "16px", color: "#555", marginBottom: "30px" }}>
          Thank you for booking with us. We will contact you shortly to confirm
          your appointment.
        </p>

        <a
          href="/"
          style={{
            padding: "14px 28px",
            background: "#111",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
          }}
        >
          Back to Home
        </a>
      </section>

      <Footer />
    </>
  );
};

export default Confirmation;
