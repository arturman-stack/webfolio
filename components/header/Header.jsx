"use client"

import Menu from "@/components/header/menu/Menu";
import Logo from "@/components/header/Logo";
import Languages from "@/components/languages/Languages";

const Header = ({data}) => {
  let {menu} = data;
  return (
    <header className="transition-[width] duration-300 fixed top-0 left-0 right-0 z-50 flex py-4 justify-center items-center pointer-events-none">
      <div className="duration-300 mx-auto flex gap-[2vw] h-16 rounded-full max-w-screen-sm items-center justify-between py-[.5vw] px-[.5vw] relative pointer-events-auto border border-[#ffffff26] bg-[#ffffff14] backdrop-blur-[24px]">
        <Logo/>
        <Menu data={{menu}}/>
        <Languages />
      </div>
    </header>
  );
};

export default Header;
