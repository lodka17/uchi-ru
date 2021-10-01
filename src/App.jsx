import React from "react";
import "./App.scss";
import './assets/fonts/fonts.css'
import { Header } from "./components/Header/Header";
import { History } from "./components/History/History";
// import { StartingForm } from "./components/StartingForm/StartingForm";

const App = () => (
    <>
        <Header />
        <History />
    </>
)

export default App;
