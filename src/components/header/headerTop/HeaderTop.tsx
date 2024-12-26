import React, { FC } from "react";
import NavList from "../navList/NavList";
import styles from "./HeaderTop.module.scss";
import HeaderTools from "../headerTools/HeaderTools";

const HeaderTop: FC = () => {
  return (
    <section className={styles.header__top}>
      <div className={`container ${styles.header__inner}`}>
        <nav className={styles.nav}>
          <NavList />
        </nav>
        <HeaderTools />
      </div>
    </section>
  );
};

export default HeaderTop;
