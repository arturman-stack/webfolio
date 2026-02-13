"use client"

import React from 'react';
import Link from "next/link";
import {IoIosMail} from "react-icons/io";
import {FaPhoneAlt} from "react-icons/fa";

const Contacts = ({data}) => {
    const {settings} = data;

    return (
      <div className="flex flex-col text-white-500 gap-[2vw]">
          <span
            className="w-max h-max flex justify-center items-center border-b cursor-pointer">
            <Link href={settings?.email ? `mailto: ${settings?.email}` : "#"} className="w-full h-full flex justify-center items-center gap-[2vw] px-[2vw] py-[.5vw] text-mobileSmall">
              <IoIosMail className="text-main mobile:text-mobileH1"/> {settings?.email}
            </Link>
          </span>
          <span
            className="w-max h-max flex justify-center items-center border-b cursor-pointer">
            <Link href="tel: 116" className="w-full h-full flex justify-center items-center gap-[2vw] px-[2vw] pl-[3.5vw] py-[.5vw] text-mobileSmall">
              <FaPhoneAlt className="text-p mobile:text-mobileSmall my-[1vw]"/> 116
            </Link>
          </span>
      </div>
    );
};

export default Contacts;
