import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-eyebrow">WE'D LOVE TO HEAR FROM YOU</p>

          <h1>
            Get in
            <span>Touch</span>
          </h1>

          <div className="contact-hero-divider"></div>

          <p>
            Questions, celebrations or simply want to say hello?
            Our team is always happy to hear from you.
          </p>
        </div>
      </section>


      {/* ================= CONTACT CONTENT ================= */}

      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT */}

          <div className="contact-info">

            <p className="section-eyebrow">
              CONTACT RIWAAZ
            </p>

            <h2>
              Let's Start a
              <span>Conversation</span>
            </h2>

            <div className="contact-divider"></div>

            <p className="contact-intro">
              Whether you have a question about our menu,
              want to plan a special celebration or need help
              with your reservation, we are here for you.
            </p>


            <div className="contact-details">

              <div className="contact-detail">
                <div className="contact-icon">✦</div>

                <div>
                  <span>VISIT US</span>
                  <h3>Riwaaz</h3>
                  <p>
                    Chhalera,
                    <br />
                    New Delhi, India
                  </p>
                </div>
              </div>


              <div className="contact-detail">
                <div className="contact-icon">✦</div>

                <div>
                  <span>CALL US</span>
                  <h3>+91 6306191568</h3>
                  <p>
                    Monday – Sunday
                    <br />
                    9:00 AM – 11:00 PM
                  </p>
                </div>
              </div>


              <div className="contact-detail">
                <div className="contact-icon">✦</div>

                <div>
                  <span>EMAIL US</span>
                  <h3>hello@riwaazrestaurant.com</h3>
                  <p>
                    We usually respond within 24 hours.
                  </p>
                </div>
              </div>

            </div>


            <div className="contact-social">
              <span>FOLLOW RIWAAZ</span>

              <div>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">YouTube</a>
              </div>
            </div>

          </div>


          {/* RIGHT FORM */}

          <div className="contact-form-wrapper">

            {sent ? (
              <div className="contact-success">

                <div className="contact-success-icon">
                  ✓
                </div>

                <p>MESSAGE RECEIVED</p>

                <h3>
                  Thank You
                  <span>for Reaching Out</span>
                </h3>

                <div className="contact-success-line"></div>

                <p className="contact-success-text">
                  Your message has been sent successfully.
                  Our team will get back to you as soon as
                  possible.
                </p>

                <button
                  onClick={() => setSent(false)}
                >
                  Send Another Message
                </button>

              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-heading">
                  <p>SEND US A MESSAGE</p>

                  <h3>
                    How Can We
                    <span>Help?</span>
                  </h3>
                </div>


                <div className="contact-form-group">
                  <label htmlFor="contact-name">
                    Full Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="contact-form-group">
                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="contact-form-group">
                  <label htmlFor="contact-subject">
                    Subject
                  </label>

                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a subject
                    </option>

                    <option value="General Enquiry">
                      General Enquiry
                    </option>

                    <option value="Reservation">
                      Reservation
                    </option>

                    <option value="Private Dining">
                      Private Dining
                    </option>

                    <option value="Celebration">
                      Celebration
                    </option>

                    <option value="Feedback">
                      Feedback
                    </option>
                  </select>
                </div>


                <div className="contact-form-group">
                  <label htmlFor="contact-message">
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>


                <button
                  type="submit"
                  className="contact-submit"
                >
                  <span>Send Message</span>
                  <span>↗</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </section>


      {/* ================= MAP / LOCATION ================= */}

      <section className="contact-location">

        <div className="location-content">

          <p className="section-eyebrow">
            FIND YOUR WAY TO RIWAAZ
          </p>

          <h2>
            Come Visit
            <span>Us</span>
          </h2>

          <div className="location-divider"></div>

          <p>
            24 Royal Avenue, New Delhi, India
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="location-button"
          >
            <span>Open in Google Maps</span>
            <span>↗</span>
          </a>

        </div>

        <div className="location-pattern">
          <span>RIWAAZ</span>
          <strong>THE TASTE OF TRADITION</strong>
        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}

      <section className="contact-bottom">

        <p>ONE TABLE. MANY MEMORIES.</p>

        <h2>
          We Look Forward
          <span>to Welcoming You.</span>
        </h2>

        <div className="contact-bottom-line"></div>

        <span>✦ RIWAAZ ✦</span>

      </section>

    </div>
  );
};

export default Contact;