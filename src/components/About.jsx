import React from "react";
import "../css/About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about">
      <div className="about-container" id="about">
        <motion.div
          className={"about-title"}
          initial={{
            x: "-100px",
            opacity: 0,
          }}
          whileInView={{
            threshold: 2.35,
            opacity: 10,
            x: "0px", 
            transition: {
              duration: 1.2,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          viewport={{ once: false }}>
          <h1>ABOUT</h1>
          <h1>ME</h1>
        </motion.div>
        <motion.div
          className="about-text"
          initial={{
            x: "500px",
            opacity: 0,
          }}
          whileInView={{
            threshold: 0.35,
            opacity: 1,
            x: "0px", 
            transition: {
              duration: 1.2,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          viewport={{ once: false }}>
          <span>
          I'm a dynamic full-stack developer focused in web technologies such as .NET, ASP.NET, React, Vue, and Angular. With a passion for crafting efficient solutions, I bring a detail-oriented and collaborative approach to every project that i can contribute.
           <br />
           <br />
            Self-starter and a fast learner, looking for a position where I can
            continue to grow as a developer. <br />
            <br />
            Check out my <span className="font-blue">skills</span> and
            <span className="font-blue"> projects</span> below!
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
