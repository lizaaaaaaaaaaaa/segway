import React, { FC, useState } from "react";
import NavList from "../navList/NavList";
import styles from "./HeaderTop.module.scss";
import HeaderTools from "../headerTools/HeaderTools";
import HeaderMenu from "../headerMenu/HeaderMenu";

const HeaderTop: FC = () => {
  const [isNavShow, setIsNavShow] = useState<boolean>(false);

  const changeNavVisibility = () => {
    setIsNavShow(!isNavShow);
  };
  return (
    <section className={styles.header__top}>
      <div className={`container ${styles.header__inner}`}>
        <HeaderMenu navVisibility={isNavShow} changeNavVisibility={changeNavVisibility} />
        <nav className={styles.nav}>
          <NavList navVisibility={isNavShow} />
        </nav>
        <HeaderTools />
      </div>
    </section>
  );
};

export default HeaderTop;
