import React, { FC } from "react";
import cartIcon from "../../../assets/images/icons/header/cart.svg";
import styles from "./Cart.module.scss";

const Cart: FC = () => {
  return (
    <button className={styles.cart__btn}>
      <span className={styles.cart__counter}>0</span>
      <img src={cartIcon} alt="cart" />
    </button>
  );
};

export default Cart;
