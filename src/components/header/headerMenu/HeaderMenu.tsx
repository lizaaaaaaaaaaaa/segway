import React, { FC } from "react";
import HeaderMenuItem from "./headerMenuItem/HeaderMenuItem";
import styles from "./HeaderMenu.module.scss";

type Props = {
  changeNavVisibility: () => void;
  navVisibility: boolean;
};

const HeaderMenu: FC<Props> = ({ changeNavVisibility, navVisibility }) => {
  return (
    <button
      className={`${styles.menu} ${navVisibility ? styles["menu-active"] : ""}`}
      onClick={changeNavVisibility}
    >
      <HeaderMenuItem />
      <HeaderMenuItem />
      <HeaderMenuItem />
    </button>
  );
};

export default HeaderMenu;
