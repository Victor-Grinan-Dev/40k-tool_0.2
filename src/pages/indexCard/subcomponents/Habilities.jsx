import React from "react";
import { useSelector } from "react-redux";

const Habilities = () => {
  const abilities = useSelector((state) => state.app.indexCard.abilities);
  const { core, faction, other } = abilities;
  return (
    <div>
      <div className="indexCard__habilities">abilities</div>
      {core.length > 0 && (
        <>
          <p className="font-rules">
            CORE:
            {core.map((ca, i) => (
              <span key={i}>
                <span className="font-negrita"> {ca}</span>
                <span className="font-negrita">
                  {i !== core.length - 1 ? ", " : "."}
                </span>
              </span>
            ))}
          </p>
          <div className="indexCard__divisor"></div>
        </>
      )}
      {faction && (
        <span className="font-rules">
          FACTION:<span className="font-negrita"> {faction}</span>
        </span>
      )}
      <div className="indexCard__divisor"></div>
      {/* unique */}
      {other.map((oa, i) => (
        <p className="font-rules" key={i}>
          <span className="font-negrita">{oa.title}: </span>
          <span>{oa.rule}.</span>
        </p>
      ))}
      <div className="indexCard__divisor"></div>
    </div>
  );
};

export default Habilities;
