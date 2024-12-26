import React, { FC } from "react";
import styles from "./Header.module.scss";
import HeaderTop from "./headerTop/HeaderTop";
import HeaderBottom from "./headerBottom/HeaderBottom";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
