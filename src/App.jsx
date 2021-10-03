/* eslint-disable */
import { Button } from "antd";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "./assets/fonts/fonts.css";
import "./App.scss";
// import calendar from "./calendar.svg";
// import { InfoBlock } from "./components-ui/InfoBlock/InfoBlock";
import { Progress } from "./components-ui/Progress";
// import { RegistrationBL } from "./components-bl/RegistrationBL/RegistrationBL";
// import { Registration } from "./components-bl/Registration/";
// import { StartingPage } from "./components-bl/StartingPage/StartingPage";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
// import { InfoCard } from "./components/InfoCard/InfoCard";
import { Profile } from "./components/Profile";
// import { History } from "./components/History/History";

import { Routing } from "./components/Routing/Routing";
import { userStore } from "./store/auth/AuthStore";

//   <History />
const App = observer(() => {
  useEffect(() => {
    userStore.auth({
      "username": "test88",
      "password": "qsc_user@1",
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header showMark={true} />
        <Routing />
      </BrowserRouter>
    </div>
  );
});

export default App;
