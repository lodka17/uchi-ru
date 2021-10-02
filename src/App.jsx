import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import "./assets/fonts/fonts.css";
// import { RegistrationBL } from "./components-bl/RegistrationBL/RegistrationBL";
// import { Registration } from "./components-bl/Registration/";
// import { StartingPage } from "./components-bl/StartingPage/StartingPage";
import { ErrorPage } from "./components/404/404";
// import { Answers } from "./components/Answers/Answers";
import { Header } from "./components/Header/Header";
// import { History } from "./components/History/History";
// import { StartingForm } from "./components/StartingForm";
// import { Questions } from "./components/Questions/Questions";
//   <History />
const App = () => (
  <div className="App">
    <Header showMark={true} />
    <ErrorPage />
  </div>
);

export default App;
