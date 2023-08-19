import React from "react";
import { useSelector } from "react-redux";

const WargearOptions = () => {
  const options = useSelector((state) => state.app.indexCard.wargear_options);

  return (
    <div className="indexCard__content-wargear font-rules">
      <div className="indexCard__wargear-options">wargear options</div>
      {console.log(options)}
      {/* {options.map((o, i) => (
        <ul className="list" key={i}>
          {
            <li key={`${i}`} className="list">
              {o.title}:
            </li>
          }
          <ul>
            {o.options.map((option, j) => (
              <li key={`${i}${j}`} className="sublist">
                {console.log(option)}:
              </li>
            ))} 
          </ul>
        </ul>
      ))}*/}
    </div>
  );
};

export default WargearOptions;
