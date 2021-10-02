import React from "react";
import styles from "./styles.module.scss";
import shop from "../../assets/images/shop.svg";
import { Button } from "../../components-ui/Button/";
import { MarginGroup } from "../../components-ui/MarginGroup";
import key from "weak-key";

export const Shop = () => {
  const clothes = [
    {
      name: "Белая футболка",
    },
    {
      name: "Черное худи",
    },
    {
      name: "Значок",
    },
    {
      name: "Белая футболка",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <p className={styles.header}>Магазин</p>
        <p className={styles.coins}>Мои U coin</p>
      </div>
      <MarginGroup gap={43} className={styles.shop}>
        {clothes.map((el) => (
          <div className={styles.container} key={key(el)}>
            <div className={styles.module}>
              <div className={styles.content}>
                <div className={styles.buy}>
                  <p className={styles.title}>Футболка белая</p>
                  <MarginGroup gap={5}>
                    <span className={styles.price}>10</span>
                    <p className={styles.money}>muc</p>
                  </MarginGroup>
                </div>
                <Button className={styles.button}>Купить</Button>
              </div>
              <div>
                <img src={shop} />
              </div>
            </div>
          </div>
        ))}
      </MarginGroup>
    </div>
  );
};
