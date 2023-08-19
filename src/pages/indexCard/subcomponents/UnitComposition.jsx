import React from "react";
import { useSelector } from "react-redux";

const UnitComposition = () => {
  const composition = useSelector(
    (state) => state.app.indexCard.unit_composition
  );
  const equiped = useSelector((state) => state.app.indexCard.equiped);
  return (
    <span>
      <div className="indexCard__unit-composition">unit composition</div>
      {composition.length > 1 ? (
        <div>
          <ul className="indexCard__unit-composition-list">
            {/* <li className="font-negrita font-rules">1 Intercessor Sergeant</li>
            <li className="font-negrita font-rules">4-9 Intercessors</li> */}
            {composition &&
              composition.map((c, i) => (
                <li className="font-negrita font-rules" key={i}>
                  {c}
                </li>
              ))}
          </ul>
          <p className="font-rules">
            {composition.length > 1 && (
              <span className="font-negrita">
                Every model is equipped with:
              </span>
            )}
            {equiped.map((e, i) => (
              <span className="font-rules" key={i}>
                {" "}
                {e}
                {i !== equiped.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
          <div className="indexCard__divisor"></div>
        </div>
      ) : (
        <div className="font-rules">{composition}</div>
      )}
    </span>
  );
};

export default UnitComposition;
