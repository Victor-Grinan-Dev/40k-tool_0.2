import React from "react";
import { useSelector } from "react-redux";
const WeaponEntry = (props) => {
  const { weapon } = props;
  const weaponObj = useSelector((state) => state.app.data.armoury[weapon]);

  return (
    <div>
      {/* {weaponObj &&
        weaponObj.profiles.map((w, i) => (
          <div key={`${w}${i}`}>
            <div className="indexCard__content-item">
              <div className="indexCard__content-item-data-icon"></div>
              <div className="indexCard__content-item-data-name">
                {weaponObj?.name || `${weapon}!!!`} 
                {w.profile && ` ${w.profile}`} 
              </div>
              <div className="indexCard__content-item-data">
                {weaponObj.profiles[i].range}
                {weaponObj.profiles[i].range === "melee" ? "" : '"'} 
              </div>
              <div className="indexCard__content-item-data">
                {weaponObj.profiles[i].attacks} 
              </div>
              <div className="indexCard__content-item-data">
                {weaponObj.profiles[i].weapons_skill} 
              </div>
              <div className="indexCard__content-item-data">
                {weaponObj.profiles[i].strength} 
              </div>
              <div className="indexCard__content-item-data">
                {weaponObj.profiles[i].armour_penetration === "0" ? "" : "-"}
                {weaponObj.profiles[i].armour_penetration} 
              </div>
              <div className="indexCard__content-item-data">
                {weaponObj.profiles[i].damage} 
              </div>
            </div>
            <div className="indexCard__divisor"></div>
          </div>
        ))} */}
    </div>
  );
};

export default WeaponEntry;
