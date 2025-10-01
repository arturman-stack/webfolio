"use client"

import React, {useEffect, useState} from 'react';
import {FaArrowUp} from "react-icons/fa";
import {checkWindow} from "@/utils/GlobalWindow";

function ScrollUp() {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const listener = () => {
        setScrollUp(window.scrollY > 300);
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    scrollUp > 0 ? (
      <div
        onClick={handleScrollUp}
        className="w-[3vw] h-[3vw] fixed right-[1.5vw] bottom-[1.5vw] flex justify-center items-center
          cursor-pointer bg-secondary-500 text-secondary-500 duration-500 z-[99999] rounded-full mix-blend-exclusion mobile:w-[8vw] mobile:h-[8vw]"
      >
        <FaArrowUp className="text-small mix-blend-exclusion" />
      </div>
    ) : null
  );
}

export default ScrollUp;