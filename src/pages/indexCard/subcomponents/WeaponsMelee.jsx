import React from "react";
import WeaponEntry from "./WeaponEntry";

const WeaponsMelee = (props) => {
  const { weapons } = props;
  // const { profiles } = props;
  const foo = [1, 2, 3];
  return (
    <div>
      <div className="indexCard__content-heading">
        <div className="indexCard__content-heading-data-icon">X</div>
        <div className="indexCard__content-heading-data-name">melee weapon</div>
        <div className="indexCard__content-heading-data">range</div>
        <div className="indexCard__content-heading-data">a</div>
        <div className="indexCard__content-heading-data">ws</div>
        <div className="indexCard__content-heading-data">s</div>
        <div className="indexCard__content-heading-data">ap</div>
        <div className="indexCard__content-heading-data">d</div>
      </div>
      {weapons.map((w, i) => (
        <WeaponEntry weapon={w} key={i} />
      ))}
    </div>
  );
};

export default WeaponsMelee;
