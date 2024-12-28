import React from "react";
import whiteMenuItem from "../../../../assets/images/icons/header/menu-item-white.svg";
import greyMenuItem from "../../../../assets/images/icons/header/menu-item-grey.svg";
import styles from "./HeadermenuItem.module.scss";

const HeaderMenuItem = () => {
  return (
    <picture className={styles.menu__picture}>
      <source srcSet={greyMenuItem} media="(max-width: 480px)" />
      <source srcSet={whiteMenuItem} media="(max-width: 690px)" />
      <img src={whiteMenuItem} alt="menu item" />
    </picture>
  );
};

export default HeaderMenuItem;
