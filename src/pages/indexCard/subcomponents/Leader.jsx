import React from "react";
import { useSelector } from "react-redux";

const Leader = () => {
  const leader = useSelector((state) => state.app.indexCard.leader);
  return (
    <div>
      {" "}
      <div className="indexCard__leader">leader</div>
      <p className="font-rules">
        This model can be attached to the following units:
      </p>
      <ul>
        {leader.map((l, i) => (
          <li className="font-rules font-negrita margin-10" key={i}>
            {l}
          </li>
        ))}
        {/* <li className="font-rules font-negrita margin-10">Blood Claws</li>
        
        <li className="font-rules font-negrita margin-10">Long Fangs</li>
        <li className="font-rules font-negrita margin-10">Wolf Guard</li> */}
      </ul>
    </div>
  );
};

export default Leader;
