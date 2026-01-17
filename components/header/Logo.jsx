"use client"

import React from 'react';
import Link from "next/link";
import FrontImage from "@/components/ui/images/FrontImage";
import logo from "@/public/assets/images/logo_main.png";

const Logo = () => {
  return (
    <Link href={"/"} className="w-[3vw] h-[3vw] flex items-center text-primary-500 font-bold text-[2.5vw] mobile:w-[8vw] mobile:h-[8vw]">
      <FrontImage
        width={200}
        height={200}
        src={logo}
        alt="logo"
        className="w-full h-full object-contain"
      />
    </Link>
  );
};

export default Logo;
