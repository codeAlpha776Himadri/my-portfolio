import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BiBook, BiHome, BiMedal, BiNote, BiUser } from "react-icons/bi";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const  Navbar = () => {
  const [click, changeClick] = useState(false);
  const [scroll, isscrolled] = useState(false);
  const [link_is_clicked, track_link_click] = useState(false);

  const handle_link_click = (events) => {
    changeClick(!click);
    track_link_click(!link_is_clicked);
  };
  const handleClick = (events) => {
    changeClick(!click);
  };
  window.onscroll = () => {
    window.scrollY > 10 ? isscrolled(true) : isscrolled(false);
  };

  return (
    <>
      <div className={scroll ? "navbar-items scrolled" : "navbar-items"}>
        <h2 className="text-color-logo">
          {/* <span><span>  </span>HIMADRI</span> */}
        </h2>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <MdClose /> : <FiMenu />}
        </div>
        <ul className={click ? "nav-menu  active" : "nav-menu"}>
          <li onClick={handle_link_click}>
            <a
              className={scroll ? "nav-links scrolled " : "nav-links"}
              href="#homepage"
            >
              <span className="navigation-icon">
                <BiHome />
              </span>
              HOME
            </a>
          </li>

          <li onClick={handle_link_click}>
            <a
              className={scroll ? "nav-links scrolled" : "nav-links"}
              href="#skills"
            >
              <span className="navigation-icon">
                <BiMedal />
              </span>
              SKILLS
            </a>
          </li>
          <li onClick={handle_link_click}>
            <a
              className={scroll ? "nav-links scrolled" : "nav-links"}
              href="#projects"
            >
              <span className="navigation-icon">
                <BiNote />
              </span>
              PROJECTS
            </a>
          </li>
          <li onClick={handle_link_click}>
            <a
              className={scroll ? "nav-links scrolled" : "nav-links"}
              href="#contact"
            >
              <span className="navigation-icon">
                <BiUser />
              </span>
              CONTACT
            </a>
          </li>

          <li onClick={handle_link_click}>
            <a
              className={scroll ? "nav-links scrolled" : "nav-links"}
              href="#contact"
            >
              <span className="navigation-icon">
                <BiBook />
              </span>
              ABOUT ME
            </a>
          </li>
        </ul>
      </div>

      <div className={click ? "social-icons  active" : "social-icons"}>
        <div>
          <a href="#" target="_blank">
            <FaFacebook className="facebook" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/stoic.himadri_/"
            target="_blank"
          >
            <FaInstagram className="instagram" />
          </a>
        </div>
        <div>
          <a href="https://github.com/codeAlpha776Himadri/" target="_blank">
            <FaGithub className="github" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/himadrichakraborty7/"
            target="_blank"
          >
            <FaLinkedin className="linkedin" />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
            <FaTwitter className="twitter" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
