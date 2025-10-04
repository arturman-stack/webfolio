"use client"

import React from 'react';
import LightRays from "@/components/bits/LightRays";
import Link from "next/link";
import {FaLinkedin} from "react-icons/fa";
import {FaDownload} from "react-icons/fa6";
import {Translation} from "@/utils/translation";
import SplitText from "@/components/bits/SplitText";

const About = ({data}) => {
	const {about} = data;
	const title = Translation(about?.translation, "name");
	const description = Translation(about?.translation, "description");

	const handleDownloadCV = () => {
		const link = document.createElement("a");
		link.href = "/documents/Artur_Mrteyan_CV.pdf"; // path in public folder
		link.download = "Artur_Mrteyan_CV.pdf"; // default filename
		link.click();
	};

	return (
		<div className="relative h-[45vw]">
			<LightRays/>
			<div className="absolute w-full h-full flex flex-col justify-center items-center gap-[1vw] top-0 left-0 z-10">
				<SplitText text={title} className="text-[4vw] font-bold" />
				<p className="text-[1.2vw]">{description}</p>
				<div className="flex items-center gap-[2vw] mt-[4vw]">
					<Link
						target="_blank"
						href="https://www.linkedin.com/in/arturmrteyan"
						className="px-[2vw] py-[1vw] text-[1.2vw] bg-blue-linked-in font-bold rounded-full flex items-center duration-300 hover:ring-2 hover:ring-white-500"
					>
						Linked <FaLinkedin/>
					</Link>
					<button
						onClick={handleDownloadCV}
						className="px-[2vw] py-[1vw] text-[1.2vw] bg-gray-500/10 rounded-full flex items-center gap-[.5vw] duration-300 hover:ring-2 hover:ring-white-500"
					>
						<FaDownload /> Download CV
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
