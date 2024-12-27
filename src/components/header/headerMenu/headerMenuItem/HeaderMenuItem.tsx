import React from "react";
import whiteMenuItem from "../../../../assets/images/icons/header/menu-item-white.svg";
import greyMenuItem from "../../../../assets/images/icons/header/menu-item-grey.svg";

const HeaderMenuItem = () => {
  return (
    <picture>
      <source srcSet={whiteMenuItem} media="(max-width: 480px)" />
      <source srcSet={greyMenuItem} media="(min-width: 481px)" />
      <img src={greyMenuItem} alt="menu item" />
    </picture>
  );
};

export default HeaderMenuItem;
