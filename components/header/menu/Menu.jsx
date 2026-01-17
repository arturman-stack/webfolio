'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Translation } from "@/utils/translation";

const Menu = ({ data }) => {
  const { menu } = data;
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Only set active if user scrolled past top
          if (entry.isIntersecting && window.scrollY > 20) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
      }
    );

    menu.forEach(item => {
      const section = document.querySelector(item.link);
      if (section) observer.observe(section);
    });

    // Optional: reset active when scroll to top
    const handleScroll = () => {
      if (window.scrollY <= 20) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      menu.forEach(item => {
        const section = document.querySelector(item.link);
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menu]);

  return (
    <div className="h-full w-max flex items-center relative">
      <nav className="w-full h-full">
        <ul className="h-full flex justify-start gap-[1vw] font-normal">
          {menu?.map(({ id, translation, link, status }) => {
            const title = Translation(translation, "name");
            const isActive = activeSection === link.replace('#','');

            return status ? (
              <li key={id} className="h-full flex justify-center items-center">
                <Link
                  href={link || `#`}
                  className={`group h-[1vw] flex items-center text-black-500 no-underline 
                    ${isActive ? 'text-gray-600' : 'text-white-600'}`}
                >
                  <span className="relative h-[1vw] overflow-hidden mobile:h-[3vw]">
                    <span
                      className="flex flex-col transition-transform duration-700 ease group-hover:-translate-y-[1vw] cursor-pointer mix-blend-exclusion mobile:group-hover:-translate-y-[3vw]">
                      <span
                        className="block text-[1vw] font-normal leading-[1vw] origin-right transition-transform duration-700 group-hover:rotate-[20deg] cursor-pointer mobile:text-[3vw] mobile:leading-[3vw]">
                        {title}
                      </span>
                      <span
                        className="block text-[1vw] font-normal leading-[1vw] origin-left rotate-[20deg] transition-transform duration-700 group-hover:rotate-0 cursor-pointer mobile:text-[3vw] mobile:leading-[3vw]">
                        {title}
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            ) : null;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
