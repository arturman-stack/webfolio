"use client"

import Link from "next/link";
import React from "react";
import {useDictionary} from "@/providers/Translation";

const SeeMoreButtonChildren = ({ link, onClick, navigation = true, className = "", self = '', text = "seeMore",  textSize = "text-p mobile:text-mobileSmall", backgroundColor = "button-bg-gradient", textColor = "text-white-500" }) => {
  const {t} = useDictionary();
  return navigation ? (
    <div className={`flex w-max h-max ${self}`}>
      <Link href={link || '#'}
            className={`w-max p-[1.5vw] duration-200 hover:duration-200 text-center select-none cursor-pointer custom-radius mobile:p-[4vw] ${textSize} ${backgroundColor} ${textColor} ${className}`}>{t(text)}</Link>
    </div>
  ) : (
    <div className={`flex w-max h-max ${self}`} onClick={onClick}>
      <span className={`w-max p-[1.5vw] duration-200 hover:duration-200 text-center select-none cursor-pointer custom-radius mobile:p-[4vw] ${textSize} ${backgroundColor} ${textColor} ${className}`}>{t(text)}</span>
    </div>
  );
};

export default SeeMoreButtonChildren;
