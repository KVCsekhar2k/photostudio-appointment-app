import "./datePicker.css";

const DatePicker = ({ value, onChange, error }) => {
  // Today date (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="date-picker">
      <label>Select Date *</label>

      <input
        type="date"
        value={value}
        min={today}
        onChange={(e) => onChange(e.target.value)}
      />

      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default DatePicker;
