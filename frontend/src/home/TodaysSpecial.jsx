import { Link } from "react-router-dom";
import ScrollReveal from "../component/common/ScrollReveal";


import thaliImage from "../assets/images/thali-image.jpg";

const TodaysSpecial = () => {
  return (
    <section className="todays-special">

      {/* Decorative background */}
      <div className="special-circle special-circle-one"></div>
      <div className="special-circle special-circle-two"></div>

      <div className="special-container">

        {/* ================= LEFT CONTENT ================= */}
        <ScrollReveal className="special-content">

          <p className="special-eyebrow">
            CHEF'S SPECIAL
          </p>

          <h2>
            A Taste Worth
            <span>Remembering</span>
          </h2>

          <div className="special-divider"></div>

          <p className="special-intro">
            Discover today's special, thoughtfully prepared by our chefs
            using traditional recipes, finest ingredients and the timeless
            flavours of India.
          </p>

          {/* Dish */}
          <div className="special-dish">

            <div className="special-dish-heading">
              <h3>Riwaaz Royal Thali</h3>

              <span className="special-price">
                ₹699
              </span>
            </div>

            <p>
              A royal spread of authentic Indian delicacies, fragrant rice,
              seasonal vegetables, freshly baked breads and our signature
              dessert.
            </p>

          </div>

          {/* Limited Time */}
          <div className="special-meta">
            <span className="meta-icon">✦</span>

            <span>
              Available for a limited time
            </span>
          </div>

          {/* CTA */}
          <Link
            to="/reservation"
            className="special-btn"
          >
            <span>Reserve Your Table</span>
            <span className="special-arrow">↗</span>
          </Link>

        </ScrollReveal>


        {/* ================= RIGHT IMAGE ================= */}
        <div className="special-visual">

          {/* Gold corner decoration */}
          <div className="image-frame"></div>

          <div className="special-image-wrapper">

            <img
              src={thaliImage}
              alt="Riwaaz Royal Thali"
            />

            <div className="special-image-overlay"></div>

            {/* Badge */}
            <div className="special-badge">

              <span>RIWAAZ</span>

              <strong>ROYAL</strong>

              <small>THALI</small>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TodaysSpecial;
