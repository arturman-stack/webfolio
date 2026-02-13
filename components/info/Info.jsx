"use client";

import React from 'react';
import {Translation} from "@/utils/translation";
import ScrollFloat from "@/components/bits/ScrollFloat";
import Line from "@/components/ui/Line";

function Info({data}) {
	const {info} = data;
	const title = Translation(info?.translation, "name");
	const description = Translation(info?.translation, "description");

	return (
		<section className="pt-[2vw] pb-[5vw] flex flex-col items-center gap-[2vw] relative mobile:pt-[4vw] mobile:pb-[10vw] mobile:gap-[3vw]">
			<ScrollFloat textClassName="text-[3vw] mobile:text-[6vw]">{title}</ScrollFloat>
			<p className="w-4/5 text-center text-[1.1vw] mobile:text-[3.5vw]">{description}</p>

			{/* Line Gradient Style */}
			<Line />
		</section>
	);
}

export default Info;