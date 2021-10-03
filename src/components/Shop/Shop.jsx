import React from "react";
import styles from "./styles.module.scss";
import shop from "../../assets/images/shop.svg";
import { Button } from "../../components-ui/Button/";
import { MarginGroup } from "../../components-ui/MarginGroup";
import coinSvg from "../InfoCard/images/coin.svg";
import hudi from "../../assets/images/hudi.svg";
import pin from "../../assets/images/pin.svg";

export const Shop = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <p className={styles.header}>Магазин</p>
        <div className={styles.cash}>
          <p className={styles.cashTitle}>Мои U coin</p>
          <MarginGroup gap={21} className={styles.cashValue}>
            <img src={coinSvg} alt="coin" />
            <p>{30}</p>
          </MarginGroup>
        </div>
      </div>
      <MarginGroup gap={43} className={styles.flexWrap}>
        <MarginGroup gap={43} className={styles.shop}>
          <div className={styles.container}>
            <div className={styles.module}>
              <div className={styles.content}>
                <div className={styles.buy}>
                  <p className={styles.title}>Футболка белая</p>
                  <MarginGroup className={styles.marginGroup} gap={5}>
                    <img src={coinSvg} alt="coin" />
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
        </MarginGroup>
        <MarginGroup gap={43} className={styles.shop}>
          <div className={styles.container}>
            <div className={styles.module}>
              <div className={styles.content}>
                <div className={styles.buy}>
                  <p className={styles.title}>Худи черное</p>
                  <MarginGroup className={styles.marginGroup} gap={5}>
                    <img src={coinSvg} alt="coin" />
                    <span className={styles.price}>10</span>
                    <p className={styles.money}>muc</p>
                  </MarginGroup>
                </div>
                <Button className={styles.button}>Купить</Button>
              </div>
              <div>
                <img className={styles.hudi} src={hudi} />
              </div>
            </div>
          </div>
        </MarginGroup>
        <MarginGroup gap={43} className={styles.shop}>
          <div className={styles.container}>
            <div className={styles.module}>
              <div className={styles.content}>
                <div className={styles.buy}>
                  <p className={styles.title}>Футболка белая</p>
                  <MarginGroup className={styles.marginGroup} gap={5}>
                    <img src={coinSvg} alt="coin" />
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
        </MarginGroup>
        <MarginGroup gap={43} className={styles.shop}>
          <div className={styles.container}>
            <div className={styles.module}>
              <div className={styles.content}>
                <div className={styles.buy}>
                  <p className={styles.title}>Значок</p>
                  <MarginGroup className={styles.marginGroup} gap={5}>
                    <img src={coinSvg} alt="coin" />
                    <span className={styles.price}>10</span>
                    <p className={styles.money}>muc</p>
                  </MarginGroup>
                </div>
                <Button className={styles.button}>Купить</Button>
              </div>
              <div>
                <img className={styles.pin} src={pin} />
              </div>
            </div>
          </div>
        </MarginGroup>
        <MarginGroup gap={43} className={styles.shop}>
          <div className={styles.container}>
            <div className={styles.module}>
              <div className={styles.content}>
                <div className={styles.buy}>
                  <p className={styles.title}>Футболка белая</p>
                  <MarginGroup className={styles.marginGroup} gap={5}>
                    <img src={coinSvg} alt="coin" />
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
        </MarginGroup>
        <MarginGroup gap={43} className={styles.shop}>
          <div className={styles.container}>
            <div className={styles.module}>
              <div className={styles.content}>
                <div className={styles.buy}>
                  <p className={styles.title}>Худи черное</p>
                  <MarginGroup className={styles.marginGroup} gap={5}>
                    <img src={coinSvg} alt="coin" />
                    <span className={styles.price}>10</span>
                    <p className={styles.money}>muc</p>
                  </MarginGroup>
                </div>
                <Button className={styles.button}>Купить</Button>
              </div>
              <div>
                <img className={styles.hudi} src={hudi} />
              </div>
            </div>
          </div>
        </MarginGroup>
      </MarginGroup>
    </div>
  );
};
