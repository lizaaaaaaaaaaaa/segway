import React, { FC } from "react";
import styles from "./Header.module.scss";
import HeaderTop from "./headerTop/HeaderTop";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <HeaderTop />
    </header>
  );
};

export default Header;
