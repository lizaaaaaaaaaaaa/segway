import React, { FC } from "react";
import logoIcon from "../../../assets/images/icons/header/logo.svg";

const Logo: FC<{ className?: string }> = ({ className }) => {
  return (
    <a href="#" className={className ? className : ""}>
      <img src={logoIcon} alt="logo" />
    </a>
  );
};

export default Logo;
