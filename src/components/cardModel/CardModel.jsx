import React from "react";
import ModelsImages from "../modelsImages/ModelsImages";

/**this is mapped from army units array */
const CardModel = ({ props, fx }) => {
  /** TODO: this is where the units will be created and displayed */
  /**todo: unit contains array of models object */
  /** show image, name, points sum of both */
  const {
    //  stats,
    point_cost,
    name,
    image,
    // wargear_options,
  } = props;
  //   console.log(props);
  //   const {
  //     armor_save,
  //     balistic_skill,
  //     leadership,
  //     movement,
  //     objective_control,
  //     toughness,
  //     weapon_skill,
  //     wounds,
  //   } = stats;
  const points = point_cost[0].cost;
  const models = point_cost[0].amount;

  //   const [hiddeSetting, setHiddeSetting] = useState(true);

  //   const isDisplay = hiddeSetting ? "none" : "flex";

  //   const toggleSettings = () => {
  //     setHiddeSetting(!hiddeSetting);
  //   };

  return (
    <div className="model-card" onClick={() => fx()}>
      <p className="model-card__name">{points}pts</p>
      <p className="model-card__name">
        {models > 1 ? `${models}x` : ""} {name}
      </p>

      <ModelsImages imgName={image} type={"unit"} />
      {/* {wargear_options || point_cost.length > 1 ? (
        <p className="model-card__name" onClick={toggleSettings}>
          settings
        </p>
      ) : (
        <p className="model-card__name">no options</p>
      )} */}

      {/* <div className="model-card__settings" style={{ display: isDisplay }}>
        <p className="model-card__name" onClick={toggleSettings}>
          settings
        </p>
        {point_cost.length > 1 && (
          <div>
            <button className="model-card__name">+</button>
            <span className="model-card__name"> size </span>
            <button className="model-card__name">-</button>
          </div>
        )}
        {wargear_options && (
          <select className="model-card__settings--select model-card__name">
            <option value="">weapon 1</option>
            <option value="">weapon 2</option>
          </select>
        )}
      </div> */}
      <p className="model-card__name">select</p>
    </div>
  );
  //   return ;
};

export default CardModel;
