import React from "react";
import { useSelector } from "react-redux";

const FooterLeft = () => {
  const keywords = useSelector((state) => state.app.indexCard.keywords);
  return (
    <div className="indexCard__footer-left">
      <p>
        <span className="font-slim-tall">keywords: </span>
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

export default FooterLeft;
