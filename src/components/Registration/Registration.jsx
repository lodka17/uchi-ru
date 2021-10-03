import { Input } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import key from "weak-key";
import { Button } from "../../components-ui/Button/";
// import { Input } from "../../components-ui/Input/";
import { MarginGroup } from "../../components-ui/MarginGroup/";
import { Title } from "../../components-ui/Title/";
import styles from "./styles.module.scss";

const registrationFields = [
  { placeholder: "Фамилия", name: "last_name" },
  { placeholder: "Имя", name: "first_name" },
  { placeholder: "Отчество", name: "middle_name" },
  { placeholder: "Номер телефона", name: "username" },
];

export const Registration = ({
  onChange,
  state,
  onRemember,
  onSubmit,
  isAuthorized,
  setIsAuthorized,
}) => {
  return (
    <div className={styles.registration}>
      <MarginGroup isColumn className={styles.form}>
        {!isAuthorized && (
          <>
            <Title className={styles.title}>Регистрация</Title>
            <MarginGroup isColumn gap={24}>
              {registrationFields.map((el) => (
                <Input
                  className={styles.input}
                  hat={state[el.name] && el.placeholder}
                  key={key(el)}
                  type="text"
                  onChange={onChange}
                  name={el.name}
                  placeholder={el.placeholder}
                  value={state[el.name]}
                  allowClear
                  size="large"
                />
              ))}
              <Input.Password
                className={styles.input}
                onChange={onChange}
                name="password"
                placeholder="Пароль"
                value={state["password"]}
                allowClear
                size="large"
              />
            </MarginGroup>
            <Button onClick={onSubmit} className={styles.button}>
              Присоединиться
            </Button>
            <p className={styles.remember} onClick={setIsAuthorized}>
              Уже зарегестрирован?
            </p>
          </>
        )}
        {isAuthorized && (
          <>
            <Title className={styles.title}>Авторизация</Title>
            <MarginGroup isColumn gap={24}>
              <Input
                className={styles.input}
                type="text"
                onChange={onChange}
                name="username"
                placeholder={"Номер телефона"}
                value={state.username}
                allowClear
                size="large"
              />
              <Input.Password
                className={styles.input}
                onChange={onChange}
                name="password"
                placeholder="Пароль"
                value={state.password}
                allowClear
                size="large"
              />
              <Button onClick={onSubmit} className={styles.button}>
                Войти
              </Button>
              <p className={styles.remember} onClick={onRemember}>
                Забыли логин или пароль ?
              </p>
            </MarginGroup>
          </>
        )}
      </MarginGroup>
    </div>
  );
};

Registration.propTypes = {
  onChange: PropTypes.func,
  onRemember: PropTypes.func,
  onSubmit: PropTypes.func,
  state: PropTypes.object,
};
