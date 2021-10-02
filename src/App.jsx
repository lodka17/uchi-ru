import React, { useEffect, useState } from "react";
import "./App.scss";
import "./assets/fonts/fonts.css";
// import calendar from "./calendar.svg";
// import { InfoBlock } from "./components-ui/InfoBlock/InfoBlock";
import { Progress } from "./components-ui/Progress";
// import { RegistrationBL } from "./components-bl/RegistrationBL/RegistrationBL";
// import { Registration } from "./components-bl/Registration/";
// import { StartingPage } from "./components-bl/StartingPage/StartingPage";
import { Header } from "./components/Header/Header";
// import { InfoCard } from "./components/InfoCard/InfoCard";
import { Profile } from "./components/Profile";
// import { History } from "./components/History/History";
// import { StartingForm } from "./components/StartingForm/StartingForm";
//   <History />

const App = () => {
  const [procent, setProcent] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setProcent((prev) => prev + 1), 700);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="App">
      <Header showMark={true} />
      <Profile procent={`${procent}%`} level={procent} />
    </div>
  );
};

export default App;
