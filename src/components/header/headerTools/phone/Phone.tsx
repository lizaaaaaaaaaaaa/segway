import React, { FC } from "react";
import phoneIcon from "../../../../assets/images/icons/header/phone.svg";

const Phone: FC<{ className?: string }> = ({ className }) => {
  return (
    <a href="tel:+18888888888" className={className}>
      <span>+1 (888) 888-88-88</span>
      <picture>
        <source srcSet={phoneIcon} media="(max-width: 480px)" />
        <img src={phoneIcon} alt="phone" />
      </picture>
    </a>
  );
};

export default Phone;
