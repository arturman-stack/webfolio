"use client"

import Link from "next/link";
import React from "react";

const SeeMoreButton = ({ link, onClick, navigation = true, className = "", self = '', text = "Տեսնել Ավելին",  textSize = "text-p", backgroundColor = "button-bg-gradient hover:bg-primary-500", textColor = "text-black-500 hover:text-white-500" }) => {
  return navigation ? (
    <div className={`flex w-max h-max ${self}`}>
      <Link href={link || '#'}
            className={`w-max p-[1.5vw] duration-200 border-[.1vw] hover:duration-200 text-center select-none cursor-pointer ${textSize} ${backgroundColor} ${textColor} ${className}`}>{text}</Link>
    </div>
  ) : (
    <div className={`flex w-max h-max ${self}`} onClick={onClick}>
      <span className={`w-max p-[1.5vw] duration-200 border-[.1vw] hover:duration-200 text-center select-none cursor-pointer ${textSize} ${backgroundColor} ${textColor} ${className}`}>{text}</span>
    </div>
  );
};

export default SeeMoreButton;
