

const reviews = [
  {
    rating: "★★★★★",
    review:
      "Absolutely wonderful experience. The flavours were authentic, beautifully balanced and reminded us of traditional home cooking.",
    name: "Ananya Sharma",
    role: "Verified Guest",
  },
  {
    rating: "★★★★★",
    review:
      "RIWAAZ is more than just a restaurant. The food, ambience and hospitality together make it a truly memorable experience.",
    name: "Rahul Mehta",
    role: "Verified Guest",
  },
  {
    rating: "★★★★★",
    review:
      "The perfect place for a special dinner. Every dish was beautifully prepared and full of rich, authentic Indian flavours.",
    name: "Priya Kapoor",
    role: "Verified Guest",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">

      <div className="testimonials-container">

        {/* Heading */}
        <ScrollReveal className="testimonials-heading">

          <p className="testimonials-eyebrow">
            GUEST EXPERIENCES
          </p>

          <h2>
            Loved by
            <span> Our Guests</span>
          </h2>

          <div className="testimonials-decoration">
            <span></span>
            <b>✦</b>
            <span></span>
          </div>

          <p className="testimonials-intro">
            The greatest compliment is when our guests leave with
            a beautiful memory and return for another.
          </p>

        </ScrollReveal>


        {/* Reviews */}
        <div className="reviews-grid">

          {reviews.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.1}>
              <article
                className={`review-card ${
                  index === 1 ? "review-featured" : ""
                }`}
              >

              <div className="review-quote">
                “
              </div>

              <div className="review-rating">
                {item.rating}
              </div>

              <p className="review-text">
                {item.review}
              </p>

              <div className="review-divider"></div>

              <div className="review-author">
                <div className="author-circle">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
              </div>

              </article>
            </ScrollReveal>
          ))}

        </div>


        {/* Bottom Rating */}
        <ScrollReveal className="overall-rating">

          <strong>4.9</strong>

          <div>
            <div className="overall-stars">
              ★★★★★
            </div>

            <p>
              Average Guest Rating
            </p>
          </div>

        </ScrollReveal>

      </div>

    </section>
  );
};

export default Testimonials;
import ScrollReveal from "../component/common/ScrollReveal";
