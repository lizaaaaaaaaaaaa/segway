import React, { FC, ReactNode } from "react";
import styles from "./NavItem.module.scss";

type PropsType = {
  link: string;
  children: ReactNode;
};

const NavItem: FC<PropsType> = ({ link, children }) => {
  return (
    <li className={styles.nav__item}>
      <a href={link} className={styles.nav__link}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
