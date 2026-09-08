"use client";

import React from 'react';
import {useTranslation} from "react-i18next";

const GlobalLoading = () => {

  const {t} = useTranslation();

  return (
    <div className="w-full h-screen absolute left-0 top-0 flex justify-center items-center bg-black-400 z-[99999999]">
      <div className="police-loading-wrapper">
        <div className="police-stripe-bar">
          <div className="police-badge-glow"></div>
          <div className="police-lights">
            <div className="police-light blue"></div>
            <div className="police-light white"></div>
            <div className="police-light red"></div>
          </div>
          <span className="police-loading-text">{t("loading")}...</span>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoading;