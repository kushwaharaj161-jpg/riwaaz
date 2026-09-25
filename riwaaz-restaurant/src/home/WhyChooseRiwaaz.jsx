

const WhyChooseRiwaaz = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* Left Content */}
        <ScrollReveal className="why-content">

          <p className="why-eyebrow">
            WHY CHOOSE RIWAAZ
          </p>

          <h2>
            More Than
            <span> Just a Meal</span>
          </h2>

          <div className="why-decoration">
            <span></span>
            <b>✦</b>
            <span></span>
          </div>

          <p className="why-description">
            At RIWAAZ, every meal is an experience rooted in
            tradition. From the first aroma that reaches your table
            to the final unforgettable bite, we believe every detail
            matters.
          </p>

          <p className="why-description">
            Our chefs combine age-old recipes with refined culinary
            techniques to bring the soul of Indian cuisine to life.
          </p>

        </ScrollReveal>


        {/* Right Side */}
        <ScrollReveal className="why-right" delay={0.12}>

          <div className="why-stats">

            <div className="why-stat">
              <strong>25+</strong>
              <span>Years of Tradition</span>
            </div>

            <div className="why-stat">
              <strong>50+</strong>
              <span>Signature Dishes</span>
            </div>

            <div className="why-stat">
              <strong>10K+</strong>
              <span>Happy Guests</span>
            </div>

            <div className="why-stat">
              <strong>100%</strong>
              <span>Authentic Flavours</span>
            </div>

          </div>

          <div className="why-quote">
            <span className="quote-mark">“</span>

            <p>
              Every dish carries a story. Every flavour carries
              a tradition.
            </p>

            <small>
              — THE RIWAAZ PHILOSOPHY
            </small>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};

export default WhyChooseRiwaaz;
import ScrollReveal from "../component/common/ScrollReveal";
