import { Link } from "react-router-dom";
import ScrollReveal from "../component/common/ScrollReveal";


import butterChicken from "../assets/images/butterChicken.jpg";
import biryani from "../assets/images/biryani.jpg";
import paneerTikka from "../assets/images/paneerTikka.jpg";

const dishes = [
  {
    name: "Royal Butter Chicken",
    description:
      "Tender chicken simmered in a rich tomato, butter and aromatic spice gravy.",
    price: "₹495",
    image: butterChicken,
    tag: "CHEF'S SPECIAL",
  },
  {
    name: "Riwaaz Special Biryani",
    description:
      "Fragrant basmati rice layered with traditional spices and slow-cooked flavours.",
    price: "₹425",
    image: biryani,
    tag: "SIGNATURE",
  },
  {
    name: "Smoked Paneer Tikka",
    description:
      "Char-grilled cottage cheese marinated with royal spices and creamy yoghurt.",
    price: "₹375",
    image: paneerTikka,
    tag: "VEGETARIAN",
  },
];

const SignatureDishes = () => {
  return (
    <section className="signature-section">

      <div className="signature-container">

        {/* Heading */}
        <ScrollReveal className="signature-heading">

          <div>
            <p className="signature-eyebrow">
              FROM OUR KITCHEN
            </p>

            <h2>
              Signature
              <span>Dishes</span>
            </h2>
          </div>

          <p className="signature-intro">
            Discover the flavours that define RIWAAZ — carefully
            crafted recipes inspired by India's timeless culinary
            traditions.
          </p>

        </ScrollReveal>


        {/* Dish Cards */}
        <div className="dish-grid">

          {dishes.map((dish, index) => (
            <article className="dish-card" key={dish.name}>

              <div className="dish-image-wrapper">

                <img
                  src={dish.image}
                  alt={dish.name}
                  className="dish-image"
                />

                <span className="dish-tag">
                  {dish.tag}
                </span>

              </div>

              <ScrollReveal className="dish-content" delay={index * 0.1}>

                <div className="dish-title-row">
                  <h3>{dish.name}</h3>

                  <span className="dish-price">
                    {dish.price}
                  </span>
                </div>

                <p>
                  {dish.description}
                </p>

              </ScrollReveal>

            </article>
          ))}

        </div>


        {/* Menu Button */}
        <div className="signature-button-wrapper">
          <Link to="/menu" className="signature-menu-btn">
            Explore Full Menu
            <span>↗</span>
          </Link>
        </div>

      </div>

    </section>
  );
};

export default SignatureDishes;
