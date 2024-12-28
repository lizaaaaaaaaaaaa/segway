import React from "react";
import styles from "./HeaderTools.module.scss";
import Cart from "../cart/Cart";
import Instagram from "./instagram/Instagram";
import Phone from "./phone/Phone";

const HeaderTools = () => {
  return (
    <div className={styles.header__tools}>
      <Cart />
      <Instagram className={styles.header__insta} />
      <Phone className={styles.header__phone} />
    </div>
  );
};

export default HeaderTools;
