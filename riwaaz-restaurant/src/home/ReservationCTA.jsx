import { Link } from "react-router-dom";
import ScrollReveal from "../component/common/ScrollReveal";


const ReservationCTA = () => {
  return (
    <section className="reservation-cta">
      <div className="reservation-pattern"></div>

      <ScrollReveal className="reservation-content">

        <p className="reservation-eyebrow">
          EXPERIENCE RIWAAZ
        </p>

        <h2>
          Your Table
          <span>Awaits</span>
        </h2>

        <div className="reservation-divider"></div>

        <p className="reservation-text">
          Come together over authentic flavours, warm hospitality and
          timeless Indian traditions. Make your next dining experience
          truly memorable at Riwaaz.
        </p>

        <div className="reservation-buttons">

          <Link
            to="/reservation"
            className="reservation-primary-btn"
          >
            <span>Book Your Table</span>
            <span>↗</span>
          </Link>

          <Link
            to="/contact"
            className="reservation-secondary-btn"
          >
            Contact Us
          </Link>

        </div>

        <div className="reservation-details">

          <div className="reservation-detail">
            <span className="detail-icon">✦</span>
            <div>
              <strong>Open Daily</strong>
              <small>12:00 PM – 11:00 PM</small>
            </div>
          </div>

          <div className="reservation-detail-line"></div>

          <div className="reservation-detail">
            <span className="detail-icon">✦</span>
            <div>
              <strong>Fine Dining</strong>
              <small>Authentic Indian Cuisine</small>
            </div>
          </div>

        </div>

      </ScrollReveal>
    </section>
  );
};

export default ReservationCTA;
