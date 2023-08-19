import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon-package/meLogo-white-border.png";
import Menu from "./menu/Menu";

const Navegator = () => {
  return (
    <div className="navegator">
      <Link className="navegator__nav-link" to={"/"}>
        <img className="navegator__logo" src={logo} alt="logo" />
      </Link>

      <ul className="navegator__list">
        {/* <li>
          <Link className="navegator__nav-link" to={"/"}>
            Home
          </Link>
        </li> */}
        {/* <li className="navegator__item">
          <Link className="navegator__nav-link" to={"about"}>
            About
          </Link>
        </li> */}
        {/* <li className="navegator__item">
          <Link className="navegator__nav-link" to={"icard"}>
            I-Card
          </Link>
        </li> */}
        <li className="navegator__item">
          <Link className="navegator__nav-link" to={"mymodels"}>
            My Models
          </Link>
        </li>
        <li className="navegator__item">
          <Link className="navegator__nav-link" to={"grapharmy"}>
            Grapharmy
          </Link>
        </li>
        <Menu />
      </ul>
    </div>
  );
};

export default Navegator;
