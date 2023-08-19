import React from "react";
import ModelsImages from "../../../components/modelsImages/ModelsImages";

const _Header = (props) => {
  const {
    name,
    image,
    movement,
    armor_save,
    leadership,
    objective_control,
    toughness,
    wounds,
    points,
    models,
  } = props;
  return (
    <div className="indexCard__header">
      <div className="indexCard__container-left">
        <div className="indexCard__name">
          {models > 1 ? `${models}x ${name}` : name}
        </div>
        <div className="indexCard__stats-container">
          <div className="indexCard__stat">
            <p>M</p>
            <div className="indexCard__stat-value">{movement}"</div>
          </div>
          <div className="indexCard__stat">
            <p>T</p>
            <div className="indexCard__stat-value">{toughness}</div>
          </div>
          <div className="indexCard__stat">
            <p>SV</p>
            <div className="indexCard__stat-value">{armor_save}+</div>
          </div>
          <div className="indexCard__stat">
            <p>W</p>
            <div className="indexCard__stat-value">{wounds}</div>
          </div>
          <div className="indexCard__stat">
            <p>LD</p>
            <div className="indexCard__stat-value">{leadership}+</div>
          </div>
          <div className="indexCard__stat">
            <p>OC</p>
            <div className="indexCard__stat-value">{objective_control}</div>
          </div>
        </div>
        {/* <p className="indexCard__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          corrupti quasi aliquid impedit doloribus neque voluptas quod soluta
          non architecto deleniti necessitatibus.
        </p> */}
        <div className="indexCard__point-cost">{points}pts</div>
      </div>

      <div className="indexCard__image-container">
        {/* <img src={image} alt="model" className="indexCard__model-image" /> */}
        <ModelsImages imgName={image} type="index" />
      </div>
    </div>
  );
};

export default _Header;
