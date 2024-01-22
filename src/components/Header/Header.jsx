import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faCode,
  faSheetPlastic,
  faAddressBook, 
  faTarpDroplet
  
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const scroll = (props) => {
    const section = document.querySelector(`#${props.section}`);
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <header className="header-container">
      <div className="header">
        <div className="imgDiv">
        <img
          src="https://github.com/gianlucasms/PortfolioGianLucas/assets/81451441/1334e3eb-a7a0-4928-affa-ac1c33482f36"
          alt="logo"
        />
        </div>
        <nav className="menu">
          <ul className="menu-header">
            <a
              onClick={() => {
                scroll({ section: "about" });
              }}>
              <li>
                <span className="icon">
                  <FontAwesomeIcon icon={faInfoCircle} />
                </span>
                <span className="nav-li-title">About Me</span>
              </li>
            </a>
            <a
              onClick={() => {
                scroll({ section: "skills" });
              }}>
              <li>
                <span className="icon">
                  <FontAwesomeIcon icon={faCode} />
                </span>
                <span className="nav-li-title">Skills</span>
              </li>
            </a>
            <a
              onClick={() => {
                scroll({ section: "projects" });
              }}>
              <li>
                <span className="icon">
                  <FontAwesomeIcon icon={faTarpDroplet} />
                </span>
                <span className="nav-li-title">Projects</span>
              </li>
            </a>
            <a
              onClick={() => {
                scroll({ section: "contact" });
              }}>
              <li>
                <span className="icon">
                  <FontAwesomeIcon icon={faAddressBook} />
                </span>
                <span className="nav-li-title">Contact</span>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
