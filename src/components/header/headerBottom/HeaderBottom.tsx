import React from "react";
import styles from "./HeaderBottom.module.scss";
import HeaderDirector from "../headerDirector/HeaderDirector";
import Logo from "../logo/Logo";

const HeaderBottom = () => {
  return (
    <section className={styles.header__bottom}>
      <div className={`container ${styles.header__inner}`}>
        <Logo className={styles.logo} />
        <HeaderDirector />
      </div>
    </section>
  );
};

export default HeaderBottom;
