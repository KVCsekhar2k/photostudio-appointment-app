import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import BookingForm from "../components/booking/BookingForm/BookingForm";

import "../styles/booking.css";

const BookAppointment = () => {
  return (
    <>
      <Navbar />

      <section className="booking-page">
        <div className="booking-wrapper">

          {/* Page Header */}
          <div className="booking-header">
            <h1>Book an Appointment</h1>
            <p>
              Fill in the details below and we’ll get back to you
              to confirm your booking.
            </p>
          </div>

          {/* Booking Form */}
          <div className="booking-form-container">
            <BookingForm />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default BookAppointment;
