import React, { useState, useReducer } from "react";
import { Registration } from "../../components/Registration";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

export const RegistrationBL = () => {
  const history = useHistory();
  const [isAuthorized, dispatch] = useReducer((isAuth) => !isAuth, false);
  const [state, setState] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    role: "",
  });

  const handleOnSubmit = () => {
    // const cb = isAuthorized ? userStore.auth : userStore.register;
    // cb(state);
    // if (!isAuthorized) {
    //   dispatch();
    //   return;
    // }
    // history.push("./help");
  };

  const handleOnChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  return (
    <Registration
      state={state}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      isAuthorized={isAuthorized}
      setIsAuthorized={dispatch}
    />
  );
};
