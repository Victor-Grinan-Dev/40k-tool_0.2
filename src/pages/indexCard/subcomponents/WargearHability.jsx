import React from "react";
import { useSelector } from "react-redux";

const WargearHability = () => {
  const wargearHability = useSelector(
    (state) => state.app.indexCard.wargear_hability
  );
  const { title, rule } = wargearHability;
  return (
    <div>
      {" "}
      <div className="indexCard__leader">wargear hability</div>
      <p className="font-rules">
        <span className="font-negrita">{title}:</span> {rule}.
      </p>
    </div>
  );
};

export default WargearHability;
