import React from "react";
import "./App.scss";
import "./assets/fonts/fonts.css";
import calendar from "./calendar.svg";
import { InfoBlock } from "./components-ui/InfoBlock/InfoBlock";
import { Progress } from "./components-ui/Progress";
// import { RegistrationBL } from "./components-bl/RegistrationBL/RegistrationBL";
// import { Registration } from "./components-bl/Registration/";
// import { StartingPage } from "./components-bl/StartingPage/StartingPage";
import { Header } from "./components/Header/Header";
import { InfoCard } from "./components/InfoCard/InfoCard";
// import { Profile } from "./components/Profile";
// import { History } from "./components/History/History";
// import { StartingForm } from "./components/StartingForm/StartingForm";
//   <History />

const blocks = [
  { img: calendar, value: "11.12.2021", title: "Дата рождения" },
  { img: calendar, value: "8 900 000 000 00", title: "Номер телефона" },
  { img: calendar, value: "KonstantinK@mail.ru", title: "Email" },
  { img: calendar, value: "KonstantinK009", title: "Instagram" },
];

const App = () => (
  <div className="App">
    <Header showMark={true} />
    <Progress level={23} procent="20%" />
    <InfoBlock img={calendar} value={"11.12.2021"} title={"Дата рождения"} />
    <InfoCard
      img={calendar}
      age={"15"}
      lastname="Константинович"
      firstname="Константин"
      middlename="Константинопольский"
      status="Ученик"
      coin="10"
      blocks={blocks}
    />
  </div>
);

export default App;
