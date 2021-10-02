import React from "react";
import "./App.scss";
import "./assets/fonts/fonts.css";
import { RegistrationBL } from "./components-bl/RegistrationBL/RegistrationBL";
// import { Registration } from "./components-bl/Registration/";
// import { StartingPage } from "./components-bl/StartingPage/StartingPage";
import { Header } from "./components/Header/Header";
// import { History } from "./components/History/History";
// import { StartingForm } from "./components/StartingForm/StartingForm";
//   <History />
const App = () => (
  <div className="App">
    <Header showMark={true} />
    <RegistrationBL />
  </div>
);

export default App;
