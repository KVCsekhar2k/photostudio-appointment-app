import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import BookAppointment from "./pages/BookAppointment";
import Contact from "./pages/Contact";
import Confirmation from "./pages/Confirmation";
import Collections from "./pages/Collections";





function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/book" element={<BookAppointment />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default App;
