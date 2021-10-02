import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import "./assets/fonts/fonts.css";
// import { RegistrationBL } from "./components-bl/RegistrationBL/RegistrationBL";
// import { Registration } from "./components-bl/Registration/";
// import { StartingPage } from "./components-bl/StartingPage/StartingPage";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
// import { History } from "./components/History/History";
import { Routing } from "./components/Routing/Routing";

//   <History />

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header showMark={true} />
      <Routing />
    </BrowserRouter>
  </div>
);

export default App;
