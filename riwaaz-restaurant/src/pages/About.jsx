

import storyImage from "../assets/images/gallery3.jpg";
import heroImage from "../assets/images/hero-img.jpg";

const About = () => {
  return (
    <div className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <p className="about-eyebrow">THE STORY OF RIWAAZ</p>

          <h1>
            Our
            <span>Story</span>
          </h1>

          <div className="about-hero-divider"></div>

          <p>
            A journey of authentic flavours, timeless traditions
            and unforgettable dining experiences.
          </p>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="about-intro">
        <div className="about-container">

          <div className="about-intro-image">
            <div className="about-image-frame"></div>

            <img
              src={storyImage}
              alt="Traditional Indian cuisine at Riwaaz"
            />

            <div className="about-est">
              <span>EST.</span>
              <strong>1998</strong>
              <small>NEW DELHI</small>
            </div>
          </div>


          <div className="about-intro-content">
            <p className="section-eyebrow">A LEGACY OF FLAVOUR</p>

            <h2>
              Where Every Dish
              <span>Tells a Story</span>
            </h2>

            <div className="about-divider"></div>

            <p>
              Riwaaz was born from a simple belief — that food is
              more than just a meal. It is a memory, a celebration
              and a connection to the traditions that bring us
              together.
            </p>

            <p>
              Our kitchen brings together recipes passed down
              through generations, carefully selected ingredients
              and the timeless techniques of Indian cooking.
              Every plate is thoughtfully crafted to preserve
              the soul of our culinary heritage.
            </p>

            <div className="about-signature">
              <span>THE TASTE OF TRADITION</span>
              <strong>RIWAAZ</strong>
            </div>
          </div>

        </div>
      </section>


      {/* ================= PHILOSOPHY ================= */}
      <section className="about-philosophy">
        <div className="about-philosophy-overlay"></div>

        <div className="philosophy-content">
          <p className="about-eyebrow">OUR PHILOSOPHY</p>

          <h2>
            Tradition on the Plate.
            <span>Passion in Every Bite.</span>
          </h2>

          <div className="philosophy-divider"></div>

          <p>
            We believe great food begins with respect — respect
            for ingredients, recipes, craftsmanship and the people
            who have kept these traditions alive.
          </p>
        </div>
      </section>


      {/* ================= VALUES ================= */}
      <section className="about-values">
        <div className="about-container">

          <div className="values-heading">
            <p className="section-eyebrow">WHAT DEFINES US</p>

            <h2>
              The Riwaaz
              <span>Promise</span>
            </h2>

            <p>
              From the first ingredient to the final presentation,
              every detail is guided by our commitment to authentic
              Indian hospitality.
            </p>
          </div>


          <div className="values-grid">

            <div className="value-card">
              <span className="value-number">01</span>
              <div className="value-icon">✦</div>
              <h3>Authenticity</h3>
              <p>
                Traditional recipes and time-honoured cooking
                techniques stay at the heart of everything we serve.
              </p>
            </div>


            <div className="value-card featured">
              <span className="value-number">02</span>
              <div className="value-icon">✦</div>
              <h3>Fine Ingredients</h3>
              <p>
                We carefully select fresh ingredients and aromatic
                spices to create flavours that are truly memorable.
              </p>
            </div>


            <div className="value-card">
              <span className="value-number">03</span>
              <div className="value-icon">✦</div>
              <h3>Warm Hospitality</h3>
              <p>
                Every guest is welcomed with warmth, attention
                and the gracious spirit of Indian hospitality.
              </p>
            </div>


            <div className="value-card">
              <span className="value-number">04</span>
              <div className="value-icon">✦</div>
              <h3>Craftsmanship</h3>
              <p>
                Our chefs bring patience, precision and passion
                to every dish that leaves our kitchen.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="about-experience">

        <div className="experience-image">
          <img
            src={heroImage}
            alt="Riwaaz dining experience"
          />
        </div>

        <div className="experience-content">
          <p className="section-eyebrow">THE RIWAAZ EXPERIENCE</p>

          <h2>
            More Than
            <span>Fine Dining</span>
          </h2>

          <div className="about-divider"></div>

          <p>
            Step into Riwaaz and discover an experience inspired
            by India's rich culture, royal kitchens and vibrant
            culinary traditions.
          </p>

          <p>
            From intimate dinners to grand celebrations, our space
            is designed to make every occasion feel special.
          </p>

          <div className="experience-stats">
            <div>
              <strong>25+</strong>
              <span>Years of Tradition</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Signature Dishes</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Happy Guests</span>
            </div>
          </div>
        </div>

      </section>


      {/* ================= QUOTE ================= */}
      <section className="about-quote">
        <div className="quote-inner">

          <span className="quote-mark">“</span>

          <p>
            Food brings people together,
            <br />
            tradition keeps them connected.
          </p>

          <div className="quote-line"></div>

          <span className="quote-brand">
            THE RIWAAZ PHILOSOPHY
          </span>

        </div>
      </section>

    </div>
  );
};

export default About;