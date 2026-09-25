import { Link } from "react-router-dom";


import logo from "../../assets/logo/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ================= MAIN FOOTER ================= */}
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <img
              src={logo}
              alt="Riwaaz Restaurant"
            />
          </Link>

          <p className="footer-tagline">
            THE TASTE OF TRADITION
          </p>

          <p className="footer-description">
            Where authentic Indian flavours meet timeless traditions,
            warm hospitality and the art of fine dining.
          </p>

          {/* Social */}
          <div className="footer-socials">

            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            <a href="https://youtu.be/77H4AhryK30?si=ZfDSx4Qorj5kM2_3" aria-label="YouTube">
              YouTube
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Explore</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/menu">Our Menu</Link>
            </li>

            <li>
              <Link to="/about">Our Story</Link>
            </li>

            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

            <li>
              <Link to="/reservation">Reservation</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

        </div>


        {/* Opening Hours */}
        <div className="footer-column">

          <h3>Opening Hours</h3>

          <div className="footer-hours">

            <div>
              <span>Monday – Friday</span>
              <strong>12:00 PM – 11:00 PM</strong>
            </div>

            <div>
              <span>Saturday – Sunday</span>
              <strong>11:00 AM – 11:30 PM</strong>
            </div>

          </div>

        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>Visit Us</h3>

          <p>
            24 Royal Avenue,
            <br />
            New Delhi, India
          </p>

          <a href="tel:+911234567890">
            +91 12345 67890
          </a>

          <a href="mailto:hello@riwaazrestaurant.com">
            hello@riwaazrestaurant.com
          </a>

        </div>

      </div>


      {/* ================= GOLD LINE ================= */}
      <div className="footer-line"></div>


      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">

        <p>
          © 2026 Riwaaz Restaurant. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <p className="footer-made">
          Crafted with <span>✦</span> for the love of food
        </p>

      </div>

    </footer>
  );
};

export default Footer;