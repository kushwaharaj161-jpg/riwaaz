import { Link } from "react-router-dom";
import ScrollReveal from "../component/common/ScrollReveal";


import storyImage from "../assets/images/hero-img.jpg";

const OurStory = () => {
  return (
    <section className="story-section">

      <div className="story-container">

        {/* Image */}
        <div className="story-image-wrapper">
          <img
            src={storyImage}
            alt="Traditional Indian food at Riwaaz"
            className="story-image"
          />

          <div className="story-image-caption">
            <span>EST.</span>
            <strong>1998</strong>
          </div>
        </div>

        {/* Content */}
        <ScrollReveal className="story-content">

          <p className="story-eyebrow">
            OUR STORY
          </p>

          <h2>
            A Legacy of
            <span> Authentic Flavours</span>
          </h2>

          <p className="story-description">
            At RIWAAZ, food is more than a meal — it is a celebration
            of India's rich culture, heritage and timeless traditions.
          </p>

          <p className="story-description">
            Inspired by generations of cherished family recipes, our
            kitchen brings together authentic spices, traditional
            cooking techniques and the finest ingredients to create
            flavours that feel both familiar and unforgettable.
          </p>

          <div className="story-divider"></div>

          <div className="story-signature">
            <span>THE TASTE OF TRADITION</span>
          </div>

          <Link to="/about" className="story-btn">
            Discover Our Story
            <span>↗</span>
          </Link>

        </ScrollReveal>

      </div>

    </section>
  );
};

export default OurStory;
