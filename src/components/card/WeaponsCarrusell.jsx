import React, { useEffect, useState } from "react";
// import { armoury } from "../../data/armory";
import { useDispatch, useSelector } from "react-redux";
import { setCenter, setLeft, setRight } from "../../app/appSlice";

const WeaponsCarrusell = ({ equiped }) => {
  const dispatch = useDispatch();
  const armoury = useSelector((state) => state.app.data.armoury);
  const LAST_ITEM = equiped.length - 1;
  const FIRST_ITEM = 0;
  const [currentWeapon, setCurrentWeapon] = useState(0);

  const weaponEntry = {
    fontSize: "8px",
    color: "black",
    backgroundColor: "white",
    margin: "3px",
    cursor: "pointer",

    height: "35px",
    width: "75px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    textTransform: "upperCase",
    textAlign: "center",
  };

  const carBtn = {
    fontSize: "8px",
    color: "black",
    backgroundColor: "white",
    margin: "3px",
    cursor: "pointer",
  };
  const equipedWeapons = {
    display: "flex",
    position: "relative",
    width: "110px",
    flex: 1,
    justifyContent: "space-between",
  };

  const carrusell = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  };

  // const dots = {
  //   position: "relative",
  //   height: "5px",
  //   bottom: "0px",
  // };

  useEffect(() => {
    /** INITIAL CARRUSELL VALUES */
    if (equiped.length > 1) {
      dispatch(setLeft(LAST_ITEM));
      dispatch(setCenter(0));
      dispatch(setRight(1));
    }
    // eslint-disable-next-line
  }, []);

  const rotateRight = () => {
    if (currentWeapon < LAST_ITEM) {
      setCurrentWeapon(currentWeapon + 1);
    } else {
      setCurrentWeapon(FIRST_ITEM);
    }
  };

  const rotateLeft = () => {
    if (currentWeapon === FIRST_ITEM) {
      setCurrentWeapon(LAST_ITEM);
    } else {
      setCurrentWeapon(currentWeapon - 1);
    }
  };

  return (
    <div className="weapons-carrusell" style={carrusell}>
      <div className="equipedWeapons" style={equipedWeapons}>
        <button
          className="weapons-carrusell__left"
          style={carBtn}
          onClick={rotateLeft}
        >
          {"<"}
        </button>

        <div className="weapons-carrusell__center" style={weaponEntry}>
          {armoury[equiped[currentWeapon].name]?.name ||
            `${equiped[currentWeapon].name}!!!`}
          <div></div>
        </div>

        <button
          className="weapons-carrusell__right"
          style={carBtn}
          onClick={rotateRight}
        >
          {">"}
        </button>
      </div>
      {/* <div className="dots" style={dots}>
        // TODO: click the dots ? 
        {equiped.map((e, i) => (
          <span key={i}> . </span>
        ))}
      </div> */}
    </div>
  );
};

export default WeaponsCarrusell;
