import React from "react";
import "./App.scss";
import "./assets/fonts/fonts.css";
// import { Registration } from "./components-bl/Registration/";
import { StartingPage } from "./components-bl/StartingPage/StartingPage";
import { Header } from "./components/Header/Header";
// import { History } from "./components/History/History";
// import { StartingForm } from "./components/StartingForm/StartingForm";
//   <History />
const App = () => (
  <>
    <Header />
    <StartingPage />
  </>
);

export default App;
