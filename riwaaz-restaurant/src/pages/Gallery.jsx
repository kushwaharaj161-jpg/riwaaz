import { useState } from "react";


import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import heroImage from "../assets/images/hero-img.jpg";
import storyImage from "../assets/images/thali-image.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Food",
    "Ambience",
    "Kitchen",
    "Moments",
  ];

  const galleryItems = [
    {
      image: gallery1,
      category: "Ambience",
      title: "The Riwaaz Dining Room",
    },
    {
      image: gallery2,
      category: "Food",
      title: "A Feast of Tradition",
    },
    {
      image: gallery3,
      category: "Moments",
      title: "Moments at Riwaaz",
    },
    {
      image: gallery4,
      category: "Kitchen",
      title: "Crafted in Our Kitchen",
    },
    {
      image: heroImage,
      category: "Food",
      title: "Flavours of India",
    },
    {
      image: storyImage,
      category: "Moments",
      title: "Made with Tradition",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="gallery-page">

      {/* ================= HERO ================= */}

      <section className="gallery-hero">
        <div className="gallery-hero-decoration"></div>

        <div className="gallery-hero-content">
          <p className="gallery-eyebrow">
            A GLIMPSE OF RIWAAZ
          </p>

          <h1>
            Our
            <span>Gallery</span>
          </h1>

          <div className="gallery-hero-divider"></div>

          <p>
            Take a glimpse into the flavours, people and
            moments that make Riwaaz special.
          </p>
        </div>
      </section>


      {/* ================= GALLERY ================= */}

      <section className="gallery-section">
        <div className="gallery-container">

          <div className="gallery-heading">
            <div>
              <p className="section-eyebrow">
                MOMENTS WORTH SAVOURING
              </p>

              <h2>
                See the
                <span>Riwaaz Experience</span>
              </h2>
            </div>

            <p>
              From beautifully plated dishes to warm interiors,
              every corner of Riwaaz reflects our love for
              tradition and hospitality.
            </p>
          </div>


          {/* CATEGORY FILTER */}

          <div className="gallery-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "gallery-category active"
                    : "gallery-category"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>


          {/* GALLERY GRID */}

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div
                className={`gallery-item gallery-item-${index + 1}`}
                key={`${item.title}-${index}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-item-overlay">
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>

                  <span className="gallery-arrow">↗</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= QUOTE ================= */}

      <section className="gallery-quote">
        <div className="gallery-quote-inner">

          <span className="gallery-quote-symbol">✦</span>

          <h2>
            Every plate has a story.
            <span>Every moment becomes a memory.</span>
          </h2>

          <div className="gallery-quote-line"></div>

          <p>THE RIWAAZ EXPERIENCE</p>

        </div>
      </section>


      {/* ================= CTA ================= */}

      <section className="gallery-cta">
        <div className="gallery-cta-content">

          <p className="section-eyebrow">
            COME EXPERIENCE IT
          </p>

          <h2>
            Your Table
            <span>Awaits</span>
          </h2>

          <p>
            Come discover authentic flavours, warm hospitality
            and unforgettable moments at Riwaaz.
          </p>

          <a
            href="/reservation"
            className="gallery-cta-button"
          >
            <span>Reserve Your Table</span>
            <span>↗</span>
          </a>

        </div>
      </section>

    </div>
  );
};

export default Gallery;