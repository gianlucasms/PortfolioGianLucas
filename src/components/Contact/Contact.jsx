import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "email_giancontact";
    const templateId = "email_contatoportfolio";
    const userId = "aVl_pXeaDWrNPYX3V";

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: userId,
            template_params: {
              from_name: name,
              reply_to: email,
              message: message,
            },
          }),
        }
      );

      if (response.ok) {
        setSuccessMessage("Mensagem enviada!");
        setShowPopup(true);
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setShowPopup(false);
          setSuccessMessage("");
        }, 3000);
      } else {
        console.error("Erro ao enviar o e-mail");
        setSuccessMessage("");
        setShowPopup(false);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setSuccessMessage("");
      setShowPopup(false);
    }
  };

  return (
    <section className="contact">
      <motion.div
        className="contact-container"
        id="contact"
        initial={{
          y: "100px",
          opacity: 0,
        }}
        whileInView={{
          threshold: 0.1,
          opacity: 1,
          y: "0px",
          transition: {
            duration: 1.2,
            ease: [0, 0.71, 0.2, 1.01],
          },
        }}
        viewport={{ once: false }}
      >
        <h1>Are you hiring?</h1>
        <p>
          I'm ready to join the team! Let's chat about how I can bring my skills
          to the table!
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>

          <button className="SubmitEmailSend" type="submit">
            Submit
          </button>
        </form>

        {showPopup && (
          <div className="popup">
            <p className="popup-content">Mensagem enviada!</p>
          </div>
        )}

        <p className="mobile-contact">
          Contact me on{" "}
          <a
            href="https://www.linkedin.com/in/gian-lucas1/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            LinkedIn
          </a>
          , <a href="mailto:gianlucasmds17@gmail.com">Email</a> or call me at{" "}
          <span className="font-blue">+55 41 98816-6467</span>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
