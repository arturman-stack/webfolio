"use client"

import Menu from "@/components/header/menu/Menu";
import Logo from "@/components/header/Logo";
import Languages from "@/components/languages/Languages";
import GlassSurface from "@/components/bits/GlassSurface";

const Header = ({data}) => {
  let {menu} = data;

  return (
    <header className="transition-[width] duration-300 fixed top-0 left-0 right-0 z-50 flex py-[1vw] justify-center items-center pointer-events-none mobile:top-1">
      <GlassSurface
        className="!w-max !h-max duration-300 mx-auto flex !rounded-full w-screen-sm items-center justify-between py-[.5vw] px-[.5vw] !relative pointer-events-auto mobile:py-[2vw] mobile:px-[2vw] mobile:mx-2"
        childrenClassName="gap-[2vw]"
      >
        <Logo/>
        <Menu data={{menu}} />
        <Languages />
      </GlassSurface>
    </header>
  );
};

export default Header;
