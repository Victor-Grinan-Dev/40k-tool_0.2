import React from "react";
// import { useSelector } from "react-redux";
import logo from "../../assets/40k_toolkit_logo.png";

const Home = () => {
  // const data = useSelector((state) => state.app.data);

  // return (
  //   <div>
  //     <h1>Home</h1>
  //     {data && data.map((d, i) => <p key={i}>{d.length < 50 ? d : ""}</p>)}
  //   </div>
  // );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>40K Toolkit</h1>
        <p>We make your board-gaming life easier.</p>
        <a
          className="App-link"
          href="https://github.com/Victor-Grinan-Dev/40k-tool"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coolaborate
        </a>
      </header>
    </div>
  );
};

export default Home;
