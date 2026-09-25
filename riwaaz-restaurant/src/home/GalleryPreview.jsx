import { Link } from "react-router-dom";
import ScrollReveal from "../component/common/ScrollReveal";


import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";

const GalleryPreview = () => {
  return (
    <section className="gallery-preview-section">

      <div className="gallery-preview-container">

        {/* =========================
            HEADING
        ========================= */}

        <ScrollReveal className="gallery-preview-heading">

          <div>
            <p className="gallery-eyebrow">
              A GLIMPSE OF RIWAAZ
            </p>

            <h2>
              Moments Worth
              <span> Savouring</span>
            </h2>
          </div>

          <Link to="/gallery" className="gallery-view-btn">
            View Gallery
            <span>↗</span>
          </Link>

        </ScrollReveal>


        {/* =========================
            GALLERY GRID
        ========================= */}

        <div className="gallery-grid">

          {/* Large Image */}
          <div className="gallery-item gallery-large">

            <img
              src={gallery1}
              alt="Riwaaz restaurant dining"
            />

            <div className="gallery-overlay">
              <span>01</span>
              <p>THE RIWAAZ EXPERIENCE</p>
            </div>

          </div>


          {/* Top Right */}
          <div className="gallery-item gallery-top">

            <img
              src={gallery2}
              alt="Traditional Indian cuisine"
            />

            <div className="gallery-overlay">
              <span>02</span>
              <p>AUTHENTIC FLAVOURS</p>
            </div>

          </div>


          {/* Bottom Right */}
          <div className="gallery-item gallery-bottom">

            <img
              src={gallery3}
              alt="Elegant restaurant ambience"
            />

            <div className="gallery-overlay">
              <span>03</span>
              <p>ROYAL AMBIENCE</p>
            </div>

          </div>


          {/* Small Fourth Image */}
          <div className="gallery-item gallery-small">

            <img
              src={gallery4}
              alt="Indian dining experience"
            />

            <div className="gallery-overlay">
              <span>04</span>
              <p>CRAFTED WITH LOVE</p>
            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM TEXT
        ========================= */}

        <ScrollReveal className="gallery-bottom">

          <span className="gallery-line"></span>

          <p>
            Every corner tells a story. Every plate creates a memory.
          </p>

          <span className="gallery-line"></span>

        </ScrollReveal>

      </div>

    </section>
  );
};

export default GalleryPreview;
