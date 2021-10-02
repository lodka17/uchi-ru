import React from "react";
import "./App.scss";
import "./assets/fonts/fonts.css";
import "antd/dist/antd.css";
// import { RegistrationBL } from "./components-bl/RegistrationBL/RegistrationBL";
// import { Registration } from "./components-bl/Registration/";
// import { StartingPage } from "./components-bl/StartingPage/StartingPage";
import { Header } from "./components/Header/Header";
// import { History } from "./components/History/History";
// import { StartingForm } from "./components/StartingForm/StartingForm";
import { Help } from "./components/Help/Help";
//   <History />
const App = () => (
  <div className="App">
    <Header showMark={true} />
    <Help />
  </div>
);

export default App;
