import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import heroImage from "../assets/images/hero-img.jpg";

const Hero = () => {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const eyebrowY = useTransform(scrollYProgress, [0, 0.7], [0, -45]);
  const headingY = useTransform(scrollYProgress, [0, 0.7], [0, -85]);
  const textY = useTransform(scrollYProgress, [0, 0.7], [0, -55]);
  const buttonY = useTransform(scrollYProgress, [0, 0.7], [0, -35]);
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.9], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const scrollStyle = (y) => (reduceMotion ? {} : { y, opacity: textOpacity });

  return (
    <section className="hero-section" ref={sectionRef}>
      
      {/* Hero Image */}
      <motion.img
        src={heroImage}
        alt="Traditional Indian cuisine"
        className="hero-image"
        style={reduceMotion ? {} : { scale: imageScale, y: imageY }}
      />

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">

          <motion.p className="hero-eyebrow" style={scrollStyle(eyebrowY)}>
            WELCOME TO RIWAAZ
          </motion.p>

          <motion.h1 className="hero-heading" style={scrollStyle(headingY)}>
            The Taste of
            <span> Tradition</span>
          </motion.h1>

          <motion.p className="hero-text" style={scrollStyle(textY)}>
            Experience the authentic flavors of India, where
            timeless recipes meet the art of fine dining.
          </motion.p>

          <motion.div className="hero-buttons" style={scrollStyle(buttonY)}>

            <Link to="/menu" className="hero-btn primary-btn">
              View Menu
              <span>↗</span>
            </Link>

            <Link
              to="/reservation"
              className="hero-btn secondary-btn"
            >
              Book a Table
              <span>↗</span>
            </Link>

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="hero-scroll" style={scrollStyle(buttonY)}>
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </motion.div>

    </section>
  );
};

export default Hero;
