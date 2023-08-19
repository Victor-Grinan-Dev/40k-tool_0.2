import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import IndexCard from "./pages/indexCard/IndexCard";
import MyModels from "./pages/myModels/MyModels";
// import Card from "./components/card/Card";
import Grapharmy from "./pages/grapharmy/Grapharmy";
import { useEffect } from "react";
// import { creator } from "./data/creator";

import { useDispatch } from "react-redux";
import { setData } from "./app/appSlice";
import { testData } from "./data/testData";
import { spacemarines_data } from "./data/data";
import { armoury } from "./data/armory";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //loaddata
    dispatch(
      setData({
        units: spacemarines_data,
        armoury: armoury,
      })
    );

    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="grapharmy" element={<Grapharmy />} />
          <Route path="grapharmy/:index" element={<IndexCard />} />
          <Route path="mymodels" element={<MyModels />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
