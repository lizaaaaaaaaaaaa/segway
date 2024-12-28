import React, { FC } from "react";
import styles from "./Instagram.module.scss";
import instagramIcon from "../../../../assets/images/icons/header/instagram.svg";
import instagramGreyIcon from "../../../../assets/images/icons/header/instagram-grey.svg";

const Instagram: FC<{ className?: string }> = ({ className }) => {
  return (
    <a
      href="https://www.instagram.com/segway/?locale=ru&hl=am-et"
      target="_blank"
      className={className}
    >
      <picture>
        <source srcSet={instagramGreyIcon} media="(max-width: 480px)" />
        <source srcSet={instagramIcon} />
        <img src={instagramIcon} alt="instagram" />
      </picture>
    </a>
  );
};

export default Instagram;
