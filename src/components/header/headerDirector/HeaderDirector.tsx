import React, { FC } from "react";
import styles from "./HeaderDirector.module.scss";
import avatar from "../../../assets/images/header/director.jpg";

const HeaderDirector: FC = () => {
  return (
    <div className={styles.header__director}>
      <img src={avatar} alt="director image" />
      <div>
        <h6 className={styles.header__name}>jonh smith</h6>
        <a href="#" className={styles.header__link}>Ask a question to the director</a>
      </div>
    </div>
  );
};

export default HeaderDirector;
