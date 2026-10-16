"use client"

import React from 'react';
import Link from "next/link";
import LogoSvg from "@/public/assets/svg/LogoSvg";

const Logo = () => (
  <Link href="/" className="w-[3vw] h-[3vw] flex items-center mobile:w-[8vw] mobile:h-[8vw]">
    <LogoSvg className="w-full h-full" />
  </Link>
);

export default Logo;