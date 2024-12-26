import React from "react";
import styles from "./HeaderBottom.module.scss";
import logoIcon from "../../../assets/images/icons/header/logo.svg";
import HeaderDirector from "../headerDirector/HeaderDirector";

const HeaderBottom = () => {
  return (
    <section className={styles.header__bottom}>
      <div className={`container ${styles.header__inner}`}>
        <a href="#" className="logo">
          <img src={logoIcon} alt="logo" />
        </a>
        <HeaderDirector />
      </div>
    </section>
  );
};

export default HeaderBottom;
