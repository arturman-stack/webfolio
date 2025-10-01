"use client"

import React from 'react';
import LightRays from "@/components/bits/LightRays";
import Link from "next/link";
import {FaLinkedin} from "react-icons/fa";

const About = ({data}) => {
	const {about} = data;

	return (
		<div className="relative overflow-hidden h-screen">
			<LightRays/>
			<div className="absolute w-full h-full flex flex-col justify-center items-center gap-[1vw] top-0 left-0 z-10">
				<h1 className="text-[4vw] font-bold">Hi, I'm Artur Mrteyan</h1>
				<p className="text-[1.2vw]">Front-End Web Developer — JavaScript, React.js, Next.js and TypeScript</p>
				<div className="flex items-center gap-[2vw] mt-[4vw]">
					<Link
						target="_blank"
						href="https://www.linkedin.com/in/arturmrteyan"
						className="px-[2vw] py-[1vw] bg-blue-linked-in font-bold rounded-full flex items-center"
					>
						Linked <FaLinkedin />
					</Link>
					<button className="px-[2vw] py-[1vw] bg-gray-500/10 rounded-full">Download CV</button>
				</div>
			</div>
			{/*<DotGrid />*/}
			{/*<DarkVeil/>*/}
			{/*<div className="w-full flex justify-center gap-[5vw] after:content-[''] after:absolute after:bottom-0 after:right-[40%] after:h-full after:w-[.05vw] after:bg-gray-100">*/}
			{/*<div className="w-[30vw] h-[40vw] bg-fixed bg-no-repeat bg-cover bg-about-parallax-image animate-slide-left duration-300"></div>*/}
			{/*<div className="w-[32vw] flex items-end flex-col gap-[4vw]">*/}
			{/*  <div className="w-full flex flex-col gap-[1vw] py-[2vw] bg-primary-500 z-10 animate-slide-top">*/}
			{/*    <p className="text-secondary-500 text-p font-medium tracking-tight uppercase">Մեր Մասին</p>*/}
			{/*    <h1 className="text-secondary-500 text-h1/[3vw] font-bold capitalize">Ինֆորմատիկայի դասերին նոր կրթական տեխնոլոգիաների արդյունավետ օգտագործումը։</h1>*/}
			{/*  </div>*/}
			{/*  <div className="w-[65%] flex flex-col gap-[5vw] text-secondary-500">*/}
			{/*    <p className='text-gray-300 text-small animate-slide-right'>{about?.translation?.description}</p>*/}
			{/*    <Link*/}
			{/*      href={"/about"}*/}
			{/*      ref={buttonRef}*/}
			{/*      className="button w-[9vw] h-[9vw] flex justify-center items-center self-start rounded-full relative overflow-hidden z-20 text-gray-600 text-p border-[.15vw] border-gray-100 cursor-pointer group"*/}
			{/*      onMouseMove={handleMouseMove}*/}
			{/*    >*/}
			{/*      <p className="flex justify-center items-center gap-[.2vw] z-50">Ավլեին <RxArrowTopRight className='text-p'/></p>*/}
			{/*      <div*/}
			{/*        ref={circleRef}*/}
			{/*        className="w-0 h-0 absolute bg-secondary-500 text-primary-500 transition-all ease-in duration-200 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full group-hover:w-[15vw] group-hover:h-[15vw] -z-10"*/}
			{/*      ></div>*/}
			{/*    </Link>*/}
			{/*  </div>*/}
			{/*</div>*/}
			{/*</div>*/}

			{/*Background*/}
			{/*<BackImage*/}
			{/*  width={1440}*/}
			{/*  height={900}*/}
			{/*  src={background}*/}
			{/*  alt="backgroun_about_us"*/}
			{/*  className="w-[8vw] absolute top-1/2 right-0 transform -translate-y-1/2"*/}
			{/*/>*/}
		</div>
	);
};

export default About;
