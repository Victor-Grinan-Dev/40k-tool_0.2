import React from "react";
import { useSelector } from "react-redux";

const UniqueCharacter = () => {
  const specific = useSelector((state) => state.app.indexCard.specific);
  const { title, rule } = specific;
  return (
    <div>
      <div className="indexCard__unique">{title}</div>
      <p className="font-rules">{rule}.</p>
    </div>
  );
};

export default UniqueCharacter;
