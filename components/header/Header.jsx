"use client"

import Menu from "@/components/header/menu/Menu";
import Logo from "@/components/header/Logo";
import Languages from "@/components/languages/Languages";

const Header = ({data}) => {
	let {menu} = data;
	return (
		<header
			className="transition-[width] duration-300 fixed top-0 left-0 right-0 z-50 flex py-[1vw] justify-center items-center pointer-events-none">
			<div
				className="w-max h-max duration-300 mx-auto flex gap-[2vw] rounded-full max-w-screen-sm items-center justify-between
        py-[.5vw] px-[.5vw] relative pointer-events-auto border-[.1vw] border-[#ffffff26] bg-[#ffffff14] backdrop-blur"
			>
				<Logo/>
				<Menu data={{menu}}/>
				<Languages/>
			</div>
		</header>
	);
};

export default Header;
