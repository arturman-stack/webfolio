"use client"

import React from 'react';
import {useTranslation} from "react-i18next";

function Footer() {
  const {t} = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center text-[1vw] py-[.5vw] bg-primary-500 text-secondary-500 border-t-[.1vw] border-t-gray-100 mobile:text-[2.5vw] mobile:py-[1vw]">
      © {year}. {t("copyright")}
    </footer>
  );
}

export default Footer;