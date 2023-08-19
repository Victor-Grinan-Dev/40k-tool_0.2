import React from "react";
import { useSelector } from "react-redux";

const AttachedUnit = () => {
  const attached_unit = useSelector(
    (state) => state.app.indexCard.attached_unit
  );
  return (
    <div>
      <div className="indexCard__attached-unit">Attached unit</div>
      <p className="font-rules">{attached_unit}</p>
      {/* {attached_unit.map((a, i) => (
        <p className="font-rules" key={i}>
          {a}
          {i !== attached_unit.length - 1 ? ", " : "."}
        </p>
      ))} */}
      {/* If a <span className="font-negrita">Character</span> unit from your army
        with the Leader ability can be attached to a{" "}
        <span className="font-negrita">Devastator Squad</span>, it can instead
        be attached to this unit */}
    </div>
  );
};

export default AttachedUnit;
