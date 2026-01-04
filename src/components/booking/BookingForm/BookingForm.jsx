import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bookingForm.css";
import { submitBooking } from "../../../services/googleSheetsService";
import DatePicker from "../DatePicker/DatePicker";


const BookingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const services = [
    "Wedding Photography",
    "Pre-Wedding Shoot",
    "Portrait Photography",
    "Event Coverage",
  ];

  const timeSlots = [
    "09:00 AM",
    "11:00 AM",
    "01:00 PM",
    "03:00 PM",
    "05:00 PM",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    if (!formData.time) {
      newErrors.time = "Please select a time slot";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  // Stop if validation fails
  if (Object.keys(validationErrors).length !== 0) {
    return;
  }

  try {
    // Submit booking to Google Sheets
    await submitBooking(formData);

    // Reset form (optional but clean)
    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });

    // Redirect to confirmation page
    navigate("/confirmation");


  } catch (error) {
    console.error("Booking submission failed:", error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <form className="booking-form" onSubmit={handleSubmit}>

      {/* Name */}
      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      {/* Phone */}
      <div className="form-group">
        <label>Phone Number *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number"
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      {/* Service */}
      <div className="form-group">
        <label>Select Service *</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">-- Select Service --</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && <span className="error">{errors.service}</span>}
      </div>

      {/* Date */}
      <DatePicker
  value={formData.date}
  onChange={(date) =>
    setFormData({ ...formData, date })
  }
  error={errors.date}
/>


      {/* Time */}
      <div className="form-group">
        <label>Time Slot *</label>
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
        >
          <option value="">-- Select Time --</option>
          {timeSlots.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && <span className="error">{errors.time}</span>}
      </div>

      {/* Notes */}
      <div className="form-group">
        <label>Additional Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Event location, special requests..."
          rows="4"
        ></textarea>
      </div>

      {/* Submit */}
      <button type="submit" className="submit-btn">
        Submit Booking
      </button>

    </form>
  );
};

export default BookingForm;
