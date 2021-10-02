import PropTypes from "prop-types";
import React from "react";
import key from "weak-key";
import { InfoBlock } from "../../components-ui/InfoBlock/InfoBlock";
import { MarginGroup } from "../../components-ui/MarginGroup";
import coinSvg from "./images/coin.svg";
import editSvg from "./images/edit.svg";
import styles from "./styles.module.scss";

export const InfoCard = ({ age, img, lastname, firstname, middlename, status, coin, blocks }) => (
  <div className={styles.infoCard}>
    <div className={styles.container}>
      <MarginGroup isColumn gap={22}>
        <div className={styles.info}>
          <img className={styles.img} src={img} alt="avatar" />
          <p className={styles.name}>
            {lastname} {firstname}
            <br /> {middlename}
          </p>
          <p className={styles.status}>{status}</p>
        </div>
        <div className={styles.age}>{`${age} лет`}</div>
      </MarginGroup>
      <div className={styles.cash}>
        <p className={styles.cashTitle}>Мои U coin</p>
        <MarginGroup gap={21} className={styles.cashValue}>
          <img src={coinSvg} alt="coin" />
          <p>{coin}</p>
        </MarginGroup>
      </div>
    </div>
    <div className={styles.container}>
      <MarginGroup gap={32} className={styles.blocks}>
        {blocks.map((el) => (
          <InfoBlock key={key(el)} img={el.img} value={el.value} title={el.title} />
        ))}
      </MarginGroup>
      <MarginGroup gap={17} className={styles.edit}>
        <img src={editSvg} alt="edit" className={styles.editImg} />
        <p>Редактировать</p>
      </MarginGroup>
    </div>
  </div>
);

InfoCard.propTypes = {
  age: PropTypes.string,
  img: PropTypes.string,
  lastname: PropTypes.string,
  firstname: PropTypes.string,
  middlename: PropTypes.string,
  coin: PropTypes.string,
  status: PropTypes.string,
  blocks: PropTypes.array,
};

InfoCard.defaultProps = {
  blocks: [],
};
