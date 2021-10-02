import React, { useState } from "react";
import { Registration } from "../../components/Registration";

export const RegistrationBL = () => {
  const [state, setState] = useState({
    username: "",
    firstname: "",
    lastname: "",
    midlename: "",
    email: "",
  });

  const handleOnChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  console.log(state);
  return <Registration state={state} onChange={handleOnChange} />;
};
