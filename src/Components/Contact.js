import React from "react";
import "./Contact.css";
import worldmap from "../images/worldmap.png";
import { Zoom, Bounce } from "react-reveal";
import {
  FaLinkedin,
  FaInstagram,
  FaStackOverflow,
  FaGithub
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
function Contact() {
  return (
    <div className="contact-container " id="contact">
      <h1 className="contact-heading">Contact</h1>
      <div className="background_image">
        <img src={worldmap} alt="" />
      </div>
      <div className="contact-intro">
        <Zoom cascade>
          <h3>Want to Collaborate on a Project ? Please Let Me Know</h3>
          <h3>Have questions for me ? , Please Drop a Mail.</h3>
          <h3>Thanks for Visiting </h3>
        </Zoom>
      </div>
      <Bounce bottom>
        <div className="contact-social-icon">
          <a
            href="https://www.linkedin.com/in/himadrichakraborty7/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icons">
              <FaLinkedin />
            </span>
          </a>
          <a href="mailto:hck364864@gmail.com" target="_blank" rel="noreferrer">
            <span className="contact-icons">
              <FiMail />
            </span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icons">
              <FaInstagram />
            </span>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <span className="contact-icons">
              <FaStackOverflow />
            </span>
          </a>
          <a href=" #" target="_blank"  rel="noreferrer">
            <span className="contact-icons">
              <FaGithub />
            </span>
          </a>
        </div>
      </Bounce>
      <footer>
        <h3>
          @Himadri Chakraborty | 2022
        </h3>
      </footer>
    </div>
  );
}

export default Contact;
