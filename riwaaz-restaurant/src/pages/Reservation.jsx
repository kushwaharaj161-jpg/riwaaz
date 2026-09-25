import { useState } from "react";


const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    occasion: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="reservation-page">

      {/* ================= HERO ================= */}

      <section className="reservation-hero">
        <div className="reservation-hero-decoration"></div>

        <div className="reservation-hero-content">
          <p className="reservation-eyebrow">
            YOUR EVENING AWAITS
          </p>

          <h1>
            Reserve Your
            <span>Table</span>
          </h1>

          <div className="reservation-hero-divider"></div>

          <p>
            Join us for an unforgettable dining experience
            filled with authentic flavours and warm hospitality.
          </p>
        </div>
      </section>


      {/* ================= RESERVATION SECTION ================= */}

      <section className="reservation-section">
        <div className="reservation-container">

          {/* LEFT CONTENT */}

          <div className="reservation-info">

            <p className="section-eyebrow">
              THE RIWAAZ EXPERIENCE
            </p>

            <h2>
              Make It
              <span>Memorable</span>
            </h2>

            <div className="reservation-divider"></div>

            <p className="reservation-description">
              Whether it is an intimate dinner, a family
              celebration or a special evening with someone
              you love, we would be delighted to welcome you
              to Riwaaz.
            </p>

            <div className="reservation-details">

              <div className="reservation-detail">
                <div className="detail-icon">✦</div>

                <div>
                  <h3>Opening Hours</h3>
                  <p>
                    Monday – Friday
                    <br />
                    9:00 AM – 11:00 PM
                  </p>
                  <p>
                    Saturday – Sunday
                    <br />
                    11:00 AM – 11:30 PM
                  </p>
                </div>
              </div>


              <div className="reservation-detail">
                <div className="detail-icon">✦</div>

                <div>
                  <h3>Find Us</h3>
                  <p>
                    Chhalera,
                    <br />
                    New Delhi, India
                  </p>
                </div>
              </div>


              <div className="reservation-detail">
                <div className="detail-icon">✦</div>

                <div>
                  <h3>Call Us</h3>
                  <p>
                    +91 6306191568
                    <br />
                    hello@riwaazrestaurant.com
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* RIGHT FORM */}

          <div className="reservation-form-wrapper">

            {submitted ? (
              <div className="reservation-success">

                <div className="success-icon">✓</div>

                <p>RESERVATION REQUEST</p>

                <h3>
                  Thank You
                  <span>for Choosing Riwaaz</span>
                </h3>

                <div className="success-line"></div>

                <p className="success-text">
                  Your reservation request has been received.
                  Our team will contact you shortly to confirm
                  your table.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="success-button"
                >
                  Make Another Reservation
                </button>

              </div>
            ) : (
              <form
                className="reservation-form"
                onSubmit={handleSubmit}
              >

                <div className="form-heading">
                  <p>BOOK YOUR TABLE</p>

                  <h3>
                    Reservation
                    <span>Details</span>
                  </h3>
                </div>


                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="guests">
                      Number of Guests
                    </label>

                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8 Guests</option>
                      <option value="9">9 Guests</option>
                      <option value="10">10 Guests</option>
                    </select>
                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="date">
                      Date
                    </label>

                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="time">
                      Preferred Time
                    </label>

                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select time
                      </option>
                      <option value="12:00 PM">
                        12:00 PM
                      </option>
                      <option value="1:00 PM">
                        1:00 PM
                      </option>
                      <option value="2:00 PM">
                        2:00 PM
                      </option>
                      <option value="7:00 PM">
                        7:00 PM
                      </option>
                      <option value="8:00 PM">
                        8:00 PM
                      </option>
                      <option value="9:00 PM">
                        9:00 PM
                      </option>
                      <option value="10:00 PM">
                        10:00 PM
                      </option>
                    </select>
                  </div>

                </div>


                <div className="form-group">

                  <label htmlFor="occasion">
                    Occasion
                  </label>

                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select occasion
                    </option>

                    <option value="Dinner">
                      Dinner
                    </option>

                    <option value="Birthday">
                      Birthday
                    </option>

                    <option value="Anniversary">
                      Anniversary
                    </option>

                    <option value="Family Celebration">
                      Family Celebration
                    </option>

                    <option value="Business Dinner">
                      Business Dinner
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>

                </div>


                <div className="form-group">

                  <label htmlFor="message">
                    Special Requests
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Any special requests or dietary requirements?"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="reservation-submit"
                >
                  <span>Confirm Reservation</span>
                  <span>↗</span>
                </button>


                <p className="reservation-note">
                  ✦ &nbsp; Your reservation is subject to
                  availability. Our team will contact you
                  for confirmation.
                </p>

              </form>
            )}

          </div>

        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}

      <section className="reservation-bottom">

        <div className="reservation-bottom-content">

          <span>✦</span>

          <p>
            Looking for something special?
          </p>

          <h2>
            Celebrate Your
            <em>Moments</em> With Us
          </h2>

          <span>✦</span>

        </div>

      </section>

    </div>
  );
};

export default Reservation;