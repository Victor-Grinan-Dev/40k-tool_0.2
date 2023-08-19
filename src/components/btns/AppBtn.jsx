import React from "react";

const btnStyles = {
  standard: "standard",
  primary: "primary",
  secundary: "secundary",
  warning: "warning",
  danger: "danger",
};

const AppBtn = (props) => {
  const { caption, type, mainFx, secundaryFx } = props;
  const pressBtn = () => {
    if (mainFx) {
      mainFx();
    }
    if (secundaryFx) {
      secundaryFx();
    }
  };
  return (
    <button onClick={pressBtn} className={btnStyles[type]}>
      {caption}
    </button>
  );
};

export default AppBtn;
