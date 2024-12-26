import React, { FC } from "react";
import NavItem from "../navItem/NavItem";
import styles from "./NavList.module.scss";

const NavList: FC = () => {
  return (
    <ul className={styles.nav__list}>
      <NavItem link="#">REVIEWS</NavItem>
      <NavItem link="#">SHIPPING AND PAYMENT</NavItem>
      <NavItem link="#">WHOLESALE</NavItem>
      <NavItem link="#">BLOG</NavItem>
      <NavItem link="#">CONTACTS</NavItem>
    </ul>
  );
};

export default NavList;
