import React from "react";
import ModelsImages from "../modelsImages/ModelsImages";
import { Link } from "react-router-dom";
import { setIndexCard } from "../../app/appSlice";
import { useDispatch } from "react-redux";

import WeaponsCarrusell from "./WeaponsCarrusell";

const Card = ({ props }) => {
  const { name, stats, point_cost, image, equiped } = props;
  // const { weapon_skill, balistic_skill } = stats;

  const dispatch = useDispatch();

  const points = point_cost[0].cost || 100;
  const models = point_cost[0].amount || 1;

  return (
    <div className="modelCard__header">
      <div className="modelCard__container-left">
        <div className="modelCard__name">
          {models > 1 ? `${models}x` : ""} {name || "Model's name"}
        </div>
        <div className="modelCard__stats-container">
          <div className="modelCard__stat">
            <p>M</p>
            <div className="modelCard__stat-value">{stats.movement || 6}"</div>
          </div>
          <div className="modelCard__stat">
            <p>T</p>
            <div className="modelCard__stat-value">{stats.toughness || 4}</div>
          </div>
          <div className="modelCard__stat">
            <p>SV</p>
            <div className="modelCard__stat-value">
              {stats.armor_save || 3}+
            </div>
          </div>
          <div className="modelCard__stat">
            <p>W</p>
            <div className="modelCard__stat-value">{stats.wounds || 1}</div>
          </div>
          <div className="modelCard__stat">
            <p>LD</p>
            <div className="modelCard__stat-value">
              {stats.leadership || 6}+
            </div>
          </div>
          <div className="modelCard__stat">
            <p>OC</p>
            <div className="modelCard__stat-value">
              {stats.objective_control || 1}
            </div>
          </div>
        </div>
        {/* <p className="modelCard__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
      corrupti quasi aliquid impedit doloribus neque voluptas quod soluta
      non architecto deleniti necessitatibus.
    </p> */}
        <div className="modelCard__point-cost">{points}pts</div>
        <div className="modelCard__wargear-container">
          <WeaponsCarrusell equiped={equiped} />
          {/* {equiped.map((w, i) => (
            <div className="modelCard__wargear-container--item" key={i}>
              {armoury[w]?.name || "missing weapon"}
              {w.range === "melee" ? weapon_skill : balistic_skill}+
            </div>
          ))} */}
          {/* <div className="modelCard__wargear-container--item">
            power sword {stats.balistic_skill || 3}+
          </div>
          <div className="modelCard__wargear-container--item">
            plasma pistol {stats.weapon_skill || 3}+
          </div> */}
        </div>
      </div>

      <div className="modelCard__image-container">
        <ModelsImages imgName={image} type="selected" />
      </div>

      <div className="modelCard__menu-container">
        <Link to={`${name}`} state={props}>
          <div
            className="modelCard__menu-item"
            onClick={() => {
              dispatch(setIndexCard(props));
            }}
          >
            details
          </div>
        </Link>

        <div className="modelCard__menu-item">setting</div>
        <div className="modelCard__menu-item">lore</div>
        {<div className="modelCard__menu-item">lead</div>}
      </div>
    </div>
  );
};

export default Card;
