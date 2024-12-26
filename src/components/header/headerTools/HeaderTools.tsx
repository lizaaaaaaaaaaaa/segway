import React from "react";
import styles from "./HeaderTools.module.scss";
import Cart from "../cart/Cart";
import instagramIcon from "../../../assets/images/icons/header/instagram.svg";

const HeaderTools = () => {
  return (
    <div className={styles.header__tools}>
      <Cart />
      <a
        href="https://www.instagram.com/segway/?locale=ru&hl=am-et"
        className={styles.header__insta}
      >
        <img src={instagramIcon} alt="instagram" />
      </a>
      <a href="tel:+18888888888" className={styles.header__phone}>
        +1 (888) 888-88-88
      </a>
    </div>
  );
};

export default HeaderTools;
