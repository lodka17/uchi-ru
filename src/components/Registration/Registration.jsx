import PropTypes from "prop-types";
import React from "react";
import key from "weak-key";
import { Button } from "../../components-ui/Button/";
import { Input } from "../../components-ui/Input/";
import { MarginGroup } from "../../components-ui/MarginGroup/";
import { Title } from "../../components-ui/Title/";
import styles from "./styles.module.scss";

const registrationFields = [
  { placeholder: "Фамилия", name: "lastname" },
  { placeholder: "Имя", name: "firstname" },
  { placeholder: "Отчество", name: "midlename" },
  { placeholder: "Номер телефона", name: "phone" },
  { placeholder: "Пароль", name: "email" },
];

export const Registration = ({ onChange, state, onSubmit, onRemember }) => (
  <div className={styles.registration}>
    <MarginGroup isColumn className={styles.form}>
      <Title className={styles.title}>Регистрация</Title>
      <MarginGroup isColumn gap={24}>
        {registrationFields.map((el) => (
          <Input
            hat={state[el.name] && el.placeholder}
            key={key(el)}
            type="text"
            onChange={onChange}
            name={el.name}
            placeholder={el.placeholder}
            value={state[el.name]}
          />
        ))}
      </MarginGroup>
      <Button onClick={onSubmit} className={styles.button}>
        Присоединиться
      </Button>
      <p className={styles.remember} onClick={onRemember}>
        Забыли логин или пароль ?
      </p>
    </MarginGroup>
  </div>
);

Registration.propTypes = {
  onChange: PropTypes.func,
  onRemember: PropTypes.func,
  onSubmit: PropTypes.func,
  state: PropTypes.object,
};
