import React, { FC } from "react";
import cartIcon from "../../../assets/images/icons/header/cart.svg";
import cartGreyIcon from "../../../assets/images/icons/header/cart-grey.svg";
import styles from "./Cart.module.scss";

const Cart: FC = () => {
  return (
    <button className={styles.cart__btn}>
      <span className={styles.cart__counter}>0</span>
      <picture>
        <source srcSet={cartGreyIcon} media="(max-width: 480px)" />
        <source srcSet={cartIcon} media="(max-width: 690px)" />
        <img src={cartIcon} alt="cart" />
      </picture>
    </button>
  );
};

export default Cart;
