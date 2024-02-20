import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <>
      <footer className="social-icons">
      <div className="container">
        <a href="https://www.facebook.com/digital.futures2021/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
      </footer>
      <p className="copyRight"> © DF Cinemas - 2024 -</p>
    </>
  );
};

export default SocialIcons;
