'use client';

import React from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {locale} from "@/lib/locale";

const Menu = ({data}) => {
  let {menu} = data;
  const currentPathname = usePathname();

  return (
    <div className="h-full w-max flex items-center relative">
      <nav className="w-full h-full">
        <ul className="h-full flex justify-start gap-[1vw] font-normal">
          {menu?.map(({id, translation, link, status}) => {
              const title = translation?.find(i => i.key === locale())?.name;
            return status ? (
              <li key={id} className="h-full flex justify-center items-center">
                <Link href={link || `#`} className={`group h-[.9vw] flex items-center text-black-500 no-underline ${currentPathname === `/${title}` ? 'text-gray-600' : 'text-white-600'}`}>
                  <span className="relative h-[.9vw] overflow-hidden">
                    <span className="flex flex-col transition-transform duration-700 ease-[ease] group-hover:-translate-y-[.9vw] cursor-pointer">
                      <span
                        className="block text-[.9vw] font-normal leading-[.9vw] origin-right transition-transform duration-700 group-hover:rotate-[20deg] cursor-pointer">
                        {title}
                      </span>
                      <span
                        className="block text-[.9vw] font-normal leading-[.9vw] origin-left rotate-[20deg] transition-transform duration-700 group-hover:rotate-0 cursor-pointer">
                        {title}
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            ) : null
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
