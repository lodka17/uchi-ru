import React from "react";
import AuthCode from "react-auth-code-input";
import { useHistory } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";
import { Button } from "../../components-ui/Button/";
import { MarginGroup } from "../../components-ui/MarginGroup";
import styles from "./styles.module.scss";

export const StartingForm = () => {
  const isCodeSent = true;
  const number = "+7 000  *** 00 00";
  const history = useHistory();
  const [seconds, setSeconds] = React.useState(60);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("");
      setLoading(false);
    }
  });
  return (
    <div className={styles.wrapper}>
      {isCodeSent && (
        <div className={styles.container}>
          <img alt={"logo"} src={logo} className={styles.logo} />
          <p className={styles.welcome}>Добро пожаловать!</p>
          <p className={styles.text}>Войти как</p>
          <MarginGroup gap={48}>
            <Button onClick={() => history.push("/register")} className={styles.buttons}>
              Ученик
            </Button>
            <Button onClick={() => history.push("/register")} className={styles.buttons}>
              Учитель
            </Button>
          </MarginGroup>
        </div>
      )}
      {!isCodeSent && (
        <div className={styles.container}>
          <img alt={"logo"} src={logo} className={styles.logo} />
          <p className={styles.welcome}>Введите код</p>
          <p className={styles.text}>Отправили SMS на номер {number}</p>
          <AuthCode
            characters={4}
            onChange={(e) => console.log(e)}
            containerClassName={styles.otpContainer}
            inputClassName={styles.otp}
          />
          {loading && <p className={styles.resentCode}>Запросить повторно через 00:{seconds}</p>}
          {!loading && <Button className={styles.buttons}>Запросить повторно</Button>}
          <p onClick={() => console.log()} className={styles.help}>
            Код не приходит?
          </p>
        </div>
      )}
    </div>
  );
};
