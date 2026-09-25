import { useState } from "react";


import butterChicken from "../assets/images/butterChicken.jpg";
import biryani from "../assets/images/biryani.jpg";
import paneerTikka from "../assets/images/paneerTikka.jpg";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Starters",
    "Main Course",
    "Rice & Biryani",
    "Breads",
    "Desserts",
    "Beverages",
  ];

  const menuItems = [
    {
      name: "Smoked Paneer Tikka",
      category: "Starters",
      description:
        "Charcoal-grilled cottage cheese marinated with aromatic spices and herbs.",
      price: "₹375",
      image: paneerTikka,
      type: "veg",
      tag: "Chef's Choice",
    },
    {
      name: "Royal Butter Chicken",
      category: "Main Course",
      description:
        "Tender chicken cooked in a rich tomato, butter and aromatic spice gravy.",
      price: "₹495",
      image: butterChicken,
      type: "nonveg",
      tag: "Signature",
    },
    {
      name: "Riwaaz Special Biryani",
      category: "Rice & Biryani",
      description:
        "Fragrant basmati rice layered with traditional spices and slow-cooked to perfection.",
      price: "₹425",
      image: biryani,
      type: "nonveg",
      tag: "Popular",
    },
    {
      name: "Tandoori Paneer",
      category: "Starters",
      description:
        "Soft paneer cubes, peppers and onions grilled in our traditional tandoor.",
      price: "₹345",
      image: paneerTikka,
      type: "veg",
      tag: "",
    },
    {
      name: "Dal Riwaaz",
      category: "Main Course",
      description:
        "Slow-cooked black lentils finished with butter and a delicate blend of spices.",
      price: "₹295",
      image: butterChicken,
      type: "veg",
      tag: "Traditional",
    },
    {
      name: "Lucknowi Mutton Biryani",
      category: "Rice & Biryani",
      description:
        "Aromatic basmati rice and tender mutton prepared with traditional dum cooking.",
      price: "₹525",
      image: biryani,
      type: "nonveg",
      tag: "",
    },
    {
      name: "Garlic Naan",
      category: "Breads",
      description:
        "Freshly baked tandoori naan topped with garlic, butter and coriander.",
      price: "₹115",
      image: paneerTikka,
      type: "veg",
      tag: "",
    },
    {
      name: "Royal Gulab Jamun",
      category: "Desserts",
      description:
        "Soft golden dumplings served warm with fragrant saffron and cardamom syrup.",
      price: "₹165",
      image: biryani,
      type: "veg",
      tag: "Sweet Ending",
    },
    {
      name: "Masala Chai",
      category: "Beverages",
      description:
        "Traditional Indian tea brewed with milk, cardamom and warming spices.",
      price: "₹95",
      image: paneerTikka,
      type: "veg",
      tag: "",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="menu-page">

      {/* =====================================
          MENU HERO
      ===================================== */}

      <section className="menu-hero">

        <div className="menu-hero-decoration"></div>

        <div className="menu-hero-content">

          <p className="menu-eyebrow">
            THE RIWAAZ EXPERIENCE
          </p>

          <h1>
            Our
            <span>Menu</span>
          </h1>

          <div className="menu-hero-divider"></div>

          <p>
            A celebration of authentic Indian flavours,
            traditional recipes and timeless culinary artistry.
          </p>

        </div>

      </section>


      {/* =====================================
          MENU CONTENT
      ===================================== */}

      <section className="menu-section">

        <div className="menu-container">

          {/* Heading */}

          <div className="menu-section-heading">

            <div>
              <p className="section-eyebrow">
                FROM OUR KITCHEN
              </p>

              <h2>
                Crafted with
                <span>Tradition</span>
              </h2>
            </div>

            <p className="menu-heading-text">
              Every dish at Riwaaz is prepared with carefully
              selected ingredients and recipes inspired by the
              rich culinary heritage of India.
            </p>

          </div>


          {/* =====================================
              CATEGORY FILTER
          ===================================== */}

          <div className="menu-categories">

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}

          </div>


          {/* =====================================
              MENU GRID
          ===================================== */}

          <div className="menu-grid">

            {filteredItems.map((item, index) => (
              <article
                className="menu-card"
                key={`${item.name}-${index}`}
              >

                {/* Image */}

                <div className="menu-card-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  {item.tag && (
                    <span className="menu-card-tag">
                      {item.tag}
                    </span>
                  )}

                  <span
                    className={`food-indicator ${item.type}`}
                    title={
                      item.type === "veg"
                        ? "Vegetarian"
                        : "Non-Vegetarian"
                    }
                  ></span>

                </div>


                {/* Content */}

                <div className="menu-card-content">

                  <div className="menu-card-title">

                    <h3>
                      {item.name}
                    </h3>

                    <span>
                      {item.price}
                    </span>

                  </div>

                  <p>
                    {item.description}
                  </p>

                  <div className="menu-card-bottom">

                    <span>
                      {item.category}
                    </span>

                    <button>
                      Add to Selection
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>


          {/* Empty state */}

          {filteredItems.length === 0 && (
            <div className="menu-empty">
              <h3>No dishes found</h3>
              <p>
                Please select another category.
              </p>
            </div>
          )}

        </div>

      </section>


      {/* =====================================
          MENU NOTE
      ===================================== */}

      <section className="menu-note">

        <div className="menu-note-content">

          <span>✦</span>

          <p>
            Please inform our team about any allergies or
            dietary requirements before ordering.
          </p>

          <span>✦</span>

        </div>

      </section>

    </div>
  );
};

export default Menu;