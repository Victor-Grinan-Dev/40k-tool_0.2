import React from "react";
import facebook from "../../assets/icon-package/facebook-color.png";
import twitter from "../../assets/icon-package/twitter-trasparen-border.png";
import youtube from "../../assets/icon-package/youtube-color.png";
import instagram from "../../assets/icon-package/instagram-color-lined.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        <a
          className="footer__compnay-link"
          href="https://victor-grinan-dev.github.io/Portfolio/"
          target="blank"
        >
          Author
        </a>
        <div className="footer__some">
          <a target="blank" href="https://www.instagram.com/">
            <img className="footer__some-icon" src={instagram} alt="twitter" />
          </a>
          <a target="blank" href="https://www.facebook.com/">
            <img className="footer__some-icon" src={facebook} alt="twitter" />
          </a>
          <a target="blank" href="https://twitter.com/">
            <img className="footer__some-icon" src={twitter} alt="twitter" />
          </a>
          <a target="blank" href="https://www.youtube.com/">
            <img className="footer__some-icon" src={youtube} alt="twitter" />
          </a>
        </div>
        <p className="footer__copy-rights">
          Copyright ⓒ {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
