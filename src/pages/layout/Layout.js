import React from "react";
import Navegator from "../../components/navegator/Navegator";
import Main from "./Main";
import Footer from "../../components/footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Navegator />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
