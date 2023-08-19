import React, { useState } from "react";
import Card from "../../components/card/Card";
import CardModel from "../../components/cardModel/CardModel";
// import { testData } from "../../data/testData";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUnit } from "../../app/appSlice";
const Grapharmy = () => {
  const dispatch = useDispatch();
  const army = useSelector((state) => state.app.army);
  const [data, setData] = useState(false);
  const selectModel = (modelsProps) => {
    dispatch(setSelectedUnit(modelsProps));
    setData(modelsProps);
    // dispatch(setSelectedUnit(modelsProps));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    // <div className="grapharmy">
    //   {testData && testData.map((data, i) => <Card props={data} key={i} />)}
    // </div>
    <div className="grapharmy">
      <div className="grapharmy__selected-container">
        {data && <Card props={data} />}
      </div>
      <div className="grapharmy__units-container">
        {army &&
          army.map((unit, i) => (
            <CardModel
              props={unit}
              key={`${i}-${unit.name}`}
              fx={() => selectModel(unit)}
            /> //onClick={() => selectModel(unit)}
          ))}
      </div>
    </div>
  );
};

export default Grapharmy;
