import React, { useState, useReducer } from "react";
import { Registration } from "../../components/Registration";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import {userStore} from "../../store/auth/AuthStore";

export const RegistrationBL = observer(() => {
  const history = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    role: "",
  });

  const handleOnSubmit = () => {
    const cb = userStore.isAuth ? userStore.auth : userStore.register;
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
      isAuthorized={userStore.isAuth}
      setIsAuthorized={() => null}
    />
  );
});
