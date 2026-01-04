const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export const submitBooking = async (bookingData) => {
  const response = await fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(bookingData),
  });

  return response.json();
};
