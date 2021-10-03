/* eslint-disable */
import { Button } from "antd";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

import "antd/dist/antd.css";
import "./assets/fonts/fonts.css";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Routing } from "./components/Routing/Routing";
// import { userStore } from "./store/auth/AuthStore";

//   <History />
const App = () => {
  // useEffect(() => {
  //   userStore.auth({
  //     "username": "test88",
  //     "password": "qsc_user@1",
  //   });
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header showMark={true} />
        <Routing />
      </BrowserRouter>
    </div>
  );
};

export default App;
