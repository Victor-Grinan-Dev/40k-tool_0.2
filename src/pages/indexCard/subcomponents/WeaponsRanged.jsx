import React from "react";
import WeaponEntry from "./WeaponEntry";
import { useSelector } from "react-redux";

const WeaponsRanged = () => {
  const weapons = useSelector((state) => state.app.indexCard.equiped);
  return (
    <div>
      <div className="indexCard__content-heading">
        <div className="indexCard__content-heading-data-icon">O</div>
        <div className="indexCard__content-heading-data-name">
          ranged weapon
        </div>
        <div className="indexCard__content-heading-data">range</div>
        <div className="indexCard__content-heading-data">a</div>
        <div className="indexCard__content-heading-data">bs</div>
        <div className="indexCard__content-heading-data">s</div>
        <div className="indexCard__content-heading-data">ap</div>
        <div className="indexCard__content-heading-data">d</div>
      </div>
      {weapons && weapons.map((w, i) => <WeaponEntry weapon={w} key={i} />)}
    </div>
  );
};

export default WeaponsRanged;
