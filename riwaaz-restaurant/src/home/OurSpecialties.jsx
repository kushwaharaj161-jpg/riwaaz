

const specialties = [
  {
    number: "01",
    icon: "✦",
    title: "Traditional Recipes",
    text: "Authentic recipes passed down through generations, preserving the true taste of Indian cuisine.",
  },
  {
    number: "02",
    icon: "♨",
    title: "Slow Cooked",
    text: "Our signature dishes are patiently cooked to bring out deeper flavours and rich aromas.",
  },
  {
    number: "03",
    icon: "✽",
    title: "Finest Spices",
    text: "A carefully selected blend of aromatic Indian spices creates the soul of every dish.",
    featured: true,
  },
  {
    number: "04",
    icon: "◇",
    title: "Royal Experience",
    text: "From our kitchen to your table, every detail is designed for an unforgettable dining experience.",
  },
];

const promises = [
  {
    icon: "✦",
    title: "Authentic",
    text: "True Indian flavours",
  },
  {
    icon: "❋",
    title: "Fresh",
    text: "Finest ingredients",
  },
  {
    icon: "♨",
    title: "Traditional",
    text: "Timeless techniques",
  },
  {
    icon: "◇",
    title: "Crafted",
    text: "Made with passion",
  },
];

const OurSpecialties = () => {
  return (
    <section className="specialties-section">

      <div className="specialties-container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <ScrollReveal className="specialties-heading">

          <p className="specialties-eyebrow">
            THE RIWAAZ DIFFERENCE
          </p>

          <h2>
            Crafted with
            <span> Tradition</span>
          </h2>

          <div className="specialties-decoration">
            <span></span>
            <b>✦</b>
            <span></span>
          </div>

          <p className="specialties-intro">
            We bring together time-honoured techniques, authentic
            ingredients and a passion for Indian cuisine.
          </p>

        </ScrollReveal>


        {/* =========================
            SPECIALTY CARDS
        ========================= */}

        <div className="specialties-grid">

          {specialties.map((item) => (
            <article
              className={`specialty-card ${
                item.featured ? "featured-card" : ""
              }`}
              key={item.number}
            >

              {/* Top */}
              <div className="specialty-top">

                <span className="specialty-number">
                  {item.number}
                </span>

                <div className="specialty-icon">
                  {item.icon}
                </div>

              </div>


              {/* Content */}
              <ScrollReveal className="specialty-content" delay={Number(item.number) * 0.08}>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </ScrollReveal>


              {/* Bottom Line */}
              <div className="specialty-line"></div>

            </article>
          ))}

        </div>


        {/* =========================
            RIWAAZ PROMISE
        ========================= */}

        <ScrollReveal className="promise-section">

          <div className="promise-heading">
            <span></span>

            <p>THE RIWAAZ PROMISE</p>

            <span></span>
          </div>


          <div className="promise-grid">

            {promises.map((promise) => (
              <div className="promise-item" key={promise.title}>

                <div className="promise-icon">
                  {promise.icon}
                </div>

                <div>
                  <h4>{promise.title}</h4>

                  <p>{promise.text}</p>
                </div>

              </div>
            ))}

          </div>

        </ScrollReveal>

      </div>

    </section>
  );
};

export default OurSpecialties;
import ScrollReveal from "../component/common/ScrollReveal";
