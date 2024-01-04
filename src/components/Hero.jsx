import React from "react";
import "../css/Hero.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      whileInView={{
        threshold: 0.35,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
      viewport={{ once: false }}
      delay={{ duration: 0.5 }}>
      <div className="hero-container">
        <div className="hero-title">
          <span className="name">Hi, I'm Gian Lucas</span>
          <h1 className="front">FULLSTACK</h1>
          <h1 className="dev">DEVELOPER</h1>
        </div>
        <img
          id="perfilPicture"
          className="perfilPicture"
          src="https://github.com/gianlucasms/PortfolioGianLucas/assets/81451441/ff7ce9db-5361-4c8d-ae7f-9e0582083270"
          alt="Picture of Gian Lucas"
        />
      </div>
      <div className="hero-text">
        <p>Creative dev with a passion for building beautiful and </p>
        <Typewriter
          className="typewriter"
          words={[
            "responsive",
            "interactive",
            "user-friendly",
            "intuitive",
            "pixel-perfect",
            "optimized",
            "fast"
          ]}
          loop
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={3000}
        />
        <p> web applications</p>
      </div>
    </motion.section>
  );
};

export default Hero;
