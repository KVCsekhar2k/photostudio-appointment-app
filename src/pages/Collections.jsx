import { useState } from "react";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import "../styles/collections.css";

const galleryData = [
  {
    id: 1,
    category: "indoor",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    id: 2,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 3,
    category: "portraits",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
  },
  {
    id: 4,
    category: "nature",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 5,
    category: "indoor",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    id: 6,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1520975922203-bc8e3d4f6eaf",
  },
];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      <Navbar />
      <section className="collections-page">
        <div className="collections-wrapper">

          {/* Header */}
          <div className="collections-header">
            <h1>My Collections</h1>
            <p>Explore moments captured across different styles and settings.</p>
          </div>

          {/* Filter Bar */}
          <div className="collections-filter">
            {["all", "indoor", "outdoor", "portraits", "nature"].map(
              (cat) => (
                <button
                  key={cat}
                  className={activeCategory === cat ? "active" : ""}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Gallery Grid */}
          <div className="collections-grid">
            {filteredImages.map((item) => (
              <div className="collection-card" key={item.id}>
                <img src={item.image} alt={item.category} />
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Collections;
