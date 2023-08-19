import React from "react";
import WeaponEntry from "./WeaponEntry";
const Weapons = ({ equiped }) => {
  return (
    <div>
      <div className="indexCard__content-heading">
        <div className="indexCard__content-heading-data-icon">X</div>
        <div className="indexCard__content-heading-data-name"> weapons</div>
        <div className="indexCard__content-heading-data">range</div>
        <div className="indexCard__content-heading-data">a</div>
        <div className="indexCard__content-heading-data">Hits</div>
        <div className="indexCard__content-heading-data">s</div>
        <div className="indexCard__content-heading-data">ap</div>
        <div className="indexCard__content-heading-data">d</div>
      </div>
      {equiped && equiped.map((w, i) => <WeaponEntry weapon={w} key={i} />)}
    </div>
  );
};

export default Weapons;
