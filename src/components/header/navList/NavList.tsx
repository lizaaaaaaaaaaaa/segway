import React, { FC, useEffect, useState } from "react";
import NavItem from "../navItem/NavItem";
import styles from "./NavList.module.scss";
type PropsType = {
  navVisibility: boolean;
};

const NavList: FC<PropsType> = ({ navVisibility }) => {
  return (
    <ul
      className={`${styles.nav__list} ${
        window.innerWidth <= 690 ? styles["nav__list-mobile"] : ""
      } ${
        navVisibility && window.innerWidth <= 690
          ? styles["nav__list-active"]
          : ""
      }`}
    >
      <NavItem link="#">REVIEWS</NavItem>
      <NavItem link="#">SHIPPING AND PAYMENT</NavItem>
      <NavItem link="#">WHOLESALE</NavItem>
      <NavItem link="#">BLOG</NavItem>
      <NavItem link="#">CONTACTS</NavItem>
    </ul>
  );
};

export default NavList;
