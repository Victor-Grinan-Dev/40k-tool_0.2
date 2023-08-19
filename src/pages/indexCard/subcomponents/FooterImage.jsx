import React from "react";
import spacewolf from "../../../assets/space_wolves/spacewolves_logo.png";
const FooterImage = () => {
  return (
    <div className="indexCard__footer-image-container">
      <img src={spacewolf} alt="faction" className="indexCard__footer-image" />
    </div>
  );
};

export default FooterImage;
