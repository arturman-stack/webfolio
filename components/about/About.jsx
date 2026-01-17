"use client"

import React from 'react';
import LightRays from "@/components/bits/LightRays";
import Link from "next/link";
import {FaLinkedin, FaTelegram} from "react-icons/fa";
import {Translation} from "@/utils/translation";
import SplitText from "@/components/bits/SplitText";
import Line from "@/components/ui/Line";

const About = ({data}) => {
	const {about} = data;
	const title = Translation(about?.translation, "name");
	const description = Translation(about?.translation, "description");

	return (
		<section className="relative flex justify-center h-[45.5vw] mobile:h-[100vw]" id="about">
			<LightRays/>
			<div className="absolute w-full h-full flex flex-col justify-center items-center px-[10%] gap-[1vw] top-0 left-0 z-10 mobile:gap-[2vw]">
				<SplitText text={title} className="text-[4vw] font-bold mobile:text-[8vw]" />
				<p className="text-[1.2vw] text-center mobile:text-[3.5vw]">{description}</p>
				<div className="flex items-center gap-[2vw] mt-[4vw] mobile:gap-[3vw] mobile:mt-[5vw]">
					<Link
						target="_blank"
						href="https://www.linkedin.com/in/arturmrteyan"
						className="px-[2vw] py-[1vw] text-[1.2vw] bg-blue-linked-in font-bold rounded-full flex items-center duration-300 hover:ring-2 hover:ring-white-500 mobile:text-[4vw] mobile:px-[4vw] mobile:py-[2vw]"
					>
						Linked <FaLinkedin/>
					</Link>
					<Link
						target="_blank"
						href="https://t.me/arturmangg"
						className="px-[2vw] py-[1vw] text-[1.2vw] bg-blue-telegram font-bold rounded-full flex items-center gap-1 duration-300 hover:ring-2 hover:ring-white-500 mobile:text-[4vw] mobile:px-[4vw] mobile:py-[2vw]"
					>
						<FaTelegram/> Telegram
					</Link>
				</div>
			</div>

			{/* Line Gradient Style */}
			<Line />
		</section>
	);
};

export default About;
