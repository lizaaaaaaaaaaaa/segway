import React from "react";
import HeaderMenuItem from "./headerMenuItem/HeaderMenuItem";

type Props = {};

const HeaderMenu: React.FC<Props> = () => {
  return (
    <button>
      <HeaderMenuItem />
      <HeaderMenuItem />
      <HeaderMenuItem />
    </button>
  );
};

export default HeaderMenu;
