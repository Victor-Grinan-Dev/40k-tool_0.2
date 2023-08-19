import React from "react";
import { useSelector } from "react-redux";

const FooterRight = () => {
  const keywords = useSelector((state) => state.app.indexCard.faction_keywords);
  return (
    <div className="indexCard__footer-right font-negrita font-rules">
      <p>
        <span className="font-slim-tall">faction keywords: </span>
        {keywords.map((k, i) => (
          <span key={i}>
            {k}
            {i !== keywords.length - 1 ? ", " : "."}
          </span>
        ))}
      </p>
    </div>
  );
};

export default FooterRight;
