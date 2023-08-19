import React from "react";
import Header from "./subcomponents/_Header";
import WargearOptions from "./subcomponents/WargearOptions";
import Invulnerable from "./subcomponents/Invulnerable";
import UnitComposition from "./subcomponents/UnitComposition";
import Leader from "./subcomponents/Leader";
import WargearHability from "./subcomponents/WargearHability";
import UniqueCharacter from "./subcomponents/UniqueCharacter";
import AttachedUnit from "./subcomponents/AttachedUnit";
import Habilities from "./subcomponents/Habilities";
import FooterLeft from "./subcomponents/FooterLeft";
import FooterRight from "./subcomponents/FooterRight";
import FooterImage from "./subcomponents/FooterImage";
// import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import { setIndexCard } from "../../app/appSlice";
import Weapons from "./subcomponents/Weapons";
import Transport from "./subcomponents/Transport";

const IndexCard = () => {
  // const location = useLocation();
  // const dispatch = useDispatch();
  const indexCard = useSelector((state) => state.app.indexCard);
  // useEffect(() => {
  //   dispatch(setIndexCard(location.state));
  //   // eslint-disable-next-line
  // }, []);

  const {
    name,
    stats,
    point_cost,
    image,
    equiped,
    wargear_options,
    abilities,
    invulnerable,
    leader,
    wargear_hability,
    specific,
    attached_unit,
    transport,
  } = indexCard;
  const {
    armor_save,
    // balistic_skill,
    leadership,
    movement,
    objective_control,
    toughness,
    // weapon_skill,
    wounds,
  } = stats;
  const { cost, amount } = point_cost[0];

  return (
    <div className="indexCard">
      <Header
        name={name}
        image={image}
        movement={movement}
        armor_save={armor_save}
        leadership={leadership}
        objective_control={objective_control}
        toughness={toughness}
        wounds={wounds}
        points={cost}
        models={amount}
      />

      <div className="indexCard__content">
        <div className="indexCard__content-left">
          <div className="indexCard__content-left--small">
            {/* table */}
            {/* <div className="indexCard__content-table">
              <Weapons equiped={equiped} /> 
            </div> */}
            {/* 
            {wargear_options && (
              <WargearOptions wargear_options={wargear_options} />
            )} */}

            {/* display in phones Vertically TODO: do it in css*/}
            <div className="indexCard__content-bottom">
              {/* Habilities: core, faction & unique */}
              {<Habilities data={abilities} />}
              {/* unit-composition */}
              <UnitComposition />

              {/*Transport */}
              {transport && <Transport />}
              {/* invulnerable */}
              {invulnerable && <Invulnerable />}

              {/* leader */}
              {leader.length > 0 && <Leader />}
              {/* wargear hability */}
              {wargear_hability && <WargearHability />}
              {/* unique character rules */}
              {specific && <UniqueCharacter />}
              {/* attached unit */}
              {attached_unit && <AttachedUnit />}
            </div>
          </div>
        </div>

        <div className="indexCard__content-right">
          {/* Habilities: core, faction & unique */}
          <Habilities />
          {/* invulnerable */}
          {invulnerable && <Invulnerable />}
          {/* unit-composition */}
          <UnitComposition />
          {/*Transport */}
          {transport && <Transport />}

          {/* leader */}

          {leader.length > 0 && <Leader />}
          {/* wargear hability */}

          {wargear_hability && <WargearHability />}
          {/* unique character rules */}
          {specific && <UniqueCharacter />}
          {/* attached unit */}
          {attached_unit && <AttachedUnit />}
        </div>
      </div>

      {/* Footer */}
      <div className="indexCard__footer font-negrita font-rules">
        <FooterLeft />
        <FooterImage />
        <FooterRight />
      </div>
    </div>
  );
};

export default IndexCard;
